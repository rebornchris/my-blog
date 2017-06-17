<template lang="html">
  <div class="tags-body">
    <div class="tags-container">
      <div class="tags-view">
        <div class="tags-show">
          <span>标签</span>
          <ul>
            <li v-for='tag in tags'>{{ tag }}</li>
          </ul>
        </div>
        <div class="tags-title">
          <span @click='change'>
            <span @click.stop.prevent='flag=false' :class="{ cur: !flag }">归档</span>
            <span>|</span>
            <span @click.stop.prevent='flag=true' :class="{ cur: flag }">时间线</span>
          </span>
          <transition-group name="list" mode='out-in'>
            <div class="tags-articles" v-if='!flag' v-for='article in ArticlsByTags' :key='article'>
              <div class="tags-icons">
                <span>
                  <icon name='tags'></icon>
                  <span>{{ article[0].tags }}</span>
                </span>
              </div>
              <span class="articles-title" v-for='title in article'>
                <router-link :to="{ name: 'Article', params: { id: title._id }}">
                  {{ title.title }}
                </router-link>
              </span>
            </div>
          </transition-group>
          <transition-group name="list" mode='out-in'>
            <div class="tags-articles" v-if='flag' v-for='temps in timeline' :key='temps'>
              <div class="tags-icons">
                <span>
                  <icon name='calendar-times-o'></icon>
                  <span>{{ temps[0].year }}年{{ temps[0].month }}月</span>
                </span>
              </div>
              <span class="articles-title" v-for='temp in temps' :key="temp._id">
                <router-link :to="{ name: 'Article', params: { id: temp._id }}">
                  {{ temp.title }}
                </router-link>
              </span>
            </div>
          </transition-group>
        </div>
      </div>
      <div class="slider">
        <Slider></Slider>
      </div>
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
      tags: [],
      timeline: [],
      selected: '',
      newsd: [],
      ArticlsByTags: []
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
        let items = []
        let flag = {}
        let oldTags = []
        for (let i = 0; i < this.articlesList.length; i++) {
          oldTags.push(this.articlesList[i].tags)
          let tempDate = new Date(this.articlesList[i].createTime)
          let year = tempDate.getFullYear()
          let month = tempDate.getMonth() + 1

          if (flag[year + '' + month] === undefined) {
            flag[year + '' + month] = items.length
            items[flag[year + '' + month]] = []
          }
          this.articlesList[i].year = year
          this.articlesList[i].month = month
          items[flag[year + '' + month]].push(this.articlesList[i])
        }
        this.tags = Array.from(new Set(oldTags))
        this.timeline = items
        this.getTagsArticles(this.tags)
      })
    },
    selectTags (tag) {
      this.selected = tag
      this.flag = false
    },
    getTagsArticles (arr) {
      arr.map(tag => {
        axios.get('http://localhost:3000/getArticlesByTag', {
          params: {
            tag: tag
          }
        }).then(response => {
          this.ArticlsByTags.push(response.data)
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.list-enter-active, .list-leave-active {
  transition: all .7s ease;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateX(30px);
}
.tags-body{
  display: flex;
  justify-content: center;

  .tags-container{
    width: 67%;
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
      margin-right: 200px;
      span{
        cursor: pointer;
        font-size: 20px;
        font-weight: 300;
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
          width: 651px;
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
}
</style>
