import axios from 'axios';


// 设置请求头
const Axios = axios.create({
  baseURL: '',
  responseType: 'json',
  headers: {
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*', // 让服务器能够接收到来自所有域的请求
    'withCredentials': true, // 允许携带cookie
    'Pragma': 'no-cache', // 编译指示
    'Cache-Control': 'no-cache', // 缓存控制：不缓存
  },
});

export default Axios;
