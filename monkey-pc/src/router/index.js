import Vue from 'vue'
import Router from 'vue-router'
import UserLayout from '@/layouts/UserLayout'

import GlobalLayout from '@/layouts/GlobalLayout'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index',
      component: GlobalLayout,
      hidden: true,
      children: [{
          path: '/index',
          name: 'index',
          component: () => import('@/views/Index')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('@/views/Login')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Register')
        },
        {
          path: '/question-bank',
          name: 'questionBank',
          component: () => import('@/views/page/index/QuestionBank')
        },
        {
          path: '/paper-bank',
          name: 'paperBank',
          component: () => import('@/views/page/index/PaperBank')
        },
        {
          path: '/paid-paper-bank',
          name: 'paidPaperBank',
          component: () => import('@/views/page/index/PaidPaperBank')
        }
      ]
    },
    {
      path: '/user',
      component: UserLayout,
      redirect: '/user/home',
      hidden: true,
      children: [{
          path: '/user/center',
          name: 'userCenter',
          component: () => import('@/views/page/user/userCenter/index')
        },
        {
          path: '/user/favorite',
          name: 'userFavorite',
          component: () => import('@/views/page/user/userFavorite')
        },
        {
          path: '/user/note',
          name: 'userNote',
          component: () => import('@/views/page/user/userNote')
        },
        {
          path: '/user/space',
          name: 'userSpace',
          component: () => import('@/views/page/user/userSpace')
        },
        {
          path: '/user/home',
          name: 'userHome',
          component: () => import('@/views/page/user/home')
        },
        {
          path: '/user/question-brush',
          name: 'userQuestionBrush',
          component: () => import('@/views/page/user/questionBrush')
        },
        {
          path: '/user/public-question-bank',
          name: 'userPublicQuestionBank',
          component: () => import('@/views/page/user/publicQuestionBank')
        }
      ]
    },
    {
      path: '/',
      component: UserLayout,
      hidden: true,
      children: [{
          path: '/question-brush',
          name: 'userQuestionBrush',
          component: () => import('@/views/page/user/questionBrush')
        },
        {
          path: '/public-question-bank',
          name: 'userPublicQuestionBank',
          component: () => import('@/views/page/user/publicQuestionBank')
        },
        {
          path: '/topic-upload',
          name: 'topicUpload',
          component: () => import('@/views/page/topic/topicUpload')
        },
        {
          path: '/paper-upload',
          name: 'paperUpload',
          component: () => import('@/views/page/paper/paperUpload')
        },
        {
          path: '/model-center',
          name: 'modelCenter',
          component: () => import('@/views/page/model/modelCenter')
        }]
    },
    {
      path: '/404',
      meta: {
        title: '找不到页面'
      },
      component: () => import('@/views/exception/404')
    },
    {
      path: '*',
      redirect: '/404',
    }
  ]
})
