import Vue from 'vue'

// 特殊的bus
// const Bus = new Vue({
//   data() {
//     return {
//       val: ''
//     }
//   },
//   created() {
//     this.$on('update', val => {
//       this.val = val;
//     })
//   }
// })
const Bus = new Vue();
export default Bus
