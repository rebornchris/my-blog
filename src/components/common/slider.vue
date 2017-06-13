<template lang="html">
  <div class="slide-bar">
    <div class="search">
      <el-input
        placeholder="Search"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
    <div class="recent">
      <div class="recent-title">
        Recent
      </div>
      <ul>
        <li v-for='item in sliderTitle' :key='item._id'>
          <router-link :to="{ name: 'Article', params: { id: item._id }}">
            <p>{{item.title}}</p>
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
      input2: '',
      sliderTitle: []
    }
  },
  created () {
    this.getAllTitle()
  },
  methods: {
    handleIconClick () {
      console.log(this.input2)
      console.log(this.sliderTitle)
    },
    getAllTitle () {
      axios.get('http://localhost:3000/getArticles').then(response => {
        this.sliderTitle = response.data
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

  .search{
    padding-left: 35px;

    input{
      padding: 8px 12px 8px 12px;
      outline: none;
      line-height: 1.5;
      color: #666;
      height: 40px;
      width: 230px;

    }
  }

  .recent{
    width: 300px;
    margin-top: 30px;
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
