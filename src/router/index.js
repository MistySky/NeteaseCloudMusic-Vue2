import Vue from 'vue'
import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('../pages/home')), 'home')
const playlist = r => require.ensure([], () => r(require('../pages/playlist'), 'playlist'))
const play = r => require.ensure([], () => r(require('../pages/play'), 'play'))

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/playlist/:id',
      component: playlist,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/play/:id',
      component: play,
      meta: {
        keepAlive: false
      }
    }
  ]
})
