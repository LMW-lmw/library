<template>
  <div id="bar">
    <div id="top-bar">
      <div class="left">
        <i class="el-icon-s-fold menu"></i>
        <span class="text">图书馆管理后台</span>
      </div>
      <div class="right">
        <el-tooltip :content="fullscreen?`退出全屏`:`全屏`" placement="bottom" effect="dark">
          <i @click="handleFullScreen" class="el-tooltip el-icon-rank full" aria-describedby="el-tooltip-4" tabindex="0"></i>
        </el-tooltip>
        <div>
          <img src="~assets/img/headPhoto/dog.jpeg" class="photo">
            <el-dropdown trigger="click" size="small">
              <span class="user-name el-dropdown-link el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-9193" role="button" tabindex="0">
                <span>admin</span>
                <i class="el-icon-caret-bottom"></i>
             </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <span @click="out">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </div>
      </div>
    </div>
    <div id="side-bar"></div>
  </div>
</template>

<script>
  export default {
    name: "TopBar",
    data(){
      return{
        fullscreen: false
      }
    },
    methods: {
      handleFullScreen() {
        console.log('进入');
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen;
      },
      out(){
        this.$store.commit('Token', {
          identity: '',
          userID: '',
          token: ''
        })
        window.localStorage.clear()
        this.$router.replace({path:'/login'})
      },
    }
  }
</script>

<style scoped>
  #top-bar {
    display: flex;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    position: relative;
    background-color: #242f42;
    align-items: center;
    justify-content: space-between;
  }

  .menu {
    padding: 0 21px;
    line-height: 71px;
    cursor: pointer;
  }

  .full {
    transform: rotate(45deg);
    cursor: pointer;
    font-size: 25px;
  }

  .right {
    padding-right: 50px;
    display: flex;
    align-items: center;
  }

  .photo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 20px;
    margin-right: 10px;
  }

  #top-bar .user-name {
    font-size: 16px;
    cursor: pointer;
    color: white;
  }

</style>