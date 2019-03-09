import mutations from './mutations';
const state = {
  num: 10,
  form: {
    name: '222',
    id: '',
    age: ''
  }
}

const actions = {
  add({
    commit
  }, num) {
    commit("ADD", num);
  },
  pop({
    commit
  }, num) {
    commit('POP', num)
  }
}

export default {
  state,
  actions,
  mutations,
  namespaced: true //用于在全局引用此文里的方法时标识这一个的文件名
}
