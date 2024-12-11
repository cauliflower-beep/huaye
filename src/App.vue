<template>
  <div class="app">
    <!--  左侧导航栏-->
    <div class="side-bar">
      <sideBar/>
    </div>

    <!--  右侧展示区-->
    <div class="main-container">
      <!--导航栏-->
      <div class="nav-bar">
        <nav-bar/>
      </div>

      <!--内容区-->
      <div class="main-content">
        <!--vue模板语法灵活 允许使用自闭合标签的形式表示组件-->
        <router-view/>
      </div>
    </div>

    <!--悬浮发布按钮-->
    <FloatingActionButton/>
  </div>
</template>

<script lang="ts" setup>
import sideBar from "@/components/sideBar.vue";
import navBar from "@/components/navBar.vue";
import FloatingActionButton from "@/components/floatingActionButton.vue";
import {RouterView} from "vue-router";

</script>

<style scoped>
  .app{
    display: flex;
    height: 100%;
    margin: 0;
  }

  .side-bar{
    /* 固定左侧导航栏的宽度*/
    width: 200px;
    min-width: 180px;
    max-width: 180px;
    height: 100%;
  }

  .main-container{
    flex-grow: 1;
  }

  .nav-bar {
    /* 这里添加 navBar 的样式，使其水平排列在顶部 */
    //height: 30px; /* 调整导航栏高度 */
  }

  .main-content{
    padding-left: 70px;
    padding-top: 30px;
  }
</style>
