import { getReq } from './ajax';

const baseUrl = ''; 
// const baseUrl = '/api'; 

// 测试请求网易的数据2020/3/1
export const reqTest = data => getReq(baseUrl + '/nc/api/v1/feed/static/h5-normal-list', data);