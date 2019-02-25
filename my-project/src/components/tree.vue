<template>
  <div>
    <button @click="add(2)">数量++</button>
    <div>{{num}}</div>
    <button @click="pop(2)">数量--</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  // $route
  compontent: {},
  computed: {
    ...mapState("first", {
      num: state => state.num
    })
  },
  methods: {
    ...mapActions("first", ["add", "pop"])
    // ...mapActions(["add", "pop"]) // 没有模块的写法
  }
};
</script>

<style scoped>
</style>