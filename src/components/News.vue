<template>
  <div id="news">
    <!-- 循环 -->
    <hr>
    <ul>
      <li v-for="(item, key) in list" :class="{red: key == 0}">
        <router-link to="/content?id='key'">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "",
      list: [{ name: "撒可富客观上甘肃省科技馆" }, { name: "框架还储蓄卡机会难得死狗I进化石" }]
    };
  }
};
</script>

<style lang="scss">

</style>
