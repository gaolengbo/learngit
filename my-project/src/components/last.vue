
<template>
  <div class="image-dialog">
    <button class="image-dialog-trigger" type="button" @click="showDialog">
      <img class="image-dialog-thumb" ref="thumb" :src="thumb" />
    </button>
    <transition name="dialog" @enter="enter" @leave="leave">
      <div class="image-dialog-background" v-show="appearedDialog" ref="dialog">
        <img
          class="image-dialog-animate"
          ref="animate"
          :class="{ loading: !loaded }"
          :src="loaded ? full : thumb"
        />
        <img
          class="image-dialog-full"
          ref="full"
          @click="hideDialog"
          :src="appearedDialog &amp;&amp; full"
          :width="fullWidth"
          :height="fullHeight"
          @load="onLoadFull"
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      loaded: false,
      appearedDialog: false,
      fullWidth: 500,
      fullHeight: 500,
      thumb: require('./1_Kxd1M1OfpoCJS6iNqTKTgw.png'),
      full: require('./1_Kxd1M1OfpoCJS6iNqTKTgw.png')
    }
  },
  methods: {
    showDialog() {
      this.appearedDialog = true
    },

    hideDialog() {
      this.appearedDialog = false
    },
    enter() {
      this.animateImage(this.$refs.thumb, this.$refs.full)
    },
    leave() {
      this.animateImage(this.$refs.full, this.$refs.thumb)
    },
    onLoadFull() {
      this.loaded = true
    },
    animateImage(startEl, destEl) {
      const start = this.getBoundForDialog(startEl)
      this.setStart(start)
      this.$nextTick(() => {
        const dest = this.getBoundForDialog(destEl)
        this.setDestination(start, {
          top: dest.top,
          left: dest.left,
          width: dest.width || this.fullWidth,
          height: dest.height || this.fullHeight
        })
      })
    },
    getBoundForDialog(el) {
      const bound = el.getBoundingClientRect()
      const dialog = this.$refs.dialog
      return {
        top: bound.top + dialog.scrollTop,
        left: bound.left + dialog.scrollLeft,
        width: bound.width,
        height: bound.height
      }
    },
    setStart(start) {
      const el = this.$refs.animate
      el.style.left = start.left + 'px'
      el.style.top = start.top + 'px'
      el.style.width = start.width + 'px'
      el.style.height = start.height + 'px'
      el.style.transitionDuration = '0s'
      el.style.transform = ''
    },
    setDestination(start, dest) {
      const el = this.$refs.animate
      el.style.transitionDuration = ''
      const translate = `translate(${dest.left - start.left}px, ${dest.top -
        start.top}px)`
      const scale = `scale(${dest.width / start.width}, ${dest.height /
        start.height})`
      el.style.transform = `${translate} ${scale}`
    }
  }
}
</script>

<style lang="scss" scoped>
.image-dialog-trigger {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 200px;
    height: 200px;
  }
}

.image-dialog-background {
  overflow: auto;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 80px 40px;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;

  .image-dialog-close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 60px;
    height: 60px;
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;
    -webkit-transition: 300ms ease-out;
    transition: 300ms ease-out;
    outline: none;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      margin-top: -0.5px;
      margin-left: -20px;
      width: 40px;
      height: 1px;
      background-color: #000;
      -webkit-transform: rotate(135deg);
      transform: rotate(135deg);
    }
  }

  .image-dialog-animate {
    display: none;
    position: absolute;
    -webkit-transform-origin: left top;
    transform-origin: left top;

    &.loading {
      display: block;
    }
  }

  &.dialog-leave-active {
    -webkit-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;

    .image-dialog-animate {
      display: block;
      -webkit-transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
      transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
      transition: transform 300ms cubic-bezier(1, 0, 0.7, 1);
      transition: transform 300ms cubic-bezier(1, 0, 0.7, 1),
        -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
    }

    .image-dialog-full {
      visibility: hidden;
    }
  }

  &.dialog-enter-active {
    transition: background-color 300ms ease-out;

    .image-dialog-animate {
      display: block;
      transition: transform 300ms cubic-bezier(1, 0, 0.7, 1);
      transition: transform 300ms cubic-bezier(1, 0, 0.7, 1),
        -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
    }

    .image-dialog-full {
      visibility: hidden;
    }
  }
}
</style>
