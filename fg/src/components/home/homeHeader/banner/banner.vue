<template>
  <!--swiper 轮播-->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="./../../../../assets/home/homeheader/banner/lunbodatu@2x.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./../../../../assets/home/homeheader/banner/lunbotupian2@2x.png" alt="">
      </div>
      <div class="swiper-slide">
        <img src="./../../../../assets/home/homeheader/banner/datupian@2x.png" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination">

    </div>
  </div>


</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';

  export default {
    mounted() {
      new Swiper('.swiper-container', {
        autoplay: {
          delay: 1000,  //5秒播放时长
          disableOnInteraction: false,
        },
        loop: true,
        // 出现小圆圈
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletElement: 'li'
        }
      })
    }
  }

</script>

<style scoped>

  .swiper-container {
    width: 100%;
    height: 2.095rem;
    margin-top: -.254rem;
  }

  .swiper-container img {
    width: 100%;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -.1rem;
  }




</style>
