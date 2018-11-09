<template>
  <div class="mine-header">

      <div class="back">
        <router-link to="/home">
        <img src="./../../../assets/AllOrders/fanhui@2x.png" alt="">
        </router-link>
      </div>

    <img src="./../../../assets/mine/beijing@2x.png" alt="">
    <div class="pic">
      <img src="./../../../assets/mine/weidenglutouxiang@2x.png" alt="">
        <div class="usename" @click="fn">
          {{login}}
        </div>
    </div>
    <div class="title">
      <div class="coller">
        收藏宝贝
        <p>0</p>
      </div>
      <div class="coller">
        收藏店铺
        <p>0</p>
      </div>
      <div class="coller">
        我的足迹
        <p>0</p>
      </div>

    </div>

  </div>
</template>

<script>

  export default {
    data : function () {
      return {
        login : '登录/注册'
      }
    },
    methods: {
      fn : function () {
        if(this.login === '登录/注册'){
          window.location.hash = '/login'
        }
      }
    },
    created : function () {
      if(document.cookie.split('=')[1] === ''){
        this.login = '登录/注册'
      }else {
        this.login = document.cookie.split('=')[1];
      }
      this.$emit('getName',this.login);
    }
  }

</script>

<style scoped>

  .mine-header {
    position: relative;
    width: 100%;
    height: 2.43rem;
    overflow: hidden;
  }

  .mine-header > img {
    width: 130%;
    transform: translateX(-1rem) translateY(-.1rem);
    /*opacity: 1.4;*/
  }

  .mine-header .pic {
    position: absolute;
    top: 0rem;
    left: 0rem;
    z-index: 99;
    display: flex;
  }

  .mine-header .pic img {
    width: .775rem;
    height: .775rem;
    margin-top: .55rem;
    margin-left: .255rem;
  }

  .mine-header .pic .usename {
    font-size: .185rem;
    color: #fefafc;
    margin-top: .84rem;
    margin-left: .23rem;
  }

  .mine-header .title {
    position: absolute;
    width: 100%;
    font-size: .16rem;
    top: 1.45rem;
    left: 0;
    display: flex;
    justify-content: space-between;
  }

  .mine-header .coller {
    text-align: center;
    font-size: .16rem;
    color: #fff;
  }

  .mine-header .coller:nth-of-type(1) {
    margin-left: .1rem;
  }

  .mine-header .coller:nth-of-type(3) {
    margin-right: .1rem;
  }

  .mine-header .back {
    position: absolute;
    top: -.75rem;
    left: .1rem;
    z-index: 999;
    width: .1rem;
    height: .18rem;
  }

  .mine-header .back img {
    width: 100%;
    z-index: 999;
  }

</style>
