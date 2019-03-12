<template>
  <div>
    <div class="box">
      <transition name="fade">
        <img :src="signImages" alt="" @click="magnify" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      signImages: require('./1_Kxd1M1OfpoCJS6iNqTKTgw.png'),
      show: false
    }
  },
  methods: {
    magnify() {
      let img = document.getElementsByTagName('img')[0]
      img.style.position = 'absolute'
      // let start = img.getBoundingClientRect() // 获取图片的坐标和图片大小
      //图片高度大于屏幕

      if (img.naturalHeight > window.innerHeight) {
        img.height = window.innerHeight
        console.log('img', img.height)
      }
      //图片宽度大于屏幕
      // if (img.naturalWidth > window.innerWidth) {
      //   img.width = window.innerWidth
      // }
      if (this.show === false) {
        img.style.transition = 'all 500ms ease-in-out'
        let translate = `translate(${(window.innerWidth - img.naturalWidth) /
          2}px,${(window.innerHeight - img.naturalHeight) / 2}px)`
        let scale = `scale(${img.naturalWidth /
          img.width}, ${img.naturalHeight / img.height})`
        img.style.transform = `${translate} ${scale}`
        console.log('---', img.style.transform)
        this.show = true
      } else {
        let translate = `translate(${0}px,${0}px)`
        let scale = `scale(1)`
        img.style.transform = `${translate} ${scale}`
        this.show = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  position: relative;
  img {
    z-index: 200;
    width: 200px;
    height: 200px;
  }
}
</style>
