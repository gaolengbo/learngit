<template>
  <div class="box">
    <span>1</span>
    <span>2</span>
    <span>3</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;
  span {
    flex: 0 0 285px;
    height: 500px;
    background: skyblue;
    margin: 0 20px;
  }
  span:nth-child(2) {
    flex: 1;
  }
}
</style>
