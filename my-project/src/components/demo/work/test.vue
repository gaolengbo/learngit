<template>
    <div class="code" @click="refreshCode">
    <s-identify :identifyCode="identifyCode"></s-identify>
  </div>
</template>
<script>
import SIdentify from "./SIdentify.vue"
export default {
  name: 'codetest',
  // 验证码组件
  components: {
    SIdentify
  },
  data() {
    return {
      identifyCodes: '1234567890',
      identifyCode: ''
    }
  },
  mounted() {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode)
    }
  }
}
</script>

<style>
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
}
</style>
