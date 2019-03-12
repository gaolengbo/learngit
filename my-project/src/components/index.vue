<template>
  <div class="home-page">
    <div v-for="item in routeData" :key="item.id" @click="add(item.path)">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page',
  data() {
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
    add(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
    border: 1px solid skyblue;
    cursor: pointer;
  }
}
</style>
