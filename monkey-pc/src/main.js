// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import './assets/css/global.css';
import './assets/css/global.less';
import 'element-ui/lib/theme-chalk/index.css';
import { VueAxios } from '@/utils/request'
import Storage from 'vue-ls'
import store from './store/'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import config from '@/defaultSettings'
import '@/permission' // permission control
import moment from 'moment'//导入moment文件 
//富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import VCharts from 'v-charts'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.prototype.$moment = moment;//全局挂载moment
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(VueQuillEditor);
Vue.use(VueAxios, router);
Vue.use(Storage, config.storageOptions);
Vue.config.productionTip = false;
Vue.use(VCharts)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  mounted() {
    store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN))
  },
  components: { App },
  template: '<App/>'
})
