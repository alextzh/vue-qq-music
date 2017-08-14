<template>
  <div class="my-header">
    <div class="header-wrapper">
      <h1 class="music-title">
        <a href="https://y.qq.com">
          <img src="./logo.png" alt="QQ音乐(vue版) " class="music-logo">
        </a>
      </h1>
      <ul class="top-nav" ref="topNav">
        <router-link class="top-nav-item" :class="{'router-link-active': isActive && index === 0}" v-for="(topNav, index) in topNavs" :key="index" tag="li" :to="topNav.link" exact>
          <span class="top-nav-link">{{topNav.name}}</span>
        </router-link>
      </ul>
      <ul class="top-subnav" :class="showFlag">
        <router-link class="top-subnav-item" v-for="(topSubNav, index) in topSubNavs" :key="index" tag="li" :to="topSubNav.link" exact>
          <span class="top-subnav-link">{{topSubNav.name}}</span>
        </router-link>
      </ul>
      <div class="search-wrapper">
        <div class="search">
          <input class="search-input" type="text" placeholder="中国新歌声">
          <a class="search-btn" href="javascript:void(0);"><i class=""></i></a>
        </div>
        <div class="search-result"></div>
      </div>
      <div class="header-opt">
        <a class="logined" href="javascript:void(0);" style="display: none"></a>
        <a class="login-btn" href="javascript:void(0);">登陆</a>
        <a class="btn login-green" href="javascript:void(0);">开通绿钻豪华版</a>
        <a class="btn login-vip" href="javascript:void(0);">开通付费包</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        topNavs: [
          {name: '音乐馆', link: '/'},
          {name: '我的音乐', link: '/profile'},
          {name: '客户端', link: '/download'},
          {name: '音乐号', link: '/musica'},
          {name: 'VIP', link: '/vip'}
        ],
        topSubNavs: [
          {name: '首页', link: '/'},
          {name: '歌手', link: '/portal/singer-list'},
          {name: '专辑', link: '/portal/album-lib'},
          {name: '排行榜', link: '/portal/top-list'},
          {name: '分类歌单', link: '/portal/playlist'},
          {name: '电台', link: '/portal/radio'},
          {name: 'MV', link: '/portal/mv-lib'},
          {name: '数字专辑', link: '/portal/album-mall'}
        ]
      }
    },
    computed: {
      showFlag() {
        return (this.$route.path === '/' || this.$route.path.indexOf('portal') > 0) ? 'show' : 'hide'
      },
      isActive() {
        if (this.$route.path.indexOf('portal') > 0) {
          return this.$route.path.indexOf('portal') > 0 ? 'true' : 'false'
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .my-header
    position: relative
    background-color: $color-background
    z-index 4
    .header-wrapper
      position: relative
      max-width: 1200px
      margin: 0 auto
      padding-top: 90px
      .music-title
        position: absolute
        top: 22px
        left: 0
        .music-logo
          width: 179px
          height: 46px
      .top-nav
        position: absolute
        left: 198px
        top: 0
        .top-nav-item
          float: left
          margin-right: -5px
          .top-nav-link
            display block
            padding: 0 20px
            height: 90px
            line-height: 90px
            text-align: center
            font-size: $font-size-large
            cursor pointer
            &:hover
              color: $color-text-h
          &.router-link-active
            .top-nav-link
              background-color: $color-text-h
              color: $color-background
      .top-subnav
        height: 50px
        line-height: 50px
        padding-left: 230px
        border-top: 1px solid #f2f2f2
        .top-subnav-item
          float: left
          font-size: $font-size-medium
          margin-right: 47px
          color: #c1c1c1
          .top-subnav-link
            display block
            &:hover
              color: $color-text-h
          &.router-link-active
            .top-subnav-link
              color: $color-text-h
      .search-wrapper
        position: absolute
        top: 0
        right: 300px
        .search
          border: 1px solid #c9c9c9
          border-radius: 4px
          height: 36px
          line-height 36px
          margin-top: 26px
          padding: 0 33px 0 10px
          .search-input
            width: 174px
            height: 36px
            font-size: $font-size-medium
            border: 0 none
            outline none
      .header-opt
        position: absolute
        top: 0
        right: 0
        height: 90px
        line-height 90px
        .login-btn
          position: relative
          float: left
          width: 38px
          margin-right: 10px
          text-align: center
          font-size: $font-size-medium-x
        .btn
          display: inline-block
          padding: 0 10px
          margin-left: 10px
          margin-top: 24px
          height: 38px
          line-height: 38px
          border: 1px solid #c9c9c9
          border-radius: 4px
          font-size: $font-size-medium
          white-space: nowrap
          box-sizing: border-box
          overflow: hidden
          &.login-green
            background $color-text-h
            color: $color-background
            border-color: $color-text-h
          &.login-green:hover,&.login-vip:hover
            background $color-background
            color: $color-text-h
            border-color: $color-text-h
  .show
    display: block!important
  .hide
    display: none!important
</style>
