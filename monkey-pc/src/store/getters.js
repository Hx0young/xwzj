import Vue from 'vue'
import { USER_INFO, CURRENT_ORG, MULTI_ORG } from '@/store/mutation-types'
const getters = {
  // device: state => state.app.device,
  // theme: state => state.app.theme,
  // color: state => state.app.color,
  token: state => state.user.token,
  // qylx: state => {
  //   console.log(state)
  //     return state.user.qylx;
  //   },
  // avatar: state => {
  //   state.user.avatar = Vue.ls.get(USER_INFO).avatar
  //   return state.user.avatar
  // },
  username: state => state.user.username || Vue.ls.get(USER_INFO).username || '',
  nickname: state => {
    state.user.realname = Vue.ls.get(USER_INFO).realname
    return state.user.realname
  },
  welcome: state => state.user.welcome,
  permissionList: state => state.user.permissionList,
  userInfo: state => {
    state.user.info = Vue.ls.get(USER_INFO)
    return state.user.info
  },
  // addRouters: state => state.permission.addRouters,
  // currentOrg: state => state.org.currentOrg || Vue.ls.get(CURRENT_ORG) || null,
  // multiOrg: state => state.org.multiOrg || Vue.ls.get(MULTI_ORG) || false
}

export default getters
