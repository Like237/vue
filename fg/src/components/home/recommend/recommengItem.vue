<template>
  <div class="recommeng-item">
    <img :src="comUrl" alt="">
    <p class="pingfang title">{{title}}</p>
    <div class="payment-box">
      <p class="price"><span class="pingfang">￥</span>{{price}}</p>
      <span class="payment pingfang">{{payment}}人付款</span>
    </div>
  </div>
</template>


<script>

  export default {
    props : ['comUrl','title','price','payment']
  }

</script>


<style scoped>
  .recommeng-item {
    width: 47%;
    margin-right: .1rem;
    background-color: #fff;
    float: left;
    margin-bottom: .1rem;
  }

  .recommeng-item img {
    width: 100%;
  }

  .recommeng-item .title {
    margin: .1rem;
    font-size: .145rem;
    color: #0c0b0b;
  }

  .recommeng-item .price {
    font-family: 'DINCond-Black';
    font-size: .185rem;
    color: #de0101;
    margin-left: .1rem;
  }
  .payment-box {
    display: flex;
    margin-bottom: .1rem;
    position: relative;
  }

  .recommeng-item .price span {
    font-size: .145rem;
    color: #de0101;
  }

  .recommeng-item .payment {
    font-size: .11rem;
    color: #615b5b;
    position: absolute;
    right: .1rem;
    top: .05rem;
  }

</style>
