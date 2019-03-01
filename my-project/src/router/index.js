import Vue from 'vue'
import VueRouter from 'vue-router'
// const witDemo = () =>
//     import ('')

//使用Vue的插件
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history', // 去掉#号，为了好看
  routes: [{
      path: '/mine',
      component: resolve => require(['@/components/layout.vue'], resolve) // 懒加载
    },
    {
      path: '*', // 重定向
      redirect: '/mine'
    },
    {
      path: '/vuex',
      name: 'xx',
      component: resolve => require(['@/components/vuex-demo'], resolve)
    },
    {
      path: '/ele',
      name: 'ele',
      component: resolve => require(['@/components/element'], resolve)
    }
  ]
})
