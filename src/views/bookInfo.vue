<template>
  <div id="book-info">
    书籍信息
  </div>
</template>

<script>
  import {getAllBook} from "../network/books/allBook";

  export default {
    name: "bookInfo",
    data() {
      return {

      }
    },
    created() {
      getAllBook().then(res=>{
        console.log(res);
      })
    }

  }
</script>

<style scoped>

</style>