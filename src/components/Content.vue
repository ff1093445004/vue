<template>
  <div id="content">
      详情:{{msg}}
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: ""
    };
  },
  mounted(){
      this.msg = this.$route.query;
  }
};
</script>

<style lang="scss">

</style>
