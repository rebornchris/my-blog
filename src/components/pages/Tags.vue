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
          <li>生活</li>
          <li>其他</li>
          <li>游戏</li>
          <li>生活</li>
          <li>其他</li>
          <li>游戏</li>
          <li>生活</li>
          <li>其他</li>
          <li>游戏</li>
          <li>生活</li>
          <li>其他</li>
          <li>游戏</li>
          <li>生活</li>
          <li>其他</li>
        </ul>
      </div>
      <div class="tags-title">
        <span>文章 | 时间线</span>
        <ul>
          <li>
            <icon name="tags"></icon>
            <span class="span-titles">游戏</span>
            <span>关东煮店人情顾问世界</span>
            <span>高德置地弟弟的标签</span>
          </li>
        </ul>
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
export default {
  components: {
    Slider,
    Icon
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
    font: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
                          'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;
    width: 850px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span{
      font-size: 20px;
      font-weight: 200;
      text-align: left;
      color: #0085a1;
    }

    .tags-show{
      width: 100%;
      margin-bottom: 15px;
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
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      li{
        margin-top: 20px;
        color: #0085a1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .span-titles{
          display: flex;
          flex-direction: row;
          align-self: flex-start;
        }

        span{
          //align-self: flex-start;
          margin-left: 15px;
        }
      }
    }
  }

  .slider{
    align-self: flex-end;
  }
}
</style>
