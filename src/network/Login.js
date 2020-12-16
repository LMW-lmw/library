import {request} from "./request";

export function login(name,password) {
  return request({
    method: 'post',
    url: '/adminLogin',
    data: {
      name,
      password
    }
  })
}