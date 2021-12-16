import {request} from './request'

export function submitArticalAxios(title, artical) {
  return request({
    url:'loadArtical',
    method: 'post',
    data: {
        title,
        artical,
    }
  });
}
export function getAllArticalAxios() {
  return request({
    url:'getArtical',
    method: 'post'
  });
}