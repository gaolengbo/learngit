<template>
  <div>
    <button @click="getData">数量++</button>
    <div>{{ num }}</div>
    <div>{{ form.name }}</div>
    <button @click="pop(2)">数量--</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Bus from './bus'
const STORE = 'first'
export default {
  data() {
    return {
      arr: [
        {
          name: '222',
          id: '333'
        }
      ]
    }
  },
  // add()  delete()  filter()
  compontent: {},
  computed: {
    //  {
    //   num: 'num'
    //   // num: state => state.num
    // }
    ...mapState(STORE, ['num', 'form']),
    ...mapState(['can'])
  },
  methods: {
    // ...mapActions(["add", "pop"]) // 没有模块的写法
    // 有模块的写法
    ...mapActions(STORE, ['add', 'pop']),
    getData() {
      Bus.$emit('update', 180) // Bus事件总线传递数据
    }
  }
}
</script>

<style scoped>
</style>