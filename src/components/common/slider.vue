<template lang="html">
  <div class="slide-bar">
    <div class="icons">
      <a href="https://github.com/rebornchris" target="_blank"><img width='35' height='35' src="../../assets/github.svg" alt=""></a>
      <a href="http://weibo.com/u/2273667002?refer_flag=1001030201_&is_all=1" target="_blank"><img width='35' height='35' src="../../assets/weibo.svg" alt=""></a>
      <a href="https://twitter.com/pure4chris" target="_blank"><img width='35' height='35' src="../../assets/twitter.svg" alt=""></a>
      <a href="mailto:415817317@qq.com" target="_blank"><img width='35' height='35' src="../../assets/gmail.svg" alt=""></a>
    </div>
    <div class="recent">
      <div class="recent-title">
        Recent
      </div>
      <ul>
        <li v-for='item in sliderTitle' :key='item._id'>
          <router-link :to="{ name: 'Article', params: { id: item._id }}">
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
      sliderTitle: []
    }
  },
  created () {
    this.getAllTitle()
  },
  methods: {
    getAllTitle () {
      axios.get('http://localhost:3000/getArticles').then(response => {
        this.sliderTitle = response.data.splice(0, 5)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.slide-bar{
  display: flex;
  flex-direction: column;
  width: 300px;
  border-left: 1px solid #ddd;

  .icons{
    margin-top: 5px;
    display: inline-flex;
    width: 100%;
    justify-content: space-around;
  }

  .recent{
    width: 300px;
    margin-top: 15px;
    height: 400px;
    padding-left: 20px;
    color: #6E7173;
    font-family: sans-serif;
    .recent-title{
      padding: 20px 15px;
      border-bottom: 1px solid #ddd;
      font-size: 18px;
      text-align: left;
    }

    ul{
      list-style-type: none;
      margin-top: 10px;
      padding: 15px;
      li{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        margin-top: 10px;
      }
    }
  }
}
</style>
