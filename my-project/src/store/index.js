import Vuex from 'vuex';
import Vue from 'vue';
import first from './first';
import createLogger from 'vuex/dist/logger'; // vuex 内置状态快照用于调试
Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    first,
  },
  plugins: [createLogger()],
});
export default store;
