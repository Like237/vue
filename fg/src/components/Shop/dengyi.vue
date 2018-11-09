<template>
  <div>
    <Tou></Tou>
    <!--<div class="video-box">-->
      <video src="../../assets/video/shipin.mp4" controls style="width: 100% "></video>
    <!--</div>-->
    <!--物品展示开始-->
    <div class="content">
      <img class="discount" src="../../assets/shopimg/xiangingye1@2x.png" alt="">
      <img src="../../assets/shopimg/xiqngqingye2x.png" alt="">
      <img src="../../assets/shopimg/xiangingye3@2x.png" alt="">
    </div>
    <!--物品展示结束-->

    <!--新品上市开始-->
    <div class="new">
      <h1>新品上市</h1>
      <Rec comUrl="./static/shopimg/xiangqingye2@2x.png" title="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." price="299.00"></Rec>
      <Rec comUrl="./static/shopimg/xiangqingye1@2x.png" title="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." price="299.00"></Rec>
    </div>
  </div>
</template>

<script>
  import Rec from './recommentitem.vue'
  import Tou from './shop.vue'

  export default{
    components:{
      Rec,
      Tou
    }
  }

</script>

<style scoped>
  .video-box{
    /*width: 3.75rem;*/
    /*height: 3rem;*/
    /*overflow: hidden;*/

    width:100%;background: #000;
    position:relative;
    padding-bottom:56.25%;    /*需要用padding来维持16:9比例,也就是9除以16*/

  }
  /*.video-box video{*/
    /*position: absolute;*/
    /*top:0;*/
    /*left: 0;*/
    /*width: 100%;*/
    /*height: 100%*/
  /*}*/

  .content{
    width: 100%;
  }

  .content img{
    width:100% ;
  }

  /*新品上市开始*/
  .new{
    width: 100%;
    margin-left: .05rem;
    /*padding: 0 .1rem 0 .1rem;*/
    /*border: 1px solid #cccccc;*/
  }
  .new h1{
    font-size: .14rem;
  }

  .new img{
    width: 100%;
  }
</style>
