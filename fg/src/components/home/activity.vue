<template>
  <div class="activity">
    <img src="./../../assets/home/activity/pinpaihuodongtupian@2x.png" alt="">
    <div class="mask pingfang">
      品牌活动
    </div>
  </div>
</template>

<script>


  export default {

  }

</script>


<style scoped>

  .activity {
    width: 100%;
    height: 1.75rem;
    position: relative;
    background-color: #fff;
    overflow: hidden;
  }
  .activity img {
    width: 3.54rem;
    height: 1.65rem;
    margin:.1rem .1rem 0 .1rem;
  }
  .activity .mask {
    position: absolute;
    width: 1.815rem;
    height: .445rem;
    font-size: .185rem;
    line-height: .445rem;
    color: #fff;
    text-align: center;
    background-color: rgba(0,0,0,.4);
    z-index: 2;
    top: 50%;
    left: 50%;
    margin-left: -.9rem;
    margin-top: -.3rem;
  }


</style>
