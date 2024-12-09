<template>
  <div class="auth-buttons">
    <button class="auth-button" @click="handleRegisterClick">注册</button>
    <button class="auth-button" @click="handleLoginClick">登录</button>
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
  .auth-buttons {
    display: flex;
    gap:10px;
  }

  .auth-button {
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 20px;

    background-color: #61caef;
    color: white;
    border: none;
  }
</style>
