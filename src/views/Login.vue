<template>
  <div class="main">
    <div class="container">

      <h2 class="form-title">登录</h2>

      <div class="form-group">
        <input type="text" class="form-control" v-model="username" name="name" id="name" placeholder="用户名" />
        <hr>
        <input type="password" class="form-control" v-model="password"  name="pass" id="pass" placeholder="密码" />
      </div>

      <div class="form-btn">
        <button type="button" class="btn btn-info" @click="submit">提交</button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        submitted: false
      };
    },
    computed: {},

    created() {},

    methods: {
      submit() {
        this.$axios({
          method: 'post',
          url:'/login',
          data: JSON.stringify({
            username: this.username,
            password: this.password
          })
        }).then((res)=>{
          console.log(res.data)
          if (res.code === 200) {
            localStorage.setItem("loginResult", JSON.stringify(res.data));
            this.$store.commit("login", res.data);
            this.$router.push({path: this.redirect || '/' })
          } else {
            console.log(res.msg)
          }
        }).catch((error)=>{
          console.log(error)
        })
      }
    }
  };
</script>

<style lang="less" scoped>
.main {
  background: #f3f6fd;
  padding: 200px 0;
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    width: 20%;
    z-index: 5;
    -webkit-transition: all .3s ease;
    //border: 1px solid #ccc;
    border-radius: 20px;
    height: 500px;
    //background: #61caef;
    background-image: url("../assets/images/signUpBg.jpg");
    background-position: center;
    background-size: cover;
    margin: 0 auto;
    max-width: 1200px;
    padding: 50px;

    .form-title {
      color: #fff;
      margin-bottom: 70px;
      text-align: center;
    }

    //分割线
    hr {
      border-top: 1px solid #ccc; /* 调整横线的样式 */
      margin: 10px 0; /* 调整横线的上下间距 */
    }

    .form-group {
      border-radius: 20px;
      background-color: #fff;
      overflow: hidden;
      opacity: 1;
      visibility: visible;
      -webkit-transition: all .3s ease;
      margin: 50px;
      .form-control {
        border: none;
        display: block;
        width: 100%;
        height: 40px;
        padding: 10px 30px;
        font-size: 12px;
        line-height: 1.42857143;
      }
    }

    .form-btn {
      display: flex;
      justify-content: center;
      .btn {
        position: relative; /* 使按钮成为定位容器 */
        background-color: rgba(255, 255, 255, 0.3); /* 设置按钮背景为半透明黑色 */

        padding: 8px 30%;
        font-size: 15px;
        color: #ffffff;
        line-height: 1.3333333;
        border-radius: 12px;
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
      }
      //.btn-info {
      //  color: #fff;
      //  background-color: #5bc0de;
      //  border-color: #46b8da;
      //}
    }
  }
}
</style>