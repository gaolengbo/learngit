<template>
  <div id="app">
    <div class="nav">
      <index></index>
    </div>
    <router-view />
  </div>
</template>
<script>
import index from './components/index'
export default {
  name: 'App',
  components: { index }
}
</script>
<style lang="scss" scoped>
#app {
  // text-align: center;
  width: 100%;
  height: 700px;
  color: #2c3e50;
  display: flex;
  .nav {
    flex: 0 0 50px;
  }
}
</style>

