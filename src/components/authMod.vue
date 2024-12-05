<template>
  <div class="auth-buttons">
    <button @click="handleRegisterClick">注册</button>
    <button @click="handleLoginClick">登录</button>
  </div>
</template>

<script setup lang="ts">
  const handleRegisterClick = () => {
    // 处理注册按钮点击事件
    console.log("register button is clicked");
  }
  const handleLoginClick = () => {
    console.log("login button is clicked");
  }
</script>

<style scoped>
  .auth-buttons button {
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 25px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  .auth-buttons button {
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 25px;
  }
</style>
