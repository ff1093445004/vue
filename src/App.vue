<template>
  <div id="app">
    <input type="text" v-model="todo" @keydown="addList($event)">
    <h2>进行中</h2>
    <ul>
      <li v-for="(item, key) in list" v-if="!item.ck">
        <input type="checkbox" v-model="item.ck">{{item.msg}} ----------------- <button @click="remove(key)">删除</button>
      </li>
    </ul>
    <h2>已完成</h2>
     <ul>
      <li v-for="(item, key) in list" v-if="item.ck">
        <input type="checkbox" v-model="item.ck">{{item.msg}} ----------------- <button @click="remove(key)">删除</button>
      </li>
    </ul>
  </div>
</template>
<script>
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
      if(e.keyCode == 13){
          this.list.push({
          ck:false,
          msg:this.todo
        });
        this.todo = "";
      }
    },
    remove(key) {
      this.list.splice(key, 1);
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
