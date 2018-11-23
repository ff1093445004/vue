<template>
  <div id="app">
    <router-link to="/news">Go to news</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "123"
    };
  }
};
</script>

<style lang="scss">
</style>
