<template lang="html">
  <div class="container">
    <div class="me-body">
      <div class="title">
        <p>RebornChris，本名<strong>「林肖阳」</strong>，94年双鱼男</p>
        <p>该ID伴随多年,虽然不知道有什么含义...</p>
        <p>目前在寻找<strong>「靠谱」</strong>前端Team中</p>
      </div>
      <div class="detail">
        <h3>个人特点</h3>
        <blockquote>
          <p>喜欢一切美的东西，追求极致</p>
          <p>细节控，像素控，强迫症患者</p>
          <p>喜欢和一群很酷的人做一些很酷的事</p>
        </blockquote>
      </div>
      <div class="detail">
        <h3>个人爱好</h3>
        <blockquote>
          <p>篮球死忠</p>
          <p>日常追生肉美剧</p>
          <p>十年Kobe死粉，现在转粉Warriors</p>
          <p>喜欢Dota，也玩得来王者荣耀，还想入手PS4</p>
        </blockquote>
      </div>
      <div class="detail">
        <h3>一些声明</h3>
        <blockquote>
          <p>本站所有文章均为本人原创，仅代表个人在撰文时刻的观点和想法</p>
        </blockquote>
      </div>
      <div class="detail">
        <h3>联系方式</h3>
        <blockquote>
          <p>Wechat: Picsmk</p>
          <p>Weibo: <a href="http://www.weibo.com/u/2273667002" target="_blank">Reiceice</a></p>
          <p>Email: <a href="mailto:415817317@qq.com?subject=from-my-site">415817317@qq.com</a></p>
          <p>Github: <a href="https://github.com/rebornchris" target="_blank">rebornchris</a></p>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
p{
  line-height: 2.0;
}

h3{
  border-bottom: 1px solid #eee;
  line-height: 2;
}

blockquote{
  margin-top: 25px;
  padding-left: 15px;
  border-left: 4px solid #e54e53;
}

.boder{
  border-left: 1px;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;

  .me-body{
    width: 50%;
    height: 800px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .detail{
      margin-top: 15px;
    }
  }
}
</style>
