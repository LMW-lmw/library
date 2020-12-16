<template>
  <div id="test">
    <el-button>默认按钮</el-button>
  </div>
</template>

<script>
  import {test} from "../network/test";

  export default {
    name: "test",
    data(){
      return {

      }
    },
    created() {
      // this.test()
    },
    methods:{
      test(){
        test().then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style scoped>

</style>