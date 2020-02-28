import {
    axiosSend,
    getReq,
    postReq
} from './ajax';

const baseUrl = 'https://m.toutiao.com';

export const reqTest = data => getReq(baseUrl + '/list', data);