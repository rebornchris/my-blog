<template lang="html">
  <div class="post-list">
    <div class="content-container">
      <div class="main-content" v-for="titleItem in titleList" :key="titleItem._id">
        <h2 class="post-title">
          <a href="#">{{titleItem.title}}</a>
        </h2>
        <div class="post-meta">
          时间：{{formatDate(titleItem.createTime)}}
        </div>
        <div class="post-content">
          <p v-html='compiledMarkdown(titleItem.content)'></p>
        </div>
      </div>
    </div>
    <div class="">
      <Slider></Slider>
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
    this.getAllTitle()
  },
  data () {
    return {
      titleList: [],
      content: ''
    }
  },
  methods: {
    getAllTitle () {
      axios.get('http://localhost:3000/getArticles').then(response => {
        // if (response.data.length > 3) {
        //   response.data.splice(0, response.data.length - 3)
        // }
        this.titleList = response.data
      })
    },
    compiledMarkdown (contentd) {
      this.content = contentd
      return Marked(this.content, { sanitize: true })
    },
    formatDate (time) {
      return Tools.frontFormatDate(time)
    }
  }
}
</script>

<style lang="less">
  .post-list{
    width: 100%;
    margin: 0 auto;
    padding-left: 250px;
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
        padding: 20px 50px 15px 0;

        &:nth-child(1){
          border-right: 1px solid #ddd;
        }
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
          height: 500px;
          text-overflow: ellipsis;
          color: #333;
          padding-top: 23px;
          overflow: hidden;
          text-align: justify;
      }
    }
  }
}
</style>
