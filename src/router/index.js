import Vue from 'vue'
import Router from 'vue-router'

import login from '@/components/Login'

import { FirebaseAuth } from '@/library/database'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [{ path: '/', component: login }]
})

router.beforeEach((to, _from, next) => {
  let auth = FirebaseAuth

  if (auth.currentUser === null && to.path !== '/') {
    next({
      path: '/'
    })
  } else {
    next()
  }
})

export default router
