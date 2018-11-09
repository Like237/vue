<template>
  <div class="shop">
    <!--头部开始-->
    <header>
      <div class="bgc">

        <div class="return">
          <router-link to="/home"><img src="./../../assets/AllOrders/fanhui@2x.png" alt="">
          </router-link>
        </div>

        <div class="mask"></div>
        <img src="../../assets/shopimg/beijing@2x.png" alt="">
      </div>
      <img class="logo" src="../../assets/shopimg/yidengkongjiantouxiang@2x.png" alt="">
      <h1 class="shop-name">艺灯空间旗舰店</h1>
      <div class="follow">
        <div class="follow-left"><p>关注</p></div>
        <div class="follow-right">
          <p class="p-1">10万</p>
          <p>粉丝</p>
        </div>
      </div>
    </header>
    <!--头部结束-->

    <!--tabbar开始-->
    <div class="tab-bar">
      <router-link to="/search-one">
        <div class="search">
          <img src="../../assets/shopimg/sousuotubiao@2x.png" alt="">
          <p>搜索</p>
        </div>
      </router-link>
      <ul>
        <router-link class="one" to="/dengyi">
          <li :class="{active : flag}" @click="fn">首页</li>
        </router-link>
        <router-link to="/baby">
          <li :class="{active : !flag}" @click="fn">宝贝</li>
        </router-link>
        <li>新品</li>
        <li>活动</li>
      </ul>
    </div>
    <!--tabbar结束-->
    <router-view></router-view>

  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        hash: '',
        flag: true,
      }
    },
    components: {},
    methods: {
      fn: function () {
        this.flag = !this.flag;
      }
    }

  }
</script>

<style scoped>

  html {
    font-family: "苹方 常规";
  }

  .return {
    position: absolute;
    top: .1rem;
    left: .1rem;
    z-index: 999;
  }

  .return img {
    width: .11rem;
    height: .21rem;
  }

  .shop {
    font-size: 13px;
  }

  .bgc {
    width: 100%;
    height: 1.75rem;
    overflow: hidden;
    position: relative;
  }

  .mask {
    width: 100%;
    background-color: #000;
    z-index: 2;
    opacity: 0.5;
    filter: alpha(opacity=30);
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .bgc > img {
    width: 3.75rem;
  }

  .logo {
    width: .66rem;
    position: absolute;
    top: 1.175rem;
    left: .1rem;
    z-index: 3;
  }

  .shop-name {
    font-size: .14rem;
    color: white;
    position: absolute;
    top: 1.47rem;
    left: .85rem;
    z-index: 3;
    font-weight: 100;
  }

  .follow {
    width: 1.27rem;
    height: .4rem;
    position: absolute;
    right: 0;
    top: 1.42rem;
    z-index: 3;
    display: flex;
  }

  .follow-left, .follow-right {
    width: 50%;
    text-align: center;
    padding: 0 .15rem 0 .15rem;
    flex: 1;
    /*font-weight: 600;*/
    color: white;
  }

  .follow-left {
    line-height: .4rem;
    background-color: #ff9000;
  }

  .follow-left p {
    font-size: .14rem;
  }

  .follow-right {
    background-color: #fac100;
  }

  .follow-right p {
    font-size: .12rem;
  }

  .follow-right .p-1 {
    margin-top: .025rem;
  }

  /*头部结束*/

  /*tabBar开始*/
  .tab-bar {
    width: 100%;
    height: .435rem;
    background-color: #f9f6f6;
    margin-top: .18rem;
    font-size: 13px;
    overflow: hidden;
  }

  .tab-bar .search {
    width: .66rem;
    height: .265rem;
    margin-top: .08rem;
    margin-left: .05rem;
    border-radius: .23rem;
    background-color: #fff;
    float: left;
  }

  .tab-bar .search img {
    width: .165rem;
    margin-top: .07rem;
    margin-left: .06rem;
    float: left;
  }

  .tab-bar .search p {
    display: inline-block;
    font-size: .14rem;
    color: #817878;
    margin-top: .05rem;
    text-indent: .05rem;
  }

  .tab-bar ul {
    float: left;
    margin-left: .2rem;
  }

  .tab-bar ul li {
    width: .45rem;
    height: .42rem;
    padding: 0 .1rem 0 .1rem;
    font-size: .14rem;
    line-height: .435rem;
    text-align: center;
    float: left;
    color: #2b2b2b;
  }

  .tab-bar .active {
    color: #ff9000;
    border-bottom: 3px solid #ff9000;
  }


</style>
