<template lang="html">
  <div class="main-body">
    <div class="post-list">
      <div class="content-container">
        <div class="main-content">
          <h2 class="post-title">
            {{article.title}}
          </h2>
          <div class="post-meta">
            <span>{{formatDate(article.createTime)}}</span>
          </div>
          <div class="post-content">
            <div class='markdown-body' v-html='article.content'></div>
            <div class="post-tags">
              <span>#{{ article.tags }}</span>
            </div>
          </div>
        </div>
        <div class="post-comment">
          <div class="comment-brand">
            <span>Comments</span>
          </div>
          <div class="comment-area">
            <textarea name="name" rows="8" cols="80" v-model='comments'></textarea>
            <div class="comment-button">
              <input type="text" v-model='nickname' placeholder="昵称">
              <input type="text" v-model='email' placeholder="邮箱">
              <input type="text" v-model='website' placeholder="网站">
              <div class="btn">
                <button type="button" name="button" @click='addComments'>提交评论</button>
              </div>
            </div>
          </div>
          <div class="comment-list">
            <div class="comments-details" v-for='ct in article.comments'>
              <div class="user-logo">
                <img src="../../assets/uface.jpg" alt="">
                <div class="user-info">
                  <span>{{ ct.nickname }}</span>
                  <span>{{ formatDate(ct.createTime) }}</span>
                </div>
                <div class="reply">
                  <i @click='reply(ct.nickname)' class="el-icon-arrow-left"></i>
                </div>
              </div>
              <div class="comments-content">
                <p>{{ ct.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <Slider></Slider>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Slider from '../common/slider.vue'
import Tools from '../../config/tools'
require('../../css/markdown.css')
export default {
  components: {
    Slider
  },
  created () {
    this.getArticleById()
  },
  watch: {
    '$route': 'getArticleById'
  },
  data () {
    return {
      ct: '',
      article: {},
      content: '',
      nickname: '',
      website: '',
      comments: '',
      email: ''
    }
  },
  methods: {
    getArticleById () {
      axios.get(`http://localhost:3000/getArticle`, {
        params: {
          id: this.$route.params.id
        }
      }).then(res => {
        this.article = res.data
      })
    },
    addComments () {
      let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
      if (!reg.test(this.email) || this.comments === '' || this.website === '' || this.nickname === '') {
        this.$message(
          {
            type: 'error',
            message: '请重新输入'
          })
        return
      }
      axios.post('http://localhost:3000/addcomments', {
        id: this.$route.params.id,
        content: this.comments,
        email: this.email,
        website: this.website,
        nickname: this.nickname
      }).then(res => {
        this.$message(
          {
            type: 'success',
            message: '评论成功'
          })
        this.comments = ''
        this.website = ''
        this.nickname = ''
        this.email = ''
      })
    },
    reply (t) {
      this.comments = `@${t} `
      console.log(this.comments)
    },
    formatDate (time) {
      let temp = Tools.frontFormatDate(time)
      return Tools.cnFormatEn(temp)
    }
  }
}
</script>

<style lang="less" scoped>
.main-body{
  width: 100%;
  display: flex;
  justify-content: center;
  .post-list{
    width: 67%;
    padding-top: 50px;
    display: flex;
    justify-content: flex-start;

    .content-container{
      margin-bottom: 50px;
      display: flex;
      flex-direction: column;
      width: 75%;

      .main-content{
        margin-bottom: 20px;
        padding: 0px 50px 15px 10px;
        .post-title{
          text-align: left;
          font-size: 25px;
          font-weight: normal;
          line-height: 1.4;
          margin: 0;
          a{
            color: #666;
            text-decoration: none;
            cursor: pointer;
          }
        }
        .post-meta{
          padding: 0;
          margin: 5px;
          margin-right: 50px;
          color: #999;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          /* text-indent:0.15em; */
        }
        .post-content{
          font-size: 15px;
          line-height: 2;
          color: #333;
          padding-top: 23px;
          height: 100%;
          text-align: left;
          .post-tags{
            margin-top: 15px;
            font-size: 14px;
            text-align: right;
          }
        }
      }
      .post-comment{
        border-top: 1px solid #eee;
        .comment-brand{
          text-align: left;
          padding: 15px 15px;
          span{
            font-weight: 400;
            font-size: 25px;
          }
        }
        .comment-area{
          height: 170px;
          border-radius: 3px;
          display: flex;
          flex-direction: column;
          border: 1px solid #eee;
          textarea{
            height: 70%;
            padding: 15px;
            font-size: 18px;
            resize:none;
            width: 100%;
            border: none;
            outline: none;
          }
          .comment-button{
            background-color: #fbfbfb;
            height: 30%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            input{
              width: 27%;
              border:none;
              background-color: transparent;
              outline: none;
              font-size: 15px;
              padding-left: 35px;
            }
            .btn{
              width: 19%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              button{
                height: 80%;
                width: 80%;
                background-color: black;
                border-radius: 20px;
                border: none;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
              }
            }
          }
        }
      }
        .comment-list{
          width: 100%;
          display: flex;
          text-align: left;
          flex-direction: column;

          .comments-details{
            border-radius: 5px;
            margin-top: 30px;
            min-height: 130px;
            border: 1px solid #eee;
            display: flex;
            flex-direction: column;

            p{
              padding: 10px 0 15px 25px;
            }
          }
          .user-logo{
            padding: 15px 0 15px 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
            position: relative;
            img{
              width: 36px;
              height: 36px;
              border-radius: 50%;
            }
            .user-info{
              margin-left: 15px;
              display: flex;
              align-items: flex-start;
              flex-direction: column;
              span{
                font-size: 13px;
                margin-top: 2px;
              }
            }
            .reply{
              position: absolute;
              right: 15px;
              top: 15px;
              color: #ddd;
              cursor: pointer;
              :hover{
                color: black;
              }
            }
          }
        }
    }
  }
}
</style>
