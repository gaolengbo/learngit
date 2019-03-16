<template>
  <div>
    <div id="main"
         style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
const echarts = require('echarts')
require('echarts/lib/chart/bar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data () {
    return {}
  },
  mounted () {
    this.drawGraph()
  },
  methods: {
    drawGraph () {
      let myChart = echarts.init(document.getElementById('main'))
      var XData = ['甘肃', '青海', '内蒙古', '重庆']
      var yData = [20, 30, 50, 40]
      let option = {}
      myChart.setOption(option)
      // color: function (params){ // 柱状图多种颜色
      // let list =['#ccc','#eee','#fff']
      // return list[params.dataIndex];
    }
  }
}
</script>

<style scoped>
</style>
 
