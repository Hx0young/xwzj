import Vue from 'vue'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { ACCESS_TOKEN, CURRENT_ORG } from '@/store/mutation-types'
// import { generateIndexRouter } from '@/utils/util'

NProgress.configure({ showSpinner: false, color: '#ff0000' }) // NProgress Configuration

const whiteList = ['/404','/500','/index','/login', '/register', '/register-result', '/alteration'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  next()//TODO 先去掉权限校验
  /*// Vue.ls.remove(ACCESS_TOKEN)
  NProgress.start() // start progress bar
  console.log(to, from);
  if (whiteList.indexOf(to.path) !== -1) {
    // 在免登录白名单，直接进入
    next()
  }
  
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === '/login') {
      next()
      NProgress.done()
    } else {
      // const redirect = from.query.redirect;
      // alert(redirect)
      // if (redirect) {
      //   next({ path: redirect })
      // } else {
      //   next()
      // }
      next()
      NProgress.done()
      // if (store.getters.permissionList.length === 0) {
      //   store
      //     .dispatch('GetPermissionList')
      //     .then(res => {
      //       const menuData = res.result.menu
      //       if (menuData === null || menuData === '' || menuData === undefined) {
      //         return
      //       }
      //       let constRoutes = []
      //       constRoutes = generateIndexRouter(menuData)
      //       // 添加主界面路由
      //       store.dispatch('UpdateAppRouter', { constRoutes }).then(() => {
      //         // 根据roles权限生成可访问的路由表
      //         // 动态添加可访问路由表
      //         const redirect = decodeURIComponent(from.query.redirect || to.path)
      //         router.addRoutes(store.getters.addRouters)
      //         if (to.path === redirect) {
      //           // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
      //           next({ ...to, replace: true })
      //         } else {
      //           // 跳转到目的路由
      //           next({ path: redirect })
      //         }
      //       })
      //     })
      //     .catch(() => {
      //       store.dispatch('Logout').then(() => {
      //         next({ path: '/user/login', query: { redirect: to.fullPath } })
      //       })
      //     })
      // } else {
      //   next()
      // }
    }
  } else {
      next({ path: '/login', query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
  }*/
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
