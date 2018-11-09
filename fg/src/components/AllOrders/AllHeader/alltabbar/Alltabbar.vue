<template>
  <div class="all-big-box">
    <div class="all-tab-bar">
      <ul>
        <li class="active">全部</li>
        <li>待付款</li>
        <li>待收货</li>
        <li>待评价</li>
        <li>退款/售后</li>
      </ul>
    </div>
  </div>

</template>


<script>

  export default  {

  }

</script>


<style scoped>
  .all-big-box {
    width: 100%;
    height: .5rem;
    background-color: #fff;
  }
  .all-tab-bar {
    height: .4rem;
    font-size: .12rem;
    color: #2d2b2b;
    border-bottom: .01rem solid #ccc;
  }

  .all-tab-bar li {
    width: 20%;
    height: .38rem;
    text-align: center;
    line-height: .4rem;
    float: left;
    border-bottom: .03rem solid transparent;
  }

  .all-tab-bar .active {
    border-bottom: .03rem solid #fac100;
  }


</style>
