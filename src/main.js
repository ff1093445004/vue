import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";
import Base from "./components/Base.vue";
import PostValue from "./components/PostValue.vue";
import News from "./components/news.vue";
import Content from "./components/content.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

// 配置
const routes = [
  { path: '/base', component: Base },
  { path: '/postValue', component: PostValue },
  { path: '/news', component: News },
  { path: '/content/:id', component: Content }
  // { path: '*', redirect: '/news' }   /*默认跳转路由*/
]

// 创建
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 挂载
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
