import Vue from 'vue'
import Router from 'vue-router'
import MusicHall from 'components/index/music-hall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MusicHall
    }
  ]
})
