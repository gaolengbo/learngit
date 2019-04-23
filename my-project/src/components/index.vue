<template>
  <div class="home-page">
    <div v-for="item in routeData"
         :key="item.id"
         @click="add(item.path)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      routeData: [
        {
          name: 'vuex',
          path: '/vuex'
        },
        {
          name: 'flex',
          path: '/flex'
        },
        {
          name: 'es6',
          path: '/es6'
        },
        {
          name: 'img',
          path: '/img'
        }
      ]
    }
  },
  methods: {
    add (path) {
      this.$router.push(path)
    }
  }
}
   // this.$router.push({
      //   path: 'vuex'
      // })
      // this.$router.push('vuex')
      // array.forEach((v,i)) => {
      //   if( this.menuList.indexOf()>=0){
      //     array[i].id=true;
      //   }
      // });
</script>
<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    border: 1px solid skyblue;
    cursor: pointer;
    //  @extend .list; // scss样式复用   &:hover 引用父级选择器
  }
}
</style>
