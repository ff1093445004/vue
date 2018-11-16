<template>
  <div id="app">
    <!-- 显示值 -->
    <h2>{{msg}}</h2>
    <!-- 循环 -->
    <hr>
    <ul>
      <li v-for="(item, key) in list" :class="{red: key == 0}">
        {{item.name}}
      </li>
    </ul>
    <!-- 绑定属性 -->
    <hr>
    <img v-bind:src="url" />
    <img :src="url" />
    <!-- 动态绑定属性 -->
    <hr>
    <div class="box" v-bind:style="{width: boxWidth + 'px'}">
      123456
    </div>
    <!-- 解析html -->
    <hr>
    <div v-html="h"></div>
    <!-- MVVM -->
    <hr>
    <input type="text" v-model="msg">
    <!-- 绑定方法 -->
    <hr>
    <button v-on:click="get()">按钮1</button>
    <button @click="set()">按钮2</button>
    <!-- ref -->
    <hr>
    <input type="text" ref="userinfo">
    <div ref="bbox">我是bbox</div>
    <button @click="getInputValue()">获取数据</button>
    <!-- 获取事件 -->
    <hr>
    <button aid="你好" @click="getEvent($event)">获取事件</button>



  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "三波我个hiuahiduahsiuafsh",
      list: [{ name: "123" }, { name: "36653" }],
      url:
        "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1404686388,2424069672&fm=58&bpow=404&bpoh=302",
      h: "<h2>我是好阿斯达</h2>",
      boxWidth: "123"
    };
  },
  methods: {
    get() {
      alert(this.msg);
    },
    set() {
      this.msg = "看价格感觉";
    },
    getInputValue() {
      alert(this.$refs.userinfo.value);
      this.$refs.bbox.style.background='red';
    },
    getEvent(e){
      console.info(e);
      // e.srcElement    dom节点
      e.srcElement.style.background='red'
      console.info(e.srcElement);
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
