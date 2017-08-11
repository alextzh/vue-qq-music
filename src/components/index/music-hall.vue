<template>
  <div class="music-hall">
    <div class="nav-wrapper">
      <ul>
        <li v-for="nav in navs">
          <router-link to="/" class="mine" tag="a"></router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        navs: [
          {name: '首页'},
          {name: '歌手'},
          {name: '专辑'},
          {name: '排行榜'},
          {name: '分类歌单'},
          {name: '电台'},
          {name: 'MV'},
          {name: '数字专辑'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
