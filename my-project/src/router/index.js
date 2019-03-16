import Vue from 'vue';
import VueRouter from 'vue-router';
// const witDemo = () =>
//     import ('')

// 使用Vue的插件
Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history', // 去掉#号，为了好看
  routes: [{
    path: '/flex',
    component: (resolve) => require(
        ['@/components/layout.vue'], resolve), // 懒加载
  },
  {
    path: '*', // 重定向
    redirect: '/flex',
  },
  {
    path: '/vuex',
    component: (resolve) => require(['@/components/vuex'], resolve),
  },
  {
    path: '/es6',
    component: (resolve) => require(['@/components/es6'], resolve),
  },
  {
    path: '/img',
    component: (resolve) => require(['@/components/img'], resolve),
  },
  ],
});
