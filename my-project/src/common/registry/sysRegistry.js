const env = _ENV_;
const SERVER_URLS = {
  BETA: 'http://10.0.139.141:8081', // 测试环境
  DEV: 'http://10.0.145.84:9099', // 开发环境
};
// 开发环境
let BASEURL = SERVER_URLS.DEV;
let isDevelope;
if (env === 'localhost') {
  isDevelope = false;
} else {
  BASEURL = SERVER_URLS[env];
  isDevelope = false;
}
const PORTS = {
  safetymgmt: '/ioc/safetymemt', // 安防模块9091
};
let sysRegistry;
if (isDevelope) {
  // 开发环境
  sysRegistry = {
    TASK_URL: '/aa',
  };
} else {
  // 内网部署环境
  sysRegistry = {
    TASK_URL: `${BASEURL}${PORTS.safetymgmt}`,
  };
}
export {
  sysRegistry,
};
