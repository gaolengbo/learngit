<template>
  <div id="app">
    <div class="nav">
      <index></index>
    </div>
    <router-view />
  </div>
</template>
<script>
import index from './components/index'
export default {
  components: { index }
}
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

// 电脑设置配置
// {
//   "editor.formatOnSave": true, // 保存时格式化
//   // eslint 检测文件类型
//   "eslint.validate": [
//       "javascript",
//       "javascriptreact",
//       {
//           "language": "html",
//           "autoFix": true
//       },
//       {
//           "language": "vue",
//           "autoFix": true
//       }
//   ],

//   "workbench.colorTheme": "Monokai", // 默认主题颜色
//   "editor.snippetSuggestions": "top", // 建议片段位置
//   "explorer.confirmDelete": false,
//   "workbench.editor.enablePreview": false, //打开文件不覆盖
//   "editor.minimap.enabled": false, //关闭快速预览
//   "files.autoSave": "afterDelay", //打开自动保存
//   "editor.quickSuggestions": {
//       //开启自动显示建议
//       "other": true,
//       "comments": true,
//       "strings": true
//   },
//   "editor.tabSize": 2, //制表符符号eslint
//   "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
//   "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
//   "prettier.semi": false, //去掉代码结尾的分号
//   "prettier.singleQuote": true, //使用单引号替代双引号
//   "javascript.format.insertSpaceBeforeFunctionParenthesis":
//  true, //让函数(名)和后面的括号之间加个空格
//   "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
//   "vetur.format.defaultFormatter.js":
// "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
//   "vetur.format.defaultFormatterOptions": {
//       "js-beautify-html": {
//           "wrap_attributes": "force-aligned" //属性强制折行对齐
//       }
//   },
//   "workbench.startupEditor": "newUntitledFile",
// }


/* eslint-disable */

</script>
<style lang="scss">
#app {
  // text-align: center;
  width: 100%;
  height: 700px;
  color: #2c3e50;
  display: flex;
  .nav {
    flex: 0 0 50px;
  }
}
</style>
