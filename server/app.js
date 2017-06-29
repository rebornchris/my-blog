let express = require('express')
let app = express()
let path = require('path')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let session = require('express-session')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

const cert = 'rebornchris';

app.use('/static', express.static('../dist/static'));
// app.set('trust proxy', 1); // trust first proxy
app.use(session({
  secret: 'awesome',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Credentials', 'true')

  if(req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next()
  }
})


const mongoose = require('mongoose')
mongoose.Promise = global.Promise
// 连接mongodb
mongoose.connect('mongodb://localhost/blog')
// 实例化连接对象
const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误：'))
db.once('open', (callback) => {
  console.log('MongoDB连接成功！！')
})

const articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    createTime: Number,
    tags: String,
    comments: []
})

const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String
})

// 创建model
const articleModel = db.model('article', articleSchema) // newClass为创建或选中的集合
const userModel = db.model('user', userSchema)

app.use('/back', function(req, res, next) {
  console.log(req.cookies)
  let token = req.cookies.token;
  if(token) {
    let decodedToken = jwt.verify(token, cert);
    userModel.findById(decodedToken.id).then(_ => {
      next();
    }).catch(_ => {
      res.send('no login');
    });
  } else {
    res.send('no login');
  }
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve('../dist/index.html'));
});

app.post('/back/saveArticle', function(req, res) {
  let { title, content, createTime, tags } = req.body;
  articleModel.create({
    title,
    content,
    createTime,
    tags
  }).then(article => {
    res.send(article);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.post('/saveUser', function(req, res) {
  let { username, password } = req.body;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, passwordHash) {
      userModel.create({ username, passwordHash }, function(err) {
        res.sendStatus(200);
      })
    });
  });

});

app.get('/getArticles', function(req, res) {
  articleModel.find().sort({createTime: -1}).then(articles => {
    res.send(articles);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.get('/back/getArticlesInfo', function(req, res) {
  articleModel.find({}, {title: 1, createTime: 1 }).sort({createTime: -1}).then(articlesInfo => {
    res.send(articlesInfo);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.get('/back/deleteArticle', function(req, res) {
  articleModel.findByIdAndRemove(req.query.id).then(delArticle => {
    res.send(delArticle);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.get('/back/getArticle', function(req, res) {
  articleModel.findById(req.query.id).then(articles => {
    res.send(articles);
  }).catch(_=> {
    res.sendStatus(500);
  });
});

app.post('/back/changeArticle', function(req, res) {
  let { id, title, content, createTime, tags } = req.body;

  articleModel.findByIdAndUpdate(id, {
    title,
    content,
    createTime,
    tags
  }, {
    'new': true  // 返回的为新数据
  }).then(newArticle => {
    res.send(newArticle);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.get('/getArticle', function(req, res) {
  articleModel.findById(req.query.id).then(article => {
    res.send(article);
  }).catch(_ => {
    res.sendStatus(500);
  })
});

app.post('/login', function(req, res) {
  let { username, password } = req.body;

  userModel.findOne({username: username}).then(user => {
    bcrypt.compare(password, user.passwordHash, function(err, result) {
      if(err || !result) {
        res.send('password incorrect');
      } else {
        let token = jwt.sign({ id: user._id }, cert);
        res.cookie('token', token, { maxAge: 60 * 60 * 24 * 7 * 1000 });
        res.sendStatus(200);
      }
    });
  }).catch(err => {
    res.send('no such user');
  });
});

app.get('/getArticlesByTag', function(req, res) {
  articleModel.find({tags: req.query.tag}).sort({createTime: -1}).exec().then(articles => {
    res.send(articles);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.get('/getAllTags', function(req, res) {
  articleModel.find().distinct('tags').exec().then(tags => {
    res.send(tags);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.post('/addcomments', function(req, res) {
  let {content, nickname, email, website, id} = req.body
  let createTime = new Date().getTime()
  articleModel.findByIdAndUpdate(id, {'$push':{
    'comments': {
      content: content,
      website: website,
      nickname: nickname,
      email: email,
      createTime: createTime,
      belondId: id
    }
  }}).then(_ => {
    res.sendStatus(200);
  }).catch(e => {
    res.sendStatus(500);
  });
});

app.get('/getComments', function( req, res) {
  articleModel.find().distinct('comments').exec().then(comments => {
    res.send(comments)
  }).catch(_ => {
    res.sendStatus(500)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
