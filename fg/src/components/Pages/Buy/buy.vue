<template>
  <div class="buy" v-show="flag">
    <div class="no" @click="no()">×</div>
    <!--上-->
    <div class="word">
      <div class="tuceng"><img src="./../../../../static/images/buy/tuceng3@2x.png" alt=""></div>
      <div class="price">
        <div class="top">
          <span>￥299</span>
          <p>北欧客厅灯具后现代</p>
        </div>
        <div class="bottom">
          <span>库存1430件</span>
          <p>请选择：颜色分类</p>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <p class="color">颜色分类</p>
    <!--中-->
    <ul class="assortment">
      <li class="right">6头大号白罩白灯体</li>
      <li>6头大号黑罩金灯体</li>
      <li class="right">8头大号白罩黑灯体</li>
      <li>6头大号黑罩金灯体</li>
    </ul>
    <div class="clear"></div>
    <!--下-->
    <div class="numbox">
      <span>购买数量</span>
      <div>
        <span class="jian" @click="jian()">-</span>
        <span class="num">{{num}}</span>
        <span class="jia" @click="jia()">+</span>
      </div>
    </div>
    <!--确定-->
    <button>确定</button>
  </div>
</template>

<script>
  export default {
    name: "",
    data: function () {
      return {
        flag: true,
        num: 1
      }
    },
    methods: {
      no: function () {
        this.flag = false;
        this.$emit('getNums',this.flag)
      },
      jian: function () {
        this.num--;
        this.num = this.num  < 2 ? 1 : this.num ;
      },
      jia: function () {
        ++this.num;
      }
    }
  }
</script>

<style scoped>
  .clear {
    clear: both;
  }

  .buy {
    width: 3.75rem;
    padding: .2rem .1rem .1rem .1rem;
    background: #FFFFFF;
    border-radius: .25rem .25rem 0 0;
    margin-bottom: 0;
    box-sizing: border-box;
    z-index: 999;
  }

  .buy .tuceng {
    width: 1.575rem;
    height: 1.575rem;
    border-radius: .3rem;
    overflow: hidden;
    float: left;
  }

  .buy .price {
    float: left;
    margin-left: .1rem;
    padding-top: .1rem;
    box-sizing: border-box;
  }

  .buy .price .top {
    right: .1rem;
    width: 1.575rem;
  }

  .buy .price .top span {
    font-size: .255rem;
    color: #ce0202;
  }

  .buy .price .top p {
    margin-top: .1rem;
    font-size: .16rem;
    color: #131111;
  }

  .buy .price .bottom {
    margin-top: .2rem;
    font-size: .16rem;
    color: #726c6c;
  }

  .buy .price .bottom p {
    margin-top: .1rem;
  }

  .color {
    color: #131111;
    font-size: .16rem;
    margin: .2rem 0 .1rem 0;
  }

  .assortment {
    width: 100%;
  }

  .assortment li {
    display: inline-block;
    border-radius: .15rem;
    background: #E5E5E5;
    width: 1.65rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    font-size: .16rem;
    color: #131111;
    float: left;
  }

  .assortment .right {
    margin-right: .2rem;
    margin-bottom: .1rem;
  }

  .numbox {
    width: 100%;
    margin-top: .3rem;
    display: flex;
    justify-content: space-between;
  }

  .numbox span {
    font-size: .185rem;
    color: #131111;
  }

  .numbox .jian, .numbox .jia {
    display: inline-block;
    background: #E5E5E5;
    text-align: center;
    width: .5rem;
    height: .3rem;
    border-radius: .3rem;
    font-size: .2rem;
    font-weight: 500;
  }

  .numbox .num {
    margin-left: .2rem;
    margin-right: .2rem;
  }

  .buy button {
    width: 3.55rem;
    height: .385rem;
    background: #fac100;
    font-size: .215rem;
    color: #FFFFFF;
    border: none;
    border-radius: .3rem;
    margin: .665rem 0 .1rem 0;
  }

  .buy .no {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    border: .01rem solid #b5b5b5;
    position: absolute;
    top: .1rem;
    right: .1rem;
    text-align: center;
    line-height: .15rem;
    font-size: .2rem;
    color: #b5b5b5;
  }
</style>
