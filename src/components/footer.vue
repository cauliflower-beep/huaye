<template>

  <div class="footer">
    <!--虚线-->
    <div class="footer-line"></div>

    <p class="footer-slogan">只做闭环，不赌热点</p>

    <div class="footer-buttons">
      <!--三个按钮-->
      <button class="footer-home-button" @click="toHome">网站首页</button>
      <button class="footer-archive-button" @click="toArchive">文章存档</button>
      <button class="footer-about-button" @click="toAbout">关于我们</button>
    </div>

  </div>
</template>

<script setup lang="ts">
const toHome = () => {
  console.log('点击了“网站首页”按钮');
};

const toArchive = () => {
  console.log('点击了“文章存档”按钮');
};

const toAbout = () => {
  console.log('点击了“关于我们”按钮');
};
</script>

<style scoped>

  .footer{
    margin-top: 60px;
  }

  .footer-line {
    //height: 1px;
    border-bottom: 1px dashed #CACACA; /* 设置点虚线的颜色和大小 */
    margin-top: 10px;
  }

  .footer-slogan{
    color: #AFAFAF;
    font-size: 13px;
  }

  /* 按钮区域 */
  .footer-buttons{
    margin-left: 70%;
    display: flex;
    justify-content: flex-end;
    gap: 10px; /* 按钮之间的间距*/
  }

  .footer-home-button, .footer-archive-button, .footer-about-button{
    width:80px;
    height: 30px;
    //margin-top: 5px; /* 与文章列表保持一定的距离 */
    //padding: 10px;
    background: none;
    color: #61caef; /* 文本颜色 */
    border: none; /* 边框 */
    border-radius: 5px; /* 圆角 */
    cursor: pointer; /* 改变鼠标指针为手型 */
    font-size: 13px;
    //text-align: center;
  }

  .footer-home-button:hover, .footer-archive-button:hover, .footer-about-button:hover {
    background-color: #EEEEEE; /* 鼠标悬停时改变背景颜色 */
    color: #006699;
  //border-color: #999; /* 鼠标悬停时改变边框颜色 */
  }
</style>
