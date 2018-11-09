<template>
  <div class="all-header">
    <img @click="goBack" src="./../../../assets/AllOrders/baisefanhui@2x.png" alt="">
    订单管理
  </div>
</template>

<script>

  export default {
    methods : {
      goBack :function () {
        window.history.back();
      }
    }
  }

</script>

<style scoped>
  .all-header {
    width: 100%;
    height: .43rem;
    background-color: #fac100;
    line-height: .43rem;
    /*display: flex;*/
    font-size: .16rem;
    color: #fff;
    text-align: center;
  }

  .all-header img {
    width: .11rem;
    height: .21rem;
    float: left;
    margin-left: .1rem;
    margin-top: .115rem;
  }


</style>
