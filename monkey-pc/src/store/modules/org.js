import Vue from 'vue'
import { getOrgList, getChoiceOrg, postOrgData, rePostOrgData } from '@/api/api'
import { CURRENT_ORG, ACCESS_TOKEN, MULTI_ORG } from '@/store/mutation-types'
import { resolve } from 'any-promise'

const expTime = 7 * 24 * 60 * 60 * 1000
const org = {
  state: {
    currentOrg: null,
    multiOrg: false
  },

  mutations: {
    CURRENT_ORG: (state, org) => {
      state.currentOrg = org
    },
    MULTI_ORG: (state, multiOrg) => {
      state.multiOrg = multiOrg
    }
  },
  actions: {
    goBackSelectOrg({ commit }) {
      return new Promise(resolve => {
        Vue.ls.remove(CURRENT_ORG)
        commit(CURRENT_ORG, null)
        commit(MULTI_ORG, false)
        Vue.ls.set(MULTI_ORG, false)
        resolve()
      })
    },
    postOrgData({ commit }, params) {
      return new Promise((resolve, reject) => {
        postOrgData(params).then(({ result, code }) => {
          if (code === 200) {
            Vue.ls.set(CURRENT_ORG, result, expTime)
            commit(CURRENT_ORG, result)
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    rePostOrgData({ commit }, params) {
      return new Promise((resolve, reject) => {
        rePostOrgData(params).then(({ result, code }) => {
          if (code === 200) {
            Vue.ls.set(CURRENT_ORG, result, expTime)
            commit(CURRENT_ORG, result)
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    GetChoiceOrg({ commit }, org) {
      return new Promise((resolve, reject) => {
        getChoiceOrg({
          orgId: org.id
        }).then(({ code, result }) => {
          if (code === 200) {
            commit('SET_TOKEN', result.token)
            Vue.ls.set(ACCESS_TOKEN, result.token, expTime)
            resolve()
          } else {
            reject()
          }
        })
      })
    },
    GetOrgList({ commit, dispatch }) {
      return new Promise((resolve, reject) => {
        getOrgList().then(({ code, result }) => {
          if (code == '200') {
            if (result) {
              if (result.length === 0) {
                Vue.ls.set(CURRENT_ORG, { flagExamine: -1 }, expTime)
                commit(CURRENT_ORG, { flagExamine: -1 })
                commit(MULTI_ORG, false)
                Vue.ls.set(MULTI_ORG, false)
              } else if (result.length === 1) {
                Vue.ls.set(CURRENT_ORG, result[0], expTime)
                commit(CURRENT_ORG, result[0])
                commit(MULTI_ORG, false)
                Vue.ls.set(MULTI_ORG, false)
              } else {
                Vue.ls.remove(CURRENT_ORG)
                commit(CURRENT_ORG, null)
                commit(MULTI_ORG, true)
                Vue.ls.set(MULTI_ORG, true)
              }
              resolve(result)
            } else {
              reject()
            }
          }
        })
      })
    }
  }
}

export default org
