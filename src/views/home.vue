<template>
  <div id="home">
    <div class="userInfo">
        <el-row>
          <el-col :span="12">
            <div class="welcome">
              <span>欢迎使用图书馆管理系统</span>
              <div>
                <span>当前身份：</span>
                <span v-if="this.identity==1">超级管理员</span>
                <span v-if="this.identity==2">管理员</span>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="">

            </div>
          </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        identity: window.localStorage.getItem('identity')
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .welcome{
    background: #FFF;
    border-radius: 5px;
    min-height: 200px;
    padding: 20px;
  }
</style>