<template lang="html">
  <div class="main-body">
    <div class="post-list">
      <div class="content-container">
        <div class="main-content">
          <h2 class="post-title">
            {{article.title}}
          </h2>
          <div class="post-meta">
            {{formatDate(article.createTime)}}
          </div>
          <div class="post-content">
            <div class='markdown-body' v-html='article.content'></div>
          </div>
        </div>
        <div class="post-comment">
          <div class="comment-brand">
            <span>Comments</span>
          </div>
          <div class="comment-area">
            <textarea name="name" rows="8" cols="80"></textarea>
            <div class="comment-button">
              <input type="text" name="" placeholder="昵称">
              <input type="text" name="" placeholder="邮箱">
              <input type="text" name="" placeholder="网站">
              <div class="btn">
                <button type="button" name="button">提交评论</button>
              </div>
            </div>
          </div>
          <div class="comment-list">
            <div class="user-logo">
              <img src="../../assets/uface.jpg" alt="">
              <div class="user-info">
                <span>用户昵称</span>
                <span>2017-02-02 02:00:51</span>
              </div>
            </div>
            <p>
              这是我的家这是我的家这是我的家这是我的家这是我的家这是我的家这是我的家
              这是我的家这是我的家这是我的家这是我的家这是我的家这是我的家这是我的家
              这是我的家这是我的家这是我的家这是我的家这是我的家这是我的家这是我的家
            </p>
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
      article: {},
      content: ''
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
        margin-bottom: 50px;
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
          margin: 5px 0 0;
          color: #999;
          text-align: left;
          display: block;
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
        }
      }
      .post-comment{
        border-top: 1px solid #eee;
        height: 500px;
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
          border-radius: 5px;
          margin-top: 30px;
          min-height: 130px;
          border: 1px solid #eee;
          width: 100%;
          display: flex;
          text-align: left;
          flex-direction: column;
          .user-logo{
            padding: 15px 0 15px 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
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
          }
          p{
            padding-left: 25px;
            padding-bottom: 15px;
          }
        }
    }
  }
}
</style>
