<template>
  <!--  左侧导航栏-->
<div class="sideBar">
<!--  首页按钮-->
  <div class="home">
    <button class="homeButton">BI技术团队</button>
  </div>

  <nav>
    <ul class="menu">
      <li><a href="/latest">最新文章</a></li>
      <li><a href="/archive">文章存档</a></li>
    </ul>
  </nav>
</div>
</template>


<script lang="ts" setup>


</script>

<style scoped>

.sideBar {
  width: 160px; /* Fixed width */
  position: fixed; /* Fixed position */
  top: 0; /* Align to top */
  left: 0; /* Align to left */
  height: 100%; /* Full height */
  background-color: #2A2935; /* Background color */
  color: white; /* Text color */
  padding: 10px; /* Add some padding */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5); /* Optional shadow */

  display: flex; /* 使用 flex 布局 */
  flex-direction: column;
  align-items: flex-start; /* 垂直对齐到顶部 */
}

.home{
  margin-left: auto;
}

.homeButton{
  background: transparent;
  border: none;
  color: #61caef;
  font-size: 18px; /* 设置按钮文字大小 */
}

.homeButton:hover {
  color: white; /* 鼠标悬停时文字颜色改变 */
}

.menu{
  list-style-type: none;
  padding: 0;
}

.menu li{
  height: 40px;
}

.menu a {
  text-decoration: none; /* 取消下划线 */
  color: white; /* 字体改为白色 */
}
</style>
