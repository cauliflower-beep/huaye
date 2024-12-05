<template>
  <div class="sideBar">
    <!--  首页按钮-->
    <div class="home">
      <button class="homeButton">BI技术团队</button>
    </div>

    <!--导航菜单-->
    <nav class="menu">
      <ul class="list">
        <!-- 循环展示导航列表-->
        <!--:class="{ 'selected': selectedIdx === idx }"
        是vue中一种动态绑定类的方式，可以根据条件来添加或者移除css类
        -->
        <li v-for="(item, idx) in items" :key="idx">
          <router-link
            :to="item.href"
            @click="selectItem(idx)"
            :class="{ 'selected': selectedIdx === idx }"
          >
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </nav>

    <div>
<!--      <auth/>-->
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  // import auth from '@/components/authMod.vue'

  // 响应式数据
  const selectedIdx = ref(-1);
  const items = [
    {href: '/latest', text: '最新文章'},
    {href: '/archive', text: '文章存档'},
  ];

  const selectItem = (idx) => {
    selectedIdx.value = idx
  }

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
    margin-top: 10px;
    margin-left: auto;
    margin-bottom: 5px;
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
    margin-left: auto;
    margin-right: 10%;
  }

  .list{
    list-style-type: none;
    padding: 0;
  }

  .list li{
    height: 40px;
    padding: 8px;
  }

  .list a {
    display: flex;
    align-items: center; /* 链接文字垂直居中 */
    text-decoration: none; /* 取消下划线 */
    color: white; /* 字体改为白色 */
    font-size: 14px;
    height: 55px;

    position: relative; /* 使伪元素相对定位 */
    transition: background-color 0.3s ease, color 0.3s ease; /* 添加过渡效果 */
  }

  .list a.selected{
    background-color: #26252F;
    color: #61caef;
  }

  /* 创建一个隐藏的背景长方形 */
  .menu .list a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -80px; /* 向左移出10px，抵消父级padding */
    right: -40%; /* 向右移出10px，抵消父级padding */
    bottom: 0;
    background-color: #26252F;
    z-index: -1; /* 确保它在文字后面 */
    opacity: 0; /* 默认情况下不可见 */
    //transition: opacity 0.3s ease, transform 0.3s ease;
    transform: scaleX(0); /* 默认不显示 */
    transform-origin: left;
  }

  .list a.selected::before {
    opacity: 1; /* 显示背景长方形 */
    transform: scaleX(1); /* 展开背景长方形 */
  }

  /* 伪元素不是实际存在于DOM中的元素，而是浏览器根据样式规则创建的虚拟元素 */
  .list a.selected::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: -30px; /* 小竖条右侧位置 */
    width: 4px; /* 竖条宽度 */
    background-color: #61caef;
  }

</style>
