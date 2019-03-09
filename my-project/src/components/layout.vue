<template>
  <div class="box">
    <header @click="add">page head</header>
    <div class="wrap">
      <span>nav</span>
      <span>content</span>
      <span>message</span>
    </div>
    <footer @click="init">page footing</footer>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    add() {
      // this.$router.push({
      //   path: 'vuex'
      // })
      // this.$router.push('vuex')
      console.log('----router---', this.$router)
      console.log('----route---', this.$route)
    },
    init() {
      return {
        fileList: [],
        token: {
          accessToken: ''
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  min-height: 100vh;
  flex-direction: column; // 纵向
  footer,
  header {
    flex: 1;
    border: 1px solid black;
    box-shadow: #ccc;
  }
  .wrap {
    display: flex;
    flex: 1;
  }
  span:nth-child(2) {
    flex: 1;
  }
  span {
    flex: 0 0 12em;
    border: 1px solid skyblue;
  }
}
</style>
