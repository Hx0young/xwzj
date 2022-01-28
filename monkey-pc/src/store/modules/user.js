import Vue from 'vue'
import { login, logout, phoneLogin, getLoginCheck, getBindCheck, unbindWechat } from '@/api/login'
import {
  ACCESS_TOKEN,
  USER_NAME,
  USER_INFO,
  USER_AUTH,
  SYS_BUTTON_AUTH,
  CURRENT_ORG,
  MULTI_ORG
} from '@/store/mutation-types'
import { queryPermissionsByUser } from '@/api/api'
import store from '@/store/index'

const expTime = 7 * 24 * 60 * 60 * 1000
const user = {
  state: {
    token: '',
    username: '',
    realname: '',
    avatar: '',
    permissionList: [],
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { username, realname }) => {
      state.username = username
      state.realname = realname
    },
    SET_PERMISSIONLIST: (state, permissionList) => {
      state.permissionList = permissionList
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      console.log("LOGIN");
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            console.log(response)
            console.log(response.resultCode === "0")
            if (response.resultCode === "0") {
              // const result = response.result
              // const userInfo = result.userInfo
              Vue.ls.set(ACCESS_TOKEN, response.token, expTime)
              // Vue.ls.set(USER_NAME, userInfo.username, expTime)
              // Vue.ls.set(USER_INFO, userInfo, expTime)
              // commit('SET_TOKEN', result.token)
              // commit('SET_INFO', userInfo)
              // commit('SET_NAME', { username: userInfo.username, realname: userInfo.realname })
              console.log("resolve")
              resolve(response)
            } else {
              console.log("reject")
              reject(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 微信扫码登录
    wxLogin({ commit }, key) {
      return new Promise((resolve, reject) => {
        getLoginCheck(key)
          .then(response => {
            if (response.code == '200') {
              const result = response.result
              const userInfo = result.userInfo
              Vue.ls.set(ACCESS_TOKEN, result.token, expTime)
              Vue.ls.set(USER_NAME, userInfo.username, expTime)
              Vue.ls.set(USER_INFO, userInfo, expTime)
              commit('SET_TOKEN', result.token)
              commit('SET_INFO', userInfo)
              commit('SET_NAME', { username: userInfo.username, realname: userInfo.realname })
              commit('SET_AVATAR', userInfo.avatar)
              resolve(response)
            } else {
              reject(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    wxBind({ commit }) {
      return new Promise((resolve, reject) => {
        getBindCheck()
          .then(response => {
            if (response.code == '200') {
              const result = response.result

              const userInfo = result.userInfo
              Vue.ls.set(ACCESS_TOKEN, result.token, expTime)
              Vue.ls.set(USER_NAME, userInfo.username, expTime)
              Vue.ls.set(USER_INFO, userInfo, expTime)
              commit('SET_TOKEN', result.token)
              commit('SET_INFO', userInfo)
              commit('SET_NAME', { username: userInfo.username, realname: userInfo.realname })
              commit('SET_AVATAR', userInfo.avatar)
              resolve(response)
            } else {
              reject(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    wxUnbind({ commit }) {
      return new Promise((resolve, reject) => {
        unbindWechat()
          .then(response => {
            if (response.code == '200') {
              const result = response.result
              const userInfo = result.userInfo
              Vue.ls.set(ACCESS_TOKEN, result.token, expTime)
              Vue.ls.set(USER_NAME, userInfo.username, expTime)
              Vue.ls.set(USER_INFO, userInfo, expTime)
              commit('SET_TOKEN', result.token)
              commit('SET_INFO', userInfo)
              commit('SET_NAME', { username: userInfo.username, realname: userInfo.realname })
              commit('SET_AVATAR', userInfo.avatar)
              resolve(response)
            } else {
              reject(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    //手机号登录
    PhoneLogin({ commit }, userInfo) {
      console.log('PhoneLogin')
      return new Promise((resolve, reject) => {
        phoneLogin(userInfo)
          .then(response => {
            if (response.code == '200') {
              const result = response.result
              const userInfo = result.userInfo
              Vue.ls.set(ACCESS_TOKEN, result.token, expTime)
              Vue.ls.set(USER_NAME, userInfo.username, expTime)
              Vue.ls.set(USER_INFO, userInfo, expTime)
              commit('SET_TOKEN', result.token)
              commit('SET_INFO', userInfo)
              commit('SET_NAME', { username: userInfo.username, realname: userInfo.realname })
              commit('SET_AVATAR', userInfo.avatar)
              resolve(response)
            } else {
              reject(response)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 获取用户信息
    GetPermissionList({ commit }) {
      return new Promise((resolve, reject) => {
        let v_token = Vue.ls.get(ACCESS_TOKEN)
        let params = { token: v_token }
        queryPermissionsByUser(params)
          .then(response => {
            console.log(response)
            commit('SET_QYLX', response.result.qylx)
            store.state.adminlv = response.result.adminlv;
            console.log(store.state.adminlv);
            store.state.title = response.result.Hyc;
            const menuData = response.result.menu
            const authData = response.result.auth
            const allAuthData = response.result.allAuth
            //Vue.ls.set(USER_AUTH,authData);
            sessionStorage.setItem(USER_AUTH, JSON.stringify(authData))
            sessionStorage.setItem(SYS_BUTTON_AUTH, JSON.stringify(allAuthData))
            if (menuData && menuData.length > 0) {
              commit('SET_PERMISSIONLIST', menuData)
            } else {
              reject('getPermissionList: permissions must be a non-null array !')
            }
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 登出
    Logout({ commit, state }) {
      return new Promise(resolve => {
        let logoutToken = state.token
        commit('SET_TOKEN', '')
        commit('SET_PERMISSIONLIST', [])
        commit(CURRENT_ORG, null)
        Vue.ls.remove(CURRENT_ORG)
        Vue.ls.remove(ACCESS_TOKEN)
        commit(MULTI_ORG, false)
        Vue.ls.set(MULTI_ORG, false)
        logout(logoutToken)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
      })
    }
  }
}

export default user
