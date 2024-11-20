<template>
  <header class="header">

    <div class="app-header-left">
      <!--    logo-->
      <span class="logo" @click="goIndex"></span>

      <!--    搜索框-->
      <div class="search-wrapper">
        <input class="search-input" type="text" placeholder="Search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-search" viewBox="0 0 24 24">
          <defs></defs>
          <circle cx="11" cy="11" r="8"></circle>
          <path d="M21 21l-4.35-4.35"></path>
        </svg>
      </div>
    </div>

    <div class="app-header-right">
      <!--      主题切换-->
<!--      <button class="mode-switch" title="Switch Theme">-->
<!--        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">-->
<!--          <defs></defs>-->
<!--          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>-->
<!--        </svg>-->
<!--      </button>-->
    </div>


    <!--    按钮-->
    <div class="btns">
      <!--      登录、注册-->
      <div v-show="!isLogin">
        <a class="login-btn" @click="goLogin">登录</a>
        <a class="login-btn" @click="goSignUp">注册</a>
      </div>
      <!--      登出-->
      <div class="user-box" v-show="isLogin">
        <span class="user">{{ currUsername }}</span>
        <div class="dropdown-content">
          <a @click="goLogout">登出</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeadBar",
  created(){
    this.$store.commit("init");
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    currUsername(){
      console.log(this.$store.getters.username);
      return this.$store.getters.username;
    }
  },
  methods: {
    goIndex(){
      this.$router.push({ name: "Home" });
    },
    goLogin() {
      this.$router.push({ name: "Login" });
    },
    // 跳转注册页面
    goSignUp() {
      this.$router.push({ name: "SignUp" });
    },
    goLogout(){
      this.$store.commit("logout");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  margin-top: 20px;
  width: 100%;
  height: 48px;
  position: fixed;
  background: #f3f6fd;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  top: 0;
  z-index: 1;

  --search-area-bg: #ffffff;

  .app-header-left, .app-header-right {
    display: flex;
    align-items: center;
  }

  .app-header-left {
    flex-grow: 1;
  }

  .app-header-right button {
    margin-left: 10px;
  }

  .mode-switch {
    background-color: transparent;
    border: none;
    padding: 0;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mode-switch.active .moon {
    fill: var(--main-color);
  }

  .logo {
    margin-left: 10px;
    height: 32px;
    background: url("../assets/images/logo.png") no-repeat;
    background-size: 32px 32px;
    background-position: left center;
    padding-left: 35px;
    line-height: 32px;
    flex-grow: 0;
    margin-right: 16px;
    cursor: pointer;
  }

  .app-name {
    color: var(--main-color);
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
  }

  .search-wrapper {
    border-radius: 20px;
    background-color: var(--search-area-bg);
    padding-right: 12px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 480px;
    color: var(--light-font);
    box-shadow: 0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1);
    overflow: hidden;

    .dark & { box-shadow: none; }
  }

  .search-input {
    border: none;
    flex: 1;
    outline: none;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    background-color: var(--search-area-bg);
    color: var(--main-color);

    &::placeholder {
      color: var(--main-color);
      opacity: .6;
    }
  }

  .btns {
    flex-grow: 0;
    margin-left: auto;
    margin-right: 10px;
    display: flex;
    display: -webkit-flex;
    align-items: center;

    //登录按钮
    .login-btn {
      background-color: #ffffff;
      flex-shrink: 0;
      font-weight: 700;

      border: 1px solid transparent;
      border-radius: 13px;
      overflow: hidden;
      box-sizing: border-box;
      text-align: right;
      letter-spacing: 1px;
      text-decoration: none;
      font-size: 12px;
      line-height: 24px;
      text-transform: uppercase;
      padding: 3px 16px;
      border-color: #0079d3;
      color: #0079d3;
      fill: #0079d3;
      display: inline-block;
      cursor: pointer;
      &:nth-child(1) {
        margin-right: 5px;
      }
      &:nth-child(2) {
        margin-right: 10px;
      }
    }

    //个人头像
    .user {
      width: auto;
      height: 24px;
      background: url("../assets/images/avatar_user.png") no-repeat;
      background-size: 24px 24px;
      background-position: left center;
      padding-left: 28px;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      cursor: pointer;
      padding: 12px 12px 12px 28px;
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-top: 5px solid #878a8c;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 5px solid transparent;
        margin-top: 5px;
        margin-left: 10px;
      }
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }
      a:hover {background-color: #f1f1f1}
    }
    .user-box:hover .dropdown-content {
      display: block;
    }
  }
  
}
</style>
