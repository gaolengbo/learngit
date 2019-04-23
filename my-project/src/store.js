import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'; // vuex 内置状态快照用于调试

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [createLogger()],
})

// export default {
//   state,
//   actions,
//   mutations,
//   namespaced: true, // 用于在全局引用此文里的方法时标识这一个的文件名
// };
// let temp = {}
// let arr = []
// Object.keys(params).forEach(k => {
//     temp[params[k].id] = params[k];
// })
// Object.keys(temp).forEach(i => {
//             arr.push(temp[i];
//             });

// this.valueList[id]={
//   id
// }