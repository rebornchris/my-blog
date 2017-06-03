<template lang="html">
  <div class="tags-list">
    <div class="something">
      <span>这个是归档</span>
    </div>
    <div class="slider">
      <Slider></Slider>
    </div>
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

<style lang="less" scoped>
.tags-list{
  width: 100%;
  margin: 0 auto;
  padding-left: 250px;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  .something{
    font: 'TIBch', 'Classic Grotesque W01', 'Helvetica Neue', Arial, 'Hiragino Sans GB',
                          'STHeiti', 'Microsoft YaHei', 'WenQuanYi Micro Hei', SimSun, sans-serif;
    padding-right: 50px;
    padding-top: 20px;
    width: 850px;
    background-color: #ddd;
    border-right: 1px solid #ddd;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    span{

    }
  }

  .slider{
    align-self: flex-end;
  }
}
</style>
