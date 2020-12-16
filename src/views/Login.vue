<template>
  <div id="login">
    <div class="top"></div>
    <div class="title">
      <p class="title1">图书馆后台管理系统登录</p>
      <p class="title2">TU SHU GUAN HOU TAI DENG LU</p>
    </div>
    <div class="login">
      <div class="left">
        <img class='bg2' src="../assets/img/login/bg2.png" alt="">
      </div>
      <div class="right">
        <div id="go">
          <div class="user">
            <img src="../assets/img/login/user.png" alt="" class="user-img">
            <input type="text" id="user" name="user" ref="user" placeholder="用户名">
          </div>
          <div class="password">
            <img src="../assets/img/login/password.png" alt="" class="password-img">
            <input type="password" id="password" name="password" ref="password" placeholder="密码">
          </div>
          <el-button class="goto" @click="login()" :loading="waite">登录</el-button>
        </div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
  import {login} from "../network/Login";

  export default {
    name: "login",
    data() {
      return {
        waite: false
      }
    },
    methods: {
      login(){
        this.waite = true
        let name = this.$refs.user.value
        let password = this.$refs.password.value
        login(name,password).then(res => {
          this.waite=false
          if (res!=null){
            if(res.err_code == 0){
              this.$message.success('登录成功')
              this.$store.commit('Token', {
                identity: res.identity,
                userID: res.userID,
                token: res.token
              })
              this.$router.replace({path:'/home'})
            }
            if(res.err_code == 1){
              this.$message.error('用户名或者密码错误')
            }
          }
        }).catch(error=>{
          console.log(error);
          this.$message.error('请稍后重试')
        })
      }
    }
  }
</script>

<style scoped>
  #login{
    overflow:scroll;
    overflow-x:hidden;
    overflow-y: hidden;
    width: 100%;
    /*min-height: 785px;*/
    background-image: url("../assets/img/login/bg1.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .title{
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 130px;
    font-weight: 600;
  }
  .title1{
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .title2{
    color: #fff;
    font-size: 15px;
    text-align: center;
    margin-top: 10px;
  }
  .login{
    width: 960px;
    height: 465px;
    margin: 0 auto;
    background: #fff;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
  }
  .bg2{
    height: 353px;
  }
  .left{
    display: flex;
    align-items: center;
  }
  .right{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

  }
  #user{
    height: 50px;
    width: 370px;
    font-weight: 600;
    font-size: 16px;
    text-indent: 55px;
    background: #eef6fd;
    border-bottom: 2px #d6e7fa solid;
  }
  #password{
    height: 50px;
    width: 370px;
    font-weight: 600;
    font-size: 16px;
    text-indent: 55px;
    background: #eef6fd;
    border-bottom: 2px #d6e7fa solid;
  }
  .user-img{
    position: absolute;
    top: 10px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .password-img{
    position: absolute;
    top: 10px;
    left: 5px;
    width: 30px;
    height: 30px;
  }
  .user{
    position: relative;
  }
  .password{
    position: relative;
    margin-top: 20px;
  }
  #go{
    margin-right: 100px;
  }
  .goto{
    width: 370px;
    text-align: center;
    background-color: #1592ef;
    border-radius: 10px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    height: 50px;
    border: none;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;
  }
  input::-webkit-input-placeholder{
    font-weight: 600;
    font-size: 16px;
  }
  .foot{
    height: 90px;
  }
</style>