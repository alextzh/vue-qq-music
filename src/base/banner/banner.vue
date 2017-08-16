<template>
  <div class="banner">
    <div class="banner-wrapper">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <swiper-slide v-for="(item, index) in data" :key="index">
          <img :src="item.picurl" class="index_img">
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination" ref="dots"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      },
      loop: {
        type: Boolean,
        default: false
      },
      autoPlay: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        notNextTick: true,
        swiperOption: {
          initialSlide: 2,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          loop: this.loop,
          loopAdditionalSlides: 1,
          centeredSlides: true,
          autoplay: this.autoPlay,
          speed: 1000,
          autoplayDisableOnInteraction: false,
          effect: 'coverflow',
          slidesPerView: 1,
          coverflow: {
            rotate: 30,
            stretch: 500,
            depth: 100,
            modifier: 1,
            slideShadows: false
          },
          onInit: function(swiper) {
            // swiper初始化
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .banner
    width: 100%
    .banner-wrapper
      width: 100%
      .index_img
        display block
        margin: 0 auto

</style>
