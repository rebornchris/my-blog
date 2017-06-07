let express = require('express')
let app = express()
let path = require('path')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let session = require('express-session')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

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
    tags: [String],
    comments: []
})

const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String
})

// 创建model
const articleModel = db.model('article', articleSchema) // newClass为创建或选中的集合
const userModel = db.model('user', userSchema)

app.post('/back/saveArticle', function(req, res) {
  let { title, content, createTime, tags } = req.body;
  console.log(title)
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

app.get('/getArticles', function(req, res) {
  articleModel.find().sort({createTime: -1}).then(articles => {
    res.send(articles);
  }).catch(_ => {
    res.sendStatus(500);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
