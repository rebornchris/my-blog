<template lang="html">
  <div class="post-list">
    <div class="content-container">
      <h2 class="post-title">
        <a href="#">这个是大标题</a>
      </h2>
      <div class="post-meta">
        时间：2017-05-31 23:00:00
      </div>
      <div class="post-content">
        <p>这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试这就是个测试</p>
      </div>
    </div>
    <Slider></Slider>
  </div>
</template>

<script>
import Slider from '../common/slider.vue'
export default {
  components: {
    Slider
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
      font: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
                            'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;
      padding-right: 50px;
      padding-top: 20px;
      width: 850px;
      border-right: 1px solid #ddd;
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
        overflow: hidden;
        text-align: justify;

      }
    }
  }
</style>
