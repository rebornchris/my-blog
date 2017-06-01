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
    <div class="slide-bar">
      <div class="search">
        <input type="text" name="" value="Search">
      </div>
      <div class="recent">
        <div class="recent-title">
          Recent
        </div>
        <ul>
          <li>第一篇</li>
          <li>第二篇</li>
          <li>第三篇</li>
          <li>第四篇</li>
          <li>第五篇</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
  .post-list{
    width: 1200px;
    margin: 0 auto;
    padding-left: 20px;
    padding-top: 80px;
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

    .slide-bar{
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 300px;
      .search{
        padding-left: 35px;

        input{
          padding: 8px 12px 8px 12px;
          outline: none;
          box-sizing: border-box;
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
        padding-left: 35px;
        color: #6E7173;
        font-family: sans-serif;
        .recent-title{
          padding: 20px 15px;
          border-bottom: 1px solid #ddd;
          font-size: 24px;
          text-align: left;
        }

        ul{
          list-style-type: none;
          margin-top: 10px;
          padding: 15px;
          li{
            text-align: left;
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
