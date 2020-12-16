<template>
  <div id="home">
      <top-bar></top-bar>
      <side-bar/>
      <div class="content-box" :class="{'content-collapse':collapse}">
        <tags/>
        <div style="padding: 10px">
        <router-view/>
        </div>
      </div>
  </div>
</template>

<script>
  import topBar from "./Bar/topBar";
  import sideBar from "./Bar/sideBar";
  import tags from "./Bar/tabs";
  import bus from "./Bar/bus";
  export default {
    name: "Home",
    data(){
      return {
        tagsList: [],
        collapse: false
      }
    },
    components: {
      topBar,
      sideBar,
      tags
    },
    created() {
      bus.$on('collapse-content', msg => {
        this.collapse = msg;
      });
      bus.$on('tags', msg => {
        let arr = [];
        for (let i = 0, len = msg.length; i < len; i++) {
          msg[i].name && arr.push(msg[i].name);
        }
        this.tagsList = arr;
      });
    },
  }
</script>

<style scoped>

</style>