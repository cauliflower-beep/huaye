<template>
  <!--teleport允许将一个组件的DOM结构渲染到应用程序的另一个位置-->
  <teleport to="body">
    <div v-if="visible" class="auth-dialog-overlay">
      <div class="auth-dialog">

        <!-- 关闭按钮 -->
        <button type="button" class="close-button" @click="hideDialog">×</button>

        <!--登录、注册tab切换-->
        <div class="tabs">
          <button :class="{ active: currentTab === 'login' }" @click="currentTab = 'login'">登录</button>
          <button :class="{ active: currentTab === 'register' }" @click="currentTab = 'register'">注册</button>
        </div>

        <form @submit.prevent="handleSubmit">

          <div v-if="currentTab === 'login'">
            <!-- 登录表单 -->
            <div class="form-group">
              <label for="login-username">账户</label>
              <input v-model="formData.login.username" placeholder="请输入用户名" required />
            </div>

            <div class="form-group">
              <label for="login-password">密码</label>
              <input type="password" v-model="formData.login.password" placeholder="请输入账户密码" required />
            </div>
          </div>

          <div v-else>
            <!-- 注册表单 -->
            <div class="form-group">
              <label for="register-username">账户</label>
              <input v-model="formData.register.username" placeholder="请输入用户名" required />
            </div>

            <div class="form-group">
              <label for="register-password">密码</label>
              <input type="password" v-model="formData.register.password" placeholder="请输入密码" required />
            </div>

            <div class="form-group">
              <label for="register-confirmPassword">确认密码</label>
              <input type="password" v-model="formData.register.re_password" placeholder="请确认密码" required />
            </div>
          </div>

          <button type="submit">{{ currentTab === 'login' ? '登录' : '注册' }}</button>
        </form>

      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  // 响应式数据
  import { ref, reactive } from 'vue';
  import { defineExpose,defineEmits } from 'vue'

  import apiCli from "@/api/index";

  // 隐藏/显示弹窗
  const visible = ref(false);
  const currentTab = ref('login');
  // 声明自定义事件 update-user-info
  const emitEvent = defineEmits(['update-user-info'])

  const formData = reactive({
    // 登录
    login: {
      username: '',
      password: ''
    },
    // 注册
    register: {
      username: '',
      password: '',
      re_password: ''
    }
  });

  // 登录tab
  const showLogin = () => {
    currentTab.value = 'login';
    visible.value = true;
  };

  // 注册tab
  const showRegister = () => {
    currentTab.value = 'register';
    visible.value = true;
  };

  // 隐藏弹窗
  const hideDialog = () => {
    visible.value = false;
  };

  // 把方法暴露给父组件，以便使用
  defineExpose({
    showLogin,
    showRegister
  })

  // 注册函数
  const handleRegister = async () => {
    try {
      const rsp = await apiCli.post('/v1/user/signup', formData.register);
      if (rsp.data.code === 200){
        console.log('注册成功：',rsp.data);
        // 处理注册成功后的逻辑，比如显示成功消息、跳转页面等
        hideDialog(); // 隐藏弹窗
      }
    } catch (error){
      console.error('注册失败：',error);
      // 处理错误，显示错误信息给用户
    }
  };

  // 登录函数
  const handleLogin = async()=>{
    try {
      const rsp = await apiCli.post('/v1/user/login',formData.login);
      if (rsp.data.code === 200){
        console.log('登录成功：',rsp.data);
        // 处理登录成功后的逻辑，比如保存token、跳转页面等
        localStorage.setItem('AUTH_TOKEN',rsp.data.data.token);
        // 调用获取用户信息的接口
        await getUserInfo(rsp.data.data.token)
        hideDialog();
      }
    }catch (error){
      console.error('登录失败：',error);
      // 处理错误，显示错误信息给用户
    }
  };

  // 获取用户信息
  const getUserInfo = async (token:string)=>{
    try {
      const rsp = await apiCli.get('/v1/user/profile', {
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      if (rsp.data.code === 200){
        console.log('获取用户信息成功：',rsp.data);
        // 触发update-user-info事件 将用户信息发送给父组件
        emitEvent('update-user-info',rsp.data.data);
      }
    }catch (e){
      console.error('获取用户信息失败：',e);
      // 处理错误，显示错误信息给用户
    }
  };

  // 提交表单数据
  const handleSubmit = async () => {
    if (currentTab.value === 'register'){
      await handleRegister();
    }else if (currentTab.value === 'login'){
      // 如果是登录，在这里添加登录逻辑
      await handleLogin()
    }
  };
</script>

<style scoped>
  /* 添加样式 */
  .auth-dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .auth-dialog {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative; /* 确保 .close-button 可以相对于它进行绝对定位 */

    width: 30%; /* 设置宽度为视口的50%，以适应小屏幕 */
    max-width: 400px; /* 设置最大宽度 */
    box-sizing: border-box; /* 确保 padding 不会使元素超出 max-width */
  }

  .form-group {
    display: flex;
    flex-direction: column; /*子元素垂直排列*/
  }

  .auth-dialog label {
    margin-top: 20px;
    margin-bottom: 8px; /* 给标签和输入框之间添加一些空间 */

    margin-left: 10px;
    text-align: left; /* 让标签文本左对齐 */
  }

  /* 给所有 label 添加红色 * */
  .auth-dialog label::after {
    content: ' *';
    color: red;
  }

  input {
    display: block;
    margin: 0 auto 10px;
    padding: 10px;
    width: calc(100% - 20px);
    box-sizing: border-box;
    border: 1px solid #E0E0E6;
    border-radius: 5px;

    transition: border-color 0.5s; /* 添加过渡效果使得颜色变化更平滑 */
  }

  input:hover {
    border: 2px solid #61caef; /* 当鼠标悬停时更改边框颜色 */
  }

  .tabs button {
    margin: 5px 15px;
    padding: 25px 10px;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 17px;

    position: relative; /* 必须设置为相对定位 */
  }

  /* 添加动画下划线*/
  .tabs button::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #61caef;
    transition: width .3s;
    position: absolute;
    bottom: -8px;
    left: 50%;
    top:60px;
    transform: translateX(-50%);
  }

  .tabs button.active::after {
    width: 65%;
    padding-top: 1px;
  }

  .tabs button.active {
    color: #61caef;
  }



  button[type="submit"] {
    margin-top: 20px;
    padding: 10px 20px;

    background-color: #61caef;
    color: white;
    border: none;
    border-radius: 5px;
    width: 80%;

    transition: all 0.2s ease; /* 添加过渡效果 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加轻微阴影 */
  }

  button[type="submit"]:active {
    background-color: #237db6; /* 使用SCSS函数加深背景颜色 */
    transform: translate(2px,2px); /* 模拟按下去的效果 按钮被点击时稍微向右下移动*/
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* 减少阴影以模拟深度 */
  }

  .close-button {
    position: absolute;
    top: 5px;
    right: 15px;
    padding: 5px;
    background: none;
    border: none;
    font-size: 30px;
    cursor: pointer;
    color: #61caef;
  }

  .close-button:hover {
    color: #ff4d4f; /* 鼠标悬停时改变颜色 */
  }
</style>
