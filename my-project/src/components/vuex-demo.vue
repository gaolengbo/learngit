<template>
  <div>
    <button @click="add(2)">数量++</button>
    <div>{{ num }}</div>
    <button @click="pop(2)">数量--</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const STORE = 'first'
export default {
  data() {
    return {}
  },
  // $route
  compontent: {},
  computed: {
    //  {
    //   num: 'num'
    //   // num: state => state.num
    // }
    ...mapState(STORE, ['num'])
  },
  methods: {
    ...mapActions(STORE, ['add', 'pop'])
    // ...mapActions(["add", "pop"]) // 没有模块的写法
  }
}
</script>

<style scoped>
</style>