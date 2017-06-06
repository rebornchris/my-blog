let express = require('express')
let app = express()
let path = require('path')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let session = require('express-session')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// 连接mongodb
mongoose.connect('mongodb://localhost/ddd');
// 实例化连接对象
const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接错误：'));
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




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
