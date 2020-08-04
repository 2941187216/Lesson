import axios from 'axios';

//全局的后端api前缀
export const baseUrl = 'http://192.168.43.66:8888';
const axiosInstance = axios.create({
  baseURL: baseUrl
})

export { axiosInstance }