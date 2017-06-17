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
          <div v-html='article.content'></div>
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
import Marked from 'marked'
import Slider from '../common/slider.vue'
import Tools from '../../config/tools'

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
        res.data.content = Marked(res.data.content)
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

<style lang="less">
.main-body{
  display: flex;
  justify-content: center;
  .post-list{
    padding-top: 50px;
    display: flex;
    justify-content: flex-start;

    .content-container{
      display: flex;
      flex-direction: column;
      font: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
      'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;
      width: 850px;

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
          text-align: justify;
        }
      }
    }
  }
}
</style>
