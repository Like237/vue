<template>
  <div class="afterwards-box">
    <AfterwardsItem URL="./static/mine/daifukuan@2x.png" text="待付款"></AfterwardsItem>
    <AfterwardsItem URL="./static/mine/shouhuo@2x.png" text="待收货"></AfterwardsItem>
    <AfterwardsItem URL="./static/mine/shouhou@2x.png" text="售后/退款"></AfterwardsItem>
  </div>
</template>


<script>
  import AfterwardsItem from './afterwardsItem.vue'

  export default {
    components : {
      AfterwardsItem
    }
  }

</script>

<style scoped>
  .afterwards-box{
    width: 3.55rem;
    height: .705rem;
    position: absolute;
    background-color: #fff;
    border-radius: .15rem;
    margin: 0 .1rem;
    margin-top: -.35rem;
    z-index: 999;
  }


</style>
