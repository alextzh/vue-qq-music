<template>
  <div class="music-hall">
    <banner :data="banners" :loop="true" :autoPlay="autoPlay"></banner>
  </div>
</template>

<script type="text/ecmascript-6">
  import Banner from 'base/banner/banner'
  import {getBanner} from 'api/music-hall'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        banners: [],
        autoPlay: 4000
      }
    },
    created() {
      this._getBanner()
    },
    methods: {
      _getBanner() {
        getBanner().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.banner)
            this.banners = res.data.banner
          }
        })
      }
    },
    components: {
      Banner
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
