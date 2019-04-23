// import commonUtils from '@/common/utils/common';
// const BASEURL = commonUtils.getRegisty('TASK_URL');


// export default class faceControl {
//   /**
//    *
//    * @param {*} params
//    */
//   async getFaceList(faceData, params) {
//     const result = await commonUtils.axiosData(
//       faceData,
//       'GET',
//       params,
//       BASEURL
//     );
//     return result.data;
//   };

//   async uploadFile(params) {
//     const result = await commonUtils.axiosData(
//       `/upload/uploadFile?buckettest&fileName=true`,
//       // 第二种参数在配置里
//       'GET',
//       params,
//       BASEURL
//     );
//     return result.data;
//   }
// }



// import axios from 'axios';


// // 数据字典
// const sysRegisty = require('../registry/sysRegistry.js');
// const commonUtils = {
//   axiosData: function (url, method, params, baseURL, ...configHead) {
//     const config = {
//       url: url,
//       baseURL,
//     };
//     method = method.toLowerCase();
//     switch (method) {
//       case 'get':
//         config.params = params;
//         break;
//       case 'post':
//         config.data = params;
//         config.method = method;
//         if (configHead[0]) {
//           if (configHead[0].reponseType) {
//             config.reponseType = configHead[0]['responseType'];
//           } else {
//             config.header = configHead[0];
//             config.onUploadProgress = configHead[1];
//           }
//         }
//         break;
//       case 'delete':
//         config.data = params;
//         config.method = method;
//         break;
//       case 'put':
//         config.data = params;
//         config.method = method;
//         break;
//       default:
//         break;
//     }
//     return new Promise(function (resolve, reject) {
//       AXIOS.request(config).then((reponse) => {
//           resolve(reponse);
//         })
//         .catch(function (error) {
//           reject(error);
//           console.log(error);
//         });
//     });
//   },
//   getRegistry: function (key) {
//     return sysRegisty.sysRegisty[key];
//   },
//   objectToQueryString: function (query) {
//     let urlQuery = '';
//     for (const key in query) {
//       urlQuery += `&${key}=${query[key]}`;
//     }
//     urlQuery = urlQuery.substr(1);
//     return urlQuery;
//   },
// };
// export default AXIOS;