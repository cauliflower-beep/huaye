<template>
  <div class="app">
    <!--  左侧导航栏-->
    <div class="side-bar">
      <sideBar/>
    </div>

    <!--  右侧展示区-->
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import sideBar from "@/components/sideBar.vue";
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
    width: 180px;
    min-width: 180px;
    max-width: 180px;
    height: 100%;
    border: aqua;
  }

  .main-container{
    padding: 20px;
    flex-grow: 1; /* 尽可能的扩展以填满可用空间*/
    //border: 1px solid #61caef;
    height: 100%;
  }
</style>
