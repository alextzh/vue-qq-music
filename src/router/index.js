import Vue from 'vue'
import Router from 'vue-router'
import MusicHall from 'components/index/music-hall'
import Profile from 'components/profile/profile'
import Download from 'components/download/download'
import Musica from 'components/musica/musica'
import Vip from 'components/vip/vip'
import SingerList from 'components/portal/singer-list/singer-list'
import AlbumLib from 'components/portal/album-lib/album-lib'
import TopList from 'components/portal/top-list/top-list'
import Playlist from 'components/portal/playlist/playlist'
import Radio from 'components/portal/radio/radio'
import MvLib from 'components/portal/mv-lib/mv-lib'
import AlbumMall from 'components/portal/album-mall/album-mall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MusicHall
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/download',
      component: Download
    },
    {
      path: '/musica',
      component: Musica
    },
    {
      path: '/vip',
      component: Vip
    },
    {
      path: '/portal/singer-list',
      component: SingerList
    },
    {
      path: '/portal/album-lib',
      component: AlbumLib
    },
    {
      path: '/portal/top-list',
      component: TopList
    },
    {
      path: '/portal/playlist',
      component: Playlist
    },
    {
      path: '/portal/radio',
      component: Radio
    },
    {
      path: '/portal/mv-lib',
      component: MvLib
    },
    {
      path: '/portal/album-mall',
      component: AlbumMall
    }
  ]
})
