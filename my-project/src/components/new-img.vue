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
      signImages: require('./timg.jpg'),
      show: false
    }
  },
  methods: {
    magnify() {
      let img = document.getElementsByTagName('img')[0]
      img.style.position = 'absolute'
      let start = img.getBoundingClientRect() // 获取图片的坐标和图片大小
      let initWidth = img.naturalWidth // 用一个变量等于图片原始宽度
      let initHeight = img.naturalWidth // 用一个变量等于图片原始高度
      let scale = ''

      // 首次点击
      if (this.show === false) {
        img.style.transition = 'all 500ms ease-in-out' // 动画效果

        // 如果图片原始高度大于窗口高度
        if (img.naturalHeight > window.innerHeight) {
          initHeight = window.innerHeight // 原始高度就等于窗口高度
          scale = `scale(${initHeight / start.height})` // 放大倍数
        }
        // 图片宽度大于屏幕
        if (img.naturalWidth > window.innerWidth) {
          initWidth = window.innerWidth
          scale = `scale(${initWidth / start.width})` // 放大倍数
        }

        let translate = `translate(${(window.innerWidth - img.naturalWidth) /
          2}px,${(window.innerHeight - img.naturalHeight) / 2}px)` // 平移位置

        img.style.transform = `${translate} ${scale}`
        console.log('---', img.style.transform)
        this.show = true
      } else {
        let translate = `translate(${0}px,${0}px)` // 再次点击回归原位置
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
