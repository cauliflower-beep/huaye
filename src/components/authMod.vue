<template>
  <div class="auth-buttons">
    <button class="auth-button" @click="showLogin">登录</button>
    <button class="auth-button" @click="showRegister">注册</button>
    <!--弹窗-->
    <auth-dialog ref="authDialog"/>
  </div>
</template>

<script setup lang="ts">
  import AuthDialog from "@/components/authDialog.vue";
  import {ref} from 'vue';

  const authDialog = ref<InstanceType<typeof AuthDialog> | null>(null);

  const showRegister = () => {
    if (authDialog.value) {
      authDialog.value.showRegister();
    }
  }
  const showLogin = () => {
    if (authDialog.value) {
      authDialog.value.showLogin();
    }
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

    transition: all 0.2s ease; /* 添加过渡效果 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加轻微阴影 */
  }

  .auth-button:active {
    background-color: #237db6; /* 使用SCSS函数加深背景颜色 */
    transform: translate(2px,2px); /* 模拟按下去的效果 按钮被点击时稍微向右下移动*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* 减少阴影以模拟深度 */
  }
</style>
