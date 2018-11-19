<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="addList($event)">
    <h2>进行中</h2>
    <ul>
      <li v-for="(item, key) in list" v-if="!item.ck">
        <input type="checkbox" v-model="item.ck" @change="changeAdd()">{{item.msg}} ----------------- <button @click="remove(key)">删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
     <ul>
      <li v-for="(item, key) in list" v-if="item.ck">
        <input type="checkbox" v-model="item.ck" @change="changeAdd()">{{item.msg}} ----------------- <button @click="remove(key)">删除</button>
      </li>
    </ul>
    <hr>
    <button @click="getData()">傻狗</button>
  </div>
</template>
<script>
import storeage from "./model/storeage.js";
export default {
  name: "app",
  data() {
    return {
      msg: "刘建军工地上",
      todo: "",
      list: []
    };
  },
  methods: {
    addList(e) {
      if (e.keyCode == 13) {
        this.list.push({
          ck: false,
          msg: this.todo
        });
        this.todo = "";
      }
      storeage.set("list", this.list);
    },
    remove(key) {
      this.list.splice(key, 1);
      storeage.set("list", this.list);
    },
    changeAdd() {
      storeage.set("list", this.list);
    },
    getData() {
      this.$http
        .get(
          "https://www.baidu.com/home/msg/data/personalcontent?callback=jQuery1102003859572038479919_1542619485984&num=8&_req_seqid=86d1460f000303b5&sid=&_=1542619485985"
        )
        .then(
          function(response) {
            console.info(response);
          },
          function(error) {
            console.info(error);
          }
        );
    }
  },
  mounted() {
    var list1 = storeage.get("list");
    if (list1) {
      this.list = list1;
    }
  }
};
</script>

<style lang="scss">
.red {
  color: red;
}
.box {
  height: 50px;
  width: 100px;
  background: red;
}
</style>
