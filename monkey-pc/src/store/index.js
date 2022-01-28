import Vue from 'vue'
import Vuex from 'vuex'

// import app from './modules/app'
import user from './modules/user'
// import org from './modules/org'
// import permission from './modules/permission'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // app,
    user,
    // org,
    // permission
  },
  state: {
    title: '',
  },
  mutations: {},
  actions: {},
  getters
})
