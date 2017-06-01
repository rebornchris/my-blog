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
        <li>第一篇第一篇第一篇第一篇第一篇第一篇第一篇第一篇第一篇第一篇第一篇第一篇第一篇</li>
        <li>第二篇</li>
        <li>第三篇</li>
        <li>第四篇</li>
        <li>第五篇</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input2: ''
    }
  },
  methods: {
    handleIconClick () {
      console.log(this.input2)
    }
  }
}
</script>

<style lang="less" scoped>
.slide-bar{
  display: flex;
  flex-direction: column;
  width: 300px;
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
        overflow: auto;
        text-overflow: ellipsis;
        text-align: left;
        margin-top: 10px;
      }
    }
  }
}
</style>
