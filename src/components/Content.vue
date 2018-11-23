<template>
  <div id="content">
      详情:<div v-html="msg"></div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "",
      aid: ""
    };
  },
  methods: {
    getContent(aid) {
      var url =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
      this.$http.get(url).then(
        response => {
          console.info(response.body);
          this.msg = response.body.result[0].content;
        },
        error => {
          console.info(error);
        }
      );
    }
  },
  mounted() {
    var aid = this.$route.params.id;
    this.getContent(aid);
  }
};
</script>

<style lang="scss">
</style>
