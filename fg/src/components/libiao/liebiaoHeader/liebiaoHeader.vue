<template>
  <div>
    <div class="head">
  <router-link to="/search"><img class="img" src="./../../../assets/liebiao/baisefanhui@2x.png" alt=""></router-link>
      <div class="search">
        <input type="text" placeholder="吊灯">
        <img src="./../../../assets/liebiao/tubiao@2x.png" alt="">
      </div>
      <div class="right">
        <img src="./../../../assets/liebiao/dian@2x.png" alt="">
      </div>
    </div>
    <div class="tab-bar-2">
      <ul>
        <li>综合</li>
        <li>销量</li>
        <li>
          价格
          <img class="tb" src="../../../assets/babyimg/jiageshangxiaicon@2x.png" alt="">
        </li>
        <li>品牌</li>
        <li>筛选</li>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  .head{
    width: 100%;
    font-size: .14rem;
    height: .46rem;
    background-color: #fac100;
    overflow: hidden;
    display: flex;
  }
  .head  .img {
    width: .16rem;
    height: .24rem;
    margin-top: .1rem;
    margin-left: .15rem;
  }


  .search {
    position: relative;
    font-size: .13rem;
  }
  .search input{
    width: 2.8rem;
    height: .3rem;
    border-radius: .5rem;
    font-size: .14rem;
    color: #333333;
    background-color: #fff;
    margin-left: .15rem;
    border: none;
    outline: none;
    text-indent: .2rem;
    margin-top: .08rem;
  }

  .search img{
    width: .2rem;
    height: .18rem;
    position: absolute;
    right: .1rem;
    top: .13rem;
  }

  .tab-bar-2{
    width: 100%;
    height: .5rem;
    background-color: #fff;
  }


  .tab-bar-2  ul li{
    width: 20%;
    font-size: .14rem;
    line-height: .4rem;
    text-align: center;
    float: left;
  }

  .tb{
    width: .06rem;
    position: absolute;
    top: .16rem;
    right: .16rem;
    height: .1rem;
  }

  .tab-bar-2 ul li:nth-of-type(1){
    color: #ff9000;
  }

  .tab-bar-2 ul li:nth-of-type(3){
    position: relative;
  }

  .right img {
    width: .275rem;
    height: .04rem;
    margin-top: .2rem;
    margin-left: .1rem;
  }

</style>
