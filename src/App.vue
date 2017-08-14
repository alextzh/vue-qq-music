<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MyHeader from 'base/header/my-header'
  import MyFooter from 'base/footer/my-footer'

  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
