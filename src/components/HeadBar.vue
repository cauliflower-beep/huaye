<template>
  <header class="header">
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
  width: 100%;
  height: 48px;
  position: fixed;
  background: #ffffff;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  top: 0;
  z-index: 1;
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
    .login-btn {
      border: 1px solid transparent;
      border-radius: 4px;
      box-sizing: border-box;
      text-align: right;
      letter-spacing: 1px;
      text-decoration: none;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
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
