<template>
  <div id="news">
    {{msg}}
    <br>
    <ul>
      <li v-for="(item, key) in list">
        <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "新闻:",
      list: []
    };
  },
  methods: {
    getNews() {
      var url =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.jsonp(url).then(
        response => {
          this.list = response.body.result;
        },
        error => {
          console.info(error);
        }
      );
    }
  },
  mounted() {
    this.getNews();
  }
};
</script>

<style lang="scss">
</style>
