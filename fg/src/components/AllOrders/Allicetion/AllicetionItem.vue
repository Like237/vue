<template>
  <div class="Allicetion-item">
    <div class="titleBox">
      <div class="title-left">
        <p>{{TopText}}</p>
        <img src="./../../../assets/AllOrders/heisefanhui@2x.png" alt="">
      </div>
      <p class="fahuo">{{TopTitle}}</p>
    </div>
    <div class="DETAILS">
      <div class="DETAILSItem">
        <img :src="MiddleUrl" alt="">
        <div class="title-middle">
          <p>{{MiddleText}}</p>
          <p>{{MiddleTitle}}</p>
        </div>
        <div class="pic-right">
          <p>￥{{MiddlePrice}}</p>
          <p>×{{nums}}</p>
        </div>
      </div>
    </div>
    <div class="altogether">
      <p>共1件商品 合计: {{total}}</p>
    </div>

    <div class="shouhuo">
      <slot name="shouhuo"></slot>
    </div>

  </div>
</template>


<script>

  export default {
    props : ['TopText','TopTitle','MiddleUrl','MiddleText','MiddleTitle','MiddlePrice','nums','total']
  }

</script>

<style scoped>
  .Allicetion-item{
    background-color: #fff;
    margin-top: .1rem;
  }
  .titleBox {
    display: flex;
    justify-content: space-between;
  }

  .title-left {
    display: flex;
    font-size: .12rem;
    color: #2d2b2b;
    margin: .1rem;
  }

  .title-left img {
    width: .06rem;
    height: .115rem;
    margin-left: .1rem;
    margin-top: .025rem;
  }

  .titleBox .fahuo {
    font-size: .12rem;
    color: #fac100;
    margin: .1rem;
  }

  .DETAILS {
    width: 100%;
    height: .915rem;
    background-color: #eee;
    overflow: hidden;
    font-size: .13rem;

  }

  .DETAILS .DETAILSItem {
    margin: .1rem;
    display: flex;
    position: relative;
  }

  .DETAILS .DETAILSItem > img {
    width: .73rem;
    height: .72rem;
  }

  .DETAILS .DETAILSItem .title-middle {
    margin-left: .1rem;
    width: 1.4rem;
    height: .72rem;
    position: relative;
  }

  .DETAILS .DETAILSItem .title-middle p:nth-of-type(1) {
    width: 100%;
    font-size: .14rem;
    color: #333333;
    margin-top: -.03rem;
  }

  .DETAILS .DETAILSItem .title-middle p:nth-of-type(2) {
    position: absolute;
    bottom: 0rem;
    left: 0rem;
    font-size: .12rem;
    color: #787373;
  }

  .DETAILS .DETAILSItem .pic-right {
    position: absolute;
    right: 0;
    top: 0;
  }

  .DETAILS .DETAILSItem .pic-right p {
    font-size: .12rem;
    color: #090808;
  }

  .DETAILS .DETAILSItem .pic-right p:nth-of-type(2) {
    float: right;
  }

  .altogether {
    margin-top: .2rem;
    padding-bottom: .1rem;
    font-size: .11rem;
    color: #0e0d0d;
    display: flex;
    justify-content: flex-end;
    border-bottom: .01rem solid #f0ebeb;
  }

  .altogether p {
    margin-right: .1rem;
  }

  .shouhuo {
    display: flex;
    justify-content: flex-end;
    font-size: .12rem;
    margin: .1rem;
    padding-bottom: .1rem;
  }

  .shouhuo .yangshi {
    width: .625rem;
    height: .205rem;
    border-radius: .105rem;
    line-height: .205rem;
    font-size: .12rem;
    text-align: center;
  }

  .shouhuo .shou-hui {
    color: #3f3d3d;
    background-color: #eee;
    margin-left: .155rem;
  }

  .shouhuo .shou-red {
    color: #fffefe;
    background-color: #d92929;
    margin-left: .155rem;
  }

</style>
