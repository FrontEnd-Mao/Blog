import {request} from './request'

export function getArticalAxios() {
  return request({
    url:'getArtical',
    method: 'post',
  });
}
export function getDetailArticalAxios(articalId) {
  return request({
    url:'getDetailArtical',
    method: 'post',
    data: {
        articalId,
    }
  });
}