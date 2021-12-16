import {request} from './request'

export function getUserAxios(username, password) {
  return request({
    url:'login',
    method: 'post',
    data: {
      username,
      password,
    }
  });
}

// export function getGoodsData(type, page) {
//   return request({
//     url:'home/data',
//     params: {
//       type,
//       page
//     }
//   });
// }
// export function getGoodsData(type, page) {
//   return request({
//     url:'/test/getGoods',
//     params:{
//       type,
//       page
//     }
//   });
// }
