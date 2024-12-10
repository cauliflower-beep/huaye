import axios from 'axios';

// 使用Axios实例化一个全局的HTTP客户端
// 以便集中管理默认配置、拦截器等

const apiCli = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST,
  timeout: 5000, // 请求超时时间
});

export default apiCli;
