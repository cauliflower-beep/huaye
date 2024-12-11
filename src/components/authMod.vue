<template>
  <div class="auth-buttons">
    <!--不存在用户信息，则展示登录、注册按钮-->
    <div v-if="!userInfo">
      <button class="auth-button" @click="showLogin">登录</button>
      <button class="auth-button" @click="showRegister">注册</button>
    </div>

    <!--存在用户信息，则展示用户头像-->
    <!--使用@mouseenter和@mouseleave来控制显示和隐藏卡片-->
    <div v-else class="user-info-container" >
      <img :src="userInfo.avatar" alt="User Avatar" class="user-avatar"
           @mouseenter="showCard = true" @mouseleave="showCard = false"
      />

      <!--淡入淡出的过渡效果-->
      <transition name="fade">
        <div v-if="showCard" class="user-card">
          <span class="user-name">@{{ userInfo.user_name }}</span>
          <button class="card-button" @click="navigate2Profile">个人中心</button>
          <button class="card-button" @click="logout">退出</button>
        </div>
      </transition>
    </div>
    <!--弹窗-->
    <auth-dialog ref="authDialog" @update-user-info="setUserInfo" />
  </div>
</template>

<script setup lang="ts">
  import AuthDialog from "@/components/authDialog.vue";
  import {ref} from 'vue';

  const authDialog = ref<InstanceType<typeof AuthDialog> | null>(null);

  // 用户信息
  const userInfo = ref(null);

  // 展示用户中心卡片
  const showCard = ref(false);

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

  interface UserInfo {
    user_id:number;
    user_name: string;
    gender: number;
    avatar: string;
  }

  // 更新userInfo
  const setUserInfo = (info: UserInfo) =>{
    userInfo.value = info;
  }

  const navigate2Profile = () => {
    // 处理导航到个人中心的逻辑
    console.log('Navigate to Profile');
  }

  const logout = ()=>{
    // 清楚token和其他用户信息
    localStorage.removeItem('AUTH_TOKEN');
    userInfo.value = null;
  }
</script>

<style scoped>
  .auth-buttons {
    display: flex;
    gap:10px;

    position: relative;
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

    margin-right: 10px;
  }

  .auth-button:active {
    background-color: #237db6; /* 使用SCSS函数加深背景颜色 */
    transform: translate(2px,2px); /* 模拟按下去的效果 按钮被点击时稍微向右下移动*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* 减少阴影以模拟深度 */
  }

  .user-avatar{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;

    cursor: pointer;
    margin-right: 40px;

    transition: transform 0.2s ease; /* 添加放大效果 */
  }

  .user-avatar:hover {
    transform: scale(1.2); /* 放大效果 */
  }

  /*个人中心卡片*/
  .user-info-container {
    position: relative;
    display: inline-block;
  }

  .user-card {
    position: absolute;
    /*调整卡片位置*/
    top: 20px;
    left: -60px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    padding: 10px;
    width: 150px;
    text-align: center;

    overflow: hidden;
  }

  .user-name {
    display: block;
    margin-top: 5px;
    font-size: 10px;
  }

  .card-button {
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    text-align: center;
    background-color: #61caef;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .card-button:hover {
    background-color: #237db6;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>
