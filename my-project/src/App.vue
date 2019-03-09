<template>
  <div id="app">
    <index></index>
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
  text-align: center;
  color: #2c3e50;
}
</style>

