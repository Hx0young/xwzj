import api from './index'
import { axios } from '@/utils/request'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
  return axios({
    url: '/user/login',
    method: 'post',
    data: parameter
  })
}

export function getLoginQrcode() {
  return axios({
    url: '/wechat/login',
    method: 'get'
  })
}

export function getLoginCheck(params) {
  return axios({
    url: `/wechat/loginCheck?key=${params}`,
    method: 'get'
  })
}

export function getBindCheck() {
  return axios({
    url: '/wechat/bindCheck',
    method: 'get'
  })
}

export function unbindWechat() {
  return axios({
    url: '/wechat/unbind',
    method: 'POST'
  })
}

export function getBindWechatQrcode() {
  return axios({
    url: '/wechat/bind',
    method: 'get'
  })
}

export function phoneLogin(parameter) {
  return axios({
    url: '/sys/phoneLogin',
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha(parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo() {
  return axios({
    url: '/api/user/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function logout(logoutToken) {
  return axios({
    url: '/sys/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Access-Token': logoutToken
    }
  })
}
