<template>
  <div>
    <button @click="add()">数量++</button>
    <div>{{ num }}</div>
    <div>{{ form.name }}</div>
    <button @click="pop(2)">数量--</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
  // add()  delete()
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
    ...mapActions(STORE, ['add', 'pop']) // 有模块的写法
  }
}
</script>

<style scoped>
</style>