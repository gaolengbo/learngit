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
      // array.forEach((v,i)) => {
      //   if( this.menuList.indexOf()>=0){
      //     array[i].id=true;
      //   }
      // });
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
.list {
  background: #ccc;
}
.box {
  display: flex;
  width: 95%;
  height: 100vh;
  flex-direction: column; // 纵向
  footer,
  header {
    flex: 1;
    border: 1px solid black;
    box-shadow: #ccc;
    @extend .list; // scss样式复用   &:hover 引用父级选择器
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
