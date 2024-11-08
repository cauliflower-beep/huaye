<template>
  <div class="main">
    <div class="container">
      <h2 class="form-title">注册</h2>

      <div class="form-group">
<!--        普通文本框-->
        <input type="text" class="form-control" name="name" id="name" placeholder="用户名" v-model="username"/>
        <hr>
        <input type="password" class="form-control" name="pass" id="pass" placeholder="密码" v-model="password"/>
        <hr>
        <input type="password" class="form-control" name="re_pass" id="re_pass" placeholder="确认密码"  v-model="confirm_password"/>
      </div>

      <div class="form-btn">
        <button type="button"
                :class="['btn', isFormValid ? 'btn-info' : 'btn-dark']"
                @click="submit"
                :disabled="!isFormValid">
          提交
        </button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "SignUp",
    data() {
      return {
        username: "",
        password: "",
        confirm_password: "",
        submitted: false
      };
    },
    computed: {
      isFormValid() {
        return this.username && this.password && this.confirm_password && this.password === this.confirm_password;
      }
    },
    created() {},

    methods: {
      submit() {
        this.$axios({
          method: 'post',
          url:'/signup',
          data: JSON.stringify({
            username: this.username,
            password: this.password,
            confirm_password: this.confirm_password
          })
        }).then((res)=>{
          console.log(res.data);
          if (res.code === 200) {
            console.log('signup success');
            this.$router.push({ name: "Login" });
          }else{
            console.log(res.msg);
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

    //卡片标题
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

    //输入框
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
    }
  }
}
</style>