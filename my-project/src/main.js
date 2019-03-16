import Vue from 'vue';
import App from './App';
import router from './router'; // 等效于import router from './router/index.js'
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/font/iconfont.css';
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router: router, // 4.注册路由对象
  components: {
    App, // App:App
  },
  store,
  template: '<App/>',
});
