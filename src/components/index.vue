<template>
  <div id="home">
    <div v-if="$route.meta.showBar">
      <top-bar></top-bar>
      <side-bar/>
      <div class="content-box" :class="{'content-collapse':collapse}">
        <router-view/>
      </div>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import topBar from "./Bar/topBar";
  import sideBar from "./Bar/sideBar";
  import bus from "./Bar/bus";
  export default {
    name: "Home",
    data(){
      return {
        collapse: false
      }
    },
    created() {
      bus.$on('collapse-content', msg => {
        this.collapse = msg;
      });
    },
    components: {
      topBar,
      sideBar
    }
  }
</script>

<style scoped>

</style>