import {request} from "../request";

export function getAllBook() {
  return request({
    method: 'get',
    url: '/getAllBook'
  })
}