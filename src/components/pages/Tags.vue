<template lang="html">
  <div class="tags-container">
    <div class="tags-view">
      <div class="tags-show">
        <span>标签</span>
        <ul>
          <li>游戏</li>
          <li>生活</li>
          <li>其他</li>
          <li>游戏</li>
          <li>生活</li>
          <li>其他</li>
          <li>游戏</li>
        </ul>
      </div>
      <div class="tags-title">
        <span @click='change'>
          <span @click='flag=false' :class="{ cur: flag }">归档</span>
          <span>|</span>
          <span @click='flag=true' :class="{ cur: !flag }">时间线</span>
        </span>
        <div class="tags-articles" v-if='flag'>
          <div class="tags-icons">
            <span>
              <icon name='tags'></icon>
              <span>游戏</span>
            </span>
          </div>
          <span class="articles-title">关东煮店人情顾问世界</span>
          <span class="articles-title">高德置地弟弟的标签</span>
        </div>
        <div class="tags-articles" v-if='!flag'>
          <div class="tags-icons">
            <span>
              <icon name='calendar-times-o'></icon>
              <span>2017年6月</span>
            </span>
          </div>
          <span class="articles-title">关东煮店人情顾问世界231</span>
          <span class="articles-title">高德置地弟弟的标签312</span>
        </div>
        <div class="tags-articles" v-if='!flag'>
          <div class="tags-icons">
            <span>
              <icon name='calendar-times-o'></icon>
              <span>2017年6月</span>
            </span>
          </div>
          <span class="articles-title">关东煮店人情顾问世界231</span>
          <span class="articles-title">高德置地弟弟的标签312</span>
        </div>
        <div class="tags-articles" v-if='!flag'>
          <div class="tags-icons">
            <span>
              <icon name='calendar-times-o'></icon>
              <span>2017年6月</span>
            </span>
          </div>
          <span class="articles-title">关东煮店人情顾问世界231</span>
          <span class="articles-title">高德置地弟弟的标签312</span>
        </div>
      </div>
    </div>
    <div class="slider">
      <Slider></Slider>
    </div>
  </div>
</template>

<script>
import Slider from '../common/slider.vue'
import Icon from 'vue-awesome/components/Icon'
import axios from 'axios'
export default {
  data () {
    return {
      flag: true,
      articlesList: [],
      tags: []
    }
  },
  components: {
    Slider,
    Icon
  },
  created () {
    this.getAllTitle()
  },
  methods: {
    change () {
      this.flag = !this.flag
    },
    getAllTitle () {
      axios.get('http://localhost:3000/getArticles').then(response => {
        this.articlesList = response.data
        for (let i = 0; i < this.articlesList.length; i++) {
          this.tags.push(this.articlesList[i].tags[0])
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.tags-container{
  width: 100%;
  padding-left: 250px;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .tags-view{
    font-family: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
                          'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;
    width: 850px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span{
      cursor: pointer;
      font-size: 20px;
      font-weight: 200;
      text-align: left;
      color: #0085a1;

      .cur{
        color: black;
      }
    }

    .tags-show{
      width: 100%;
      display: flex;
      flex-direction: column;

      ul{
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin-top: 15px;
        flex-wrap: wrap;
        li{
          margin-right: 15px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          padding: 0 10px;
          border-radius: 45%;
          line-height: 28px;
          font-size: 14px;
          font-weight: 200;
          color: #fff;
          background-color: #d3d3d3;
          cursor: pointer;

          &:hover{
            background-color: #0085a1;
          }
        }
      }
    }

    .tags-title{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 35px;
      .tags-articles{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px;
        .tags-icons{
          display: inline-block;
          padding: 5px;
          span{
            margin-left: 15px;
          }
        }

        .articles-title{
          width: 80%;
          padding: 10px 15px;
          border-bottom: 1px solid #eee;
          color: black;
          font-size: 18px;
          line-height: 1.3;
        }

        .timeline-articles{
          font-family: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
                                'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;
          width: 80%;
          padding: 10px 15px;
          font-size: 18px;
          line-height: 1.3;
          color: black;
          display: flex;
          flex-direction: column;

          .timeline-time{
            text-align: left;
            font-size: 27px;
          }

          .timeline-title{
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            padding: 10px 5px;
          }
        }
      }
    }
  }

  .slider{
    align-self: flex-start;
  }
}
</style>
