<template>

  <div class="nav-bar">
    <!--auth-->
    <div class="auth-wrapper">
      <auth/>
    </div>
  </div>
</template>

<script setup lang="ts">
import auth from "@/components/authMod.vue";
</script>

<style scoped>
  .nav-bar {
    /* 导航条的样式*/
    width: 100%;
    height: 20px;
  }

  .auth-wrapper{
    float: right;
    margin-right: 30px;
  }
</style>
