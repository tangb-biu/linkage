import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: r => require.ensure([], r(require('@/page/home.vue')))
    },
    {
      path: '/login',
      name: 'login',
      component: r => require.ensure([], r(require('@/page/login.vue')))
    }
  ]
})

