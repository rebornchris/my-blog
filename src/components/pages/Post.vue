<template>
  <div class="main-container">
    <div class="post-list">
      <div class="content-container">
        <div class="main-content" v-for="titleItem in titleList" :key='titleItem._id'>
          <h2 class="post-title">
            <router-link :to="{ name: 'Article', params: { id: titleItem._id }}">
              <span class="read-btn">{{titleItem.title}}</span>
            </router-link>
          </h2>
          <div class="post-meta">
            {{formatDate(titleItem.createTime)}}
          </div>
          <div class="post-content">
            <div class='markdown-body' v-html='titleItem.content'></div>
          </div>
          <div class="meta-info">
            <router-link :to="{ name: 'Article', params: { id: titleItem._id }}">
              <p class="read-more">Read More...</p>
            </router-link>
            <router-link :to="{ name: 'Tags' }">
              <p class="tags-meta">#{{titleItem.tags}}</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="slider">
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
        this.titleList = response.data
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
 .main-container{
   width: 100%;
   display: flex;
   justify-content: center;
    .post-list{
      width: 67%;
      padding-top: 50px;
      display: flex;
      justify-content: flex-start;
      .content-container{
        width: 75%;
        display: flex;
        flex-direction: column;
        font: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
                              'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;

        .main-content{
          margin-bottom: 50px;
          padding: 0px 50px 15px 0;
          border-bottom: 1px solid #ddd;
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
            margin: 10px 0 0;
            color: #999;
            text-align: left;
            display: block;
            font-size: 14px;
            /* text-indent:0.15em; */
          }
          .post-content{
            font-size: 15px;
            line-height: 2;
            height: 550px;
            text-overflow: ellipsis;
            color: #333;
            padding-top: 23px;
            overflow: hidden;
            text-align: justify;
        }

        .meta-info{
          display: flex;
          flex-direction: row;
          margin-top: 35px;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>
