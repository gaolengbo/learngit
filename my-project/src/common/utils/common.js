// import axios from 'axios';


// // 数据字典
// const sysRegisty = require('../registry/sysRegistry.js');
// const commonUtils = {
//   axiosData: function(url, method, params, baseURL, ...configHead) {
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
//     return new Promise(function(resolve, reject) {
//       AXIOS.request(config).then((reponse) => {
//         resolve(reponse);
//       })
//           .catch(function(error) {
//             reject(error);
//             console.log(error);
//           });
//     });
//   },
//   getRegistry: function(key) {
//     return sysRegisty.sysRegisty[key];
//   },
//   objectToQueryString: function(query) {
//     let urlQuery = '';
//     for (const key in query) {
//       urlQuery += `&${key}=${query[key]}`;
//     }
//     urlQuery = urlQuery.substr(1);
//     return urlQuery;
//   },
// };
// export default AXIOS;
