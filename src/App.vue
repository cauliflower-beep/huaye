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
  }

  .side-bar{
    width: 17%;
    height: 100%;
    border: aqua;
  }
</style>
