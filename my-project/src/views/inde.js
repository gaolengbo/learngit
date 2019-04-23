/* <script>
// import API from '@/common/dataAPi/listApi.js'
// let face = new API()
// export default {
//   data () {
//     return {
//       data: []
//     }
//   },
//   methods: {
//     // 第一种，参数在组件里
//     reduceClick () {
//       let params = {}
//       face.getFaceList(faceData, params).then(data => {
//         console.log(data)
//       })
//     },
//     addClick () {
//       let params = {
//         pageSize: this.pageSize,
//         paggNumber: this.paggNumber
//       }
//       face.uploadFile(params).then(res => {
//         console.log(res)
//         let newArray = res.list.map(item => {
//           return {
//             code: item.code,
//             id: item.id
//           }
//         })
//       })
//     }
//   }
// }
// </script>
// <template>
  // <div class="box">

    // </div>
  // </template>

// <script>
// export default {
//   data () {
//     return {};
//   },
//   mounted () {
//     var url = "https://cnodejs.org/api/v1/topics?tab=good&limit=10";
//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         const listData = res.data.map(item => {
//           //   console.log(item);
//           return {
//             content: item.content,
//             title: item.title,
//             id: item.id
//           };
//         });
//         Promise.all(listData).then(list => {
//           for (let key in list) {
//             console.log(`第${key}个标题--------------`, list[key].title);
//           }
//         });
//       });
//   }
// };
// </script>
// <style lang="sass" scoped>
// </style>
 */