<template>
  <div id="box">
    <div class="top">
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="./../../../../static/images/pages/lunbodatu1@2x.png" alt=""/></div>
          <div class="swiper-slide"><img src="./../../../../static/images/pages/lunbodatu2@2x.png" alt=""/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!--<router-link to="/home">-->
          <div class="back" @click="goHome"><img src="./../../../../static/images/pages/fanhui@2x.png" alt=""/></div>
        <!--</router-link>-->
        <div class="shine"><img src="./../../../../static/images/pages/fenxiang1@2x.png" alt=""/></div>
      </div>

      <!--介绍-->
      <div class="present">
        <p>北欧客厅灯具后现代简约客厅卧室书房餐厅创意个性大气led吊灯</p>
        <div class="money"><span>￥299-1270</span><span class="sell">月销4568</span></div>
        <div class="dour"><span>上门安装</span><span class="city">广东中山</span></div>
      </div>

      <!--优惠-->
      <div class="preferential">
        <span>优惠</span>
        <span class="draw" @click="fn2">领取优惠劵</span>
        <span class="get">领取<img src="./../../../../static/images/pages/fanhuihuiseanniu@2x.png" alt=""/></span>
      </div>

      <!--服务-->
      <div class="choose">
        <span class="serve">服务</span>
        <span class="servePages">破损包赔&nbsp;&nbsp;预约安装&nbsp;&nbsp;破损包赔&nbsp;&nbsp;三年质保</span>
        <span class="get"><img src="./../../../../static/images/pages/fanhuihuiseanniu@2x.png" alt=""/></span>
      </div>

      <!--选择-->
      <div class="choose">
        <span class="serve">选择</span>
        <span class="servePages">请选择颜色分类</span>
        <span class="get"><img src="./../../../../static/images/pages/fanhuihuiseanniu@2x.png" alt=""/></span>
      </div>

      <!--参数-->
      <div class="choose">
        <span class="serve">参数</span>
        <span class="servePages">光源个数&nbsp;&nbsp;吊灯类型</span>
        <span class="get"><img src="./../../../../static/images/pages/fanhuihuiseanniu@2x.png" alt=""/></span>
      </div>

      <!--商品评价-->
      <div class="choose">
        <span class="serve" style="color: #535353;  display: block;">商品评价（3321）</span>
        <span class="get" style="color: #bf0101;margin-top: -.16rem">查看全部<img
          src="./../../../../static/images/pages/fanhuihongseanniu@2x.png" alt=""/></span>
        <span class="pic"><img src="./../../../../static/images/pages/pingjiatouxiang@2x.png" alt=""/>H**啊</span>
        <p class="assess">已经安装好了，光源很漂亮也很亮，后期还会买</p>
        <span class="jiaaxiu">
        <img src="./../../../../static/images/pages/maijiaaxiu1@2x.png" alt=""/>
        <img src="./../../../../static/images/pages/maijiaaxiu2@2x.png" alt=""/>
        <img src="./../../../../static/images/pages/maijiaaxiu3@2x.png" alt=""/>
      </span>
        <p class="massige">2018-08-12&nbsp;&nbsp;&nbsp;颜色分类：8头中号白罩黑灯体</p>
      </div>

      <!--店铺-->
      <div class="shop">
        <img src="./../../../../static/images/pages/dianputuxiang.png" alt=""/>
        <span class="name">艺灯空间旗舰店</span>
        <span class="label">蜂购</span>
        <p class="miaoshu">
          <span>宝贝描述<i>4.9</i><img src="./../../../../static/images/pages/baobeimiaoshujiantou@2x.png" alt=""/></span>
          <span>卖家服务<i>4.9</i><img src="./../../../../static/images/pages/baobeimiaoshujiantou@2x.png" alt=""/></span>
          <span>物流服务<i>4.9</i><img src="./../../../../static/images/pages/baobeimiaoshujiantou@2x.png" alt=""/></span>
        </p>
        <p class="lei">
          <span>全部商品</span>
          <router-link to="/dengyi">
            <span>进入店铺</span>
          </router-link>
        </p>
      </div>

      <!--<划动></划动>-->
      <div class="with">
        <span>相关宝贝</span>
        <div class="row" @touchmove="move" @touchstart="start">
          <div class="lunboimg">
            <img src="./../../../../static/images/pages/xiangguanbaobei1@2x.png" alt=""/>
          </div>
          <div class="lunboimg">
            <img src="./../../../../static/images/pages/xiangguanbaobei2@2x.png" alt=""/>
          </div>
          <div class="lunboimg">
            <img src="./../../../../static/images/pages/xiangguanbaobei3@2x.png" alt=""/>
          </div>
          <div class="lunboimg">
            <img src="./../../../../static/images/pages/xiangguanbaobei4@2x.png" alt=""/>
          </div>
        </div>
      </div>

      <!--活动-->
      <div class="activity">
        <span>店铺活动</span>
        <img src="./../../../../static/images/pages/huodong.png" alt=""/>
      </div>

      <!--商品详情-->
      <div class="goods">
        <span>商品详情</span>
        <p>灯罩可调节360度调节 亚克力灯罩</p>
      </div>

      <div class="light">
        <img src="./../../../../static/images/pages/baobeixiangqing1@2x.png" alt=""/>
        <img src="./../../../../static/images/pages/baobeixiangqing2@2x.png" alt=""/>
      </div>
    </div>

    <!--底部-->
    <div class="footer">
      <div class="house">
        <img src="./../../../../static/images/pages/shoucang@2x.png" alt=""/><span>收藏</span>
      </div>
     <router-link to="/shopping">
       <div class="car">加入购物车</div>
     </router-link>
      <div class="buy" id="buy" @click="fn">立即购买</div>
    </div>


    <!--立即购买-->
    <div class="Buy">
      <div class="buy" v-show="flag">
        <div class="no" @click="ok()">×</div>
        <!--上-->
        <div class="word">
          <div class="tuceng"><img src="./../../../../static/images/buy/shangpin@2x.png" alt=""></div>
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
          <li v-for="(list, index) in list" :class="{'active': index == active}" @click="check_show(index)">{{list}}
          </li>
        </ul>
        <!--<div class="clear"></div>-->
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
        <router-link to="/allOrders">
          <button style="outline: none" @click="ok">确定</button>
        </router-link>
      </div>
    </div>

    <!--优惠劵-->
    <div class="coupon" v-show="flag2">
      <h1>优惠</h1>
      <div class="jifen">
        <span>促销</span>
        <span>积分</span>
        <span>领卷 <span class="have">已有积分：20</span></span>
      </div>
      <div class="bgc">
        <div class="left">
          <p class="money"><span>￥10</span> 店铺优惠劵</p>
          <p class="data">订单金额满300元可使用</p>
          <p class="data">有效期2018.09.05-2018.10.05</p>
        </div>
        <div class="use" @click="getText">{{get}}</div>
      </div>
      <div class="bgc two">
        <div class="left">
          <p class="money"><span>￥20</span> 店铺优惠劵</p>
          <p class="data">订单金额满300元可使用</p>
          <p class="data">有效期2018.09.05-2018.10.05</p>
        </div>
        <div class="use" @click="getText2">{{get2}}</div>
      </div>
      <button class="finish" @click="finish">完成</button>
    </div>
    <div class="pageMask" v-show="flag3">

    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'


  export default {
    components: {},
    data: function () {
      return {
        list: ['6头大号白罩白灯体', '6头大号黑罩金灯体', '8头大号白罩黑灯体', '6头大号黑罩金灯体'],
        //  获取当前鼠标触摸的位置
        startClientX: 0,
        //  纪录滑动左边距离
        moveX: 0,
        endX: 0,//结束触摸的位置
        disX: 0,//移动距离
        slideEffect: '',//滑动时的效果,使用v-bind:style="deleteSlider"
        //  保存left 值
        active: 0,
        get: '立即领取',
        get2: '立即领取',
        left: 0,
        flag: false,
        flag2: false,
        num: 1,
        flag3: false,
        moveY : 0,
        scrollTop : 0
      }
    },
    methods: {
      fn: function () {
        this.flag = true;
        $('html').addClass('html');
        this.flag3 = true;
      },
      ok: function () {
        this.flag = false;
        $('html').removeClass('html');
        this.flag3 = false;
      },

      goHome : function () {
        window.history.back();
      },
      //  触摸事件
      start: function (ev) {
        ev.preventDefault();
        this.startClientX = ev.touches[0].clientX;
      },
      //  触摸移动事件
      move: function (ev) {
        ev = ev || event;
        ev.preventDefault();
        if (ev.touches.length == 1) {
          //滑动时距离浏览器左侧的距离
          this.moveX = ev.touches[0].clientX;
          //实时的滑动的距离-起始位置=实时移动的位置
          this.disX = this.moveX - this.startClientX;
          //判断向左滑动
          if (this.disX <= 0) {
            this.left = -1.19;
//            判定向右滑动
          } else if (this.disX >= 0) {
            if (this.left >= 0) {
              this.left = 0;
            } else if (this.left <= -1.19) {
              this.left = 0;
            }
          }
          var option = document.querySelector('.row');
          option.style.left = this.left + 'rem';
        }
      },
      jian: function () {
        this.num--;
        this.num = this.num < 2 ? 1 : this.num;
      },
      jia: function () {
        ++this.num;
      },
      getText: function () {
        this.get = '已领取'
      },
      getText2: function () {
        this.get2 = '已领取'
      },
      finish: function () {
        this.flag2 = false;
        $('html').removeClass('html');
        this.flag3 = false;
      },
      fn2: function () {
        this.flag2 = true;
        $('html').addClass('html');
        this.flag3 = true;
      },
      check_show: function (index) {
        this.active = index;
      },
    }

  }
</script>


<style scoped>

  .pageMask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 45;
  }

  #box {
    font-family: PingFang-SC-Regular;
    font-size: .13rem;
    position: relative;
  }

  /*<!--轮播图-->*/
  .swiper-container {
    width: 100%;
    height: 2.82rem;
    position: relative;
  }

  .swiper-container .back {
    position: absolute;
    top: .2rem;
    left: .1rem;
    z-index: 99;
  }

  .swiper-container .back img, .swiper-container .shine img {
    width: .26rem;
  }

  .swiper-container .shine {
    position: absolute;
    top: .2rem;
    left: 3.19rem;
    z-index: 99;
  }

  .swiper-container .swiper-slide img {
    width: 3.75rem;
    height: 2.82rem;
  }

  .swiper-pagination {
    width: .36rem;
    height: .16rem;
    background: rgba(19, 19, 19, 0.61);
    border-radius: .1rem;
    font-size: .11rem;
    color: #ffffff;
    margin-right: .1rem;
    position: absolute;
    left: 3.29rem;
    top: 2.56rem;
  }

  .top {
    margin-bottom: .485rem;
  }

  /*<!--介绍-->*/
  .present {
    width: 100%;
    padding: .1rem;
    box-sizing: border-box;
    background: #ffffff;
  }

  .present p {
    font-size: .16rem;
    font-weight: 900;
    color: #131111;
  }

  .present .money {
    font-size: .16rem;
    color: #d10202;
    margin: .1rem 0 .1rem 0;
    display: flex;
    justify-content: space-between;
  }

  .present .money span {
    font-family: PingFang-SC-Regular, DINCond-Black;
    font-size: .19rem;
    font-weight: 900;
  }

  .present .sell {
    font-size: .11rem;
    color: #585454;
  }

  .dour {
    font-size: .11rem;
    font-weight: 600;
    color: #282424;
    display: flex;
    justify-content: space-between;
  }

  .preferential {
    width: 100%;
    padding: .1rem;
    box-sizing: border-box;
    font-size: .12rem;
    color: #706969;
    background: #ffffff;
    margin-top: .1rem;
    position: relative;
  }

  .preferential .draw {
    display: inline-block;
    width: .715rem;
    height: .15rem;
    line-height: .15rem;
    font-size: .11rem;
    color: #d10202;
    border-radius: .07rem;
    background: rgba(255, 179, 177, 0.64);
    text-align: center;
    margin-left: .1rem;
  }

  .preferential .get, .choose .get {
    font-size: .12rem;
    position: absolute;
    right: .1rem;
  }

  .preferential .get img, .choose .get img {
    height: .11rem;
    vertical-align: middle;
    margin-left: .05rem;
  }

  .choose {
    padding: .1rem;
    background: #ffffff;
    margin-top: .1rem;
  }

  .choose .serve {
    font-size: .12rem;
    color: #706969;
  }

  .choose .servePages {
    font-size: .12rem;
    color: #141212;
    margin-left: .1rem;
  }

  .choose .pic {
    display: block;
    margin-top: .1rem;
    font-size: .12rem;
    color: #1d1a1a;
  }

  .choose .pic img {
    width: .25rem;
    vertical-align: middle;
    margin-right: .07rem;
  }

  .choose .assess {
    font-size: .12rem;
    color: #1d1a1a;
    margin: .1rem 0;
  }

  .choose .jiaaxiu {
    display: inline-block;
    height: .57rem;
  }

  .choose .jiaaxiu img {
    height: .57rem;
    width: .76rem;
    margin-right: .1rem;
    vertical-align: middle;
  }

  .choose .massige {
    font-size: .1rem;
    color: #1d1a1a;
    margin-top: .1rem;
  }

  .shop {
    margin-top: .1rem;
    padding: .1rem;
    box-sizing: border-box;
    background: #ffffff;
    position: relative;
  }

  .shop img {
    width: .56rem;
    vertical-align: top;
  }

  .shop .name {
    display: inline-block;
    margin-top: .1rem;
    margin-left: .1rem;
    font-size: .11rem;
    font-weight: 600;
  }

  .shop .label {
    font-size: .11rem;
    color: #ffffff;
    border-radius: .08rem;
    background: #cb0413;
    padding: 0 .05rem;
    position: absolute;
    top: .45rem;
    left: .8rem;
  }

  .miaoshu {
    font-size: .1rem;
    color: #1d1a1a;
    margin-top: .1rem;
    display: flex;
    justify-content: space-between;
  }

  .miaoshu i {
    font-style: normal;
    color: #c50202;
    font-size: .11rem;
  }

  .miaoshu img {
    width: .09rem;
    margin-left: .1rem;
    vertical-align: middle;
  }

  .lei {
    margin-top: .1rem;
    display: flex;
    justify-content: space-around;
  }

  .lei span {
    display: inline;
    width: .75rem;
    height: .2rem;
    font-size: .12rem;
    color: #cb0413;
    border-radius: .085rem;
    border: .01rem solid #cb0413;
    padding: 0 .1rem;
    line-height: .18rem;
    text-align: center;
    box-sizing: border-box;
  }

  .with {
    background: #FFFFFF;
    height: 2.25rem;
    margin-top: .1rem;
    padding: .1rem 0 .1rem .1rem;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }

  .with span, .activity span {
    display: block;
    font-size: .12rem;
    color: #242020;
    margin-bottom: .1rem;
    font-weight: 600;
  }

  .row {
    width: 3.65rem;
    position: absolute;
    top: .35rem;
    left: .1rem;
    display: flex;
    justify-content: space-between;
    transition: all 1s;
    margin-left: .1rem;
  }

  .row .lunboimg {
    margin-right: .1rem;
  }

  .row img {
    width: 1.09rem;
  }

  .row .lunboimg:last-of-type {
    margin-right: 0;
  }

  .activity {
    margin-top: .1rem;
    padding-top: .1rem;
    box-sizing: border-box;
    background: #FFFFFF;
  }

  .activity span {
    margin-left: .1rem;
  }

  .activity img {
    width: 3.75rem;
    margin-bottom: .1rem;
  }

  .goods {
    margin-top: .1rem;
    padding: .1rem;
    background: #FFFFFF;
    box-sizing: border-box;
  }

  .goods span {
    font-size: .16rem;
    color: #1c1919;
  }

  .goods p {
    color: #867b7b;
    font-size: .14rem;
    text-align: center;
    margin-top: .1rem;
  }

  .light {
    margin-top: .1rem;
    padding-top: .1rem;
    box-sizing: border-box;
    background: #FFFFFF;
  }

  .light img {
    margin-top: .1rem;
    width: 3.75rem;
  }

  .footer {
    width: 100%;
    height: .485rem;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .footer .house {
    width: 33.3%;
    height: 100%;
    font-size: .16rem;
    color: #999999;
    position: relative;
  }

  .footer .house span {
    display: inline-block;
    position: absolute;
    bottom: .13rem;
    left: .44rem;
  }

  .footer .house img {
    width: .24rem;
    margin-left: .1rem;
    margin-top: .135rem;
    margin-right: .1rem;
  }

  .footer div {
    float: left;
  }

  .footer .car, .footer .buy {
    width: 33.3%;
    background: #ffc065;
    font-size: .16rem;
    color: #FFFFFF;
    text-align: center;
    line-height: .485rem;
  }

  .footer .buy {
    background: #fac100;
  }

  .Buy {
    position: fixed;
    bottom: 0;
    z-index: 999;
  }

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

  .buy .tuceng img {
    width: 1.725rem;
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
    /*color: #131111;*/
    margin: 0 .1rem .1rem 0;
    /*border: .01rem solid whitesmoke;*/
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

  #buy {
    border-radius: 0;
    height: .48rem;
    line-height: .48rem;
    padding: 0;
  }

  /*优惠劵*/
  .coupon {
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: .1rem;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: .2rem .2rem 0 0;
    z-index: 999;
  }

  .coupon h1 {
    text-align: center;
  }

  .coupon span {
    font-size: .14rem;
    color: #666161;
    margin: .2rem 0;
    display: flex;
    justify-content: space-between;
  }

  .coupon .have {
    margin: 0;
  }

  .bgc {
    width: 100%;
    height: 1.01rem;
    background: url("./../../../../static/images/coupon/youhuijuanbeijing@2x.png");
    background-size: 100% .715rem;
    font-size: .1rem;
    color: #fac100;
    display: flex;
    justify-content: space-between;
    margin-bottom: .2rem;
  }

  .bgc .left {
    width: 2.55rem;
  }

  .bgc .left .data {
    margin-left: .1rem;
  }

  .bgc .money {
    margin: .1rem .2rem;
  }

  .bgc .money {
    font-size: .14rem;
  }

  .bgc span {
    color: #fac100;
    display: inline-block;
    font-size: .24rem;
    margin: 0;
  }

  .bgc .use {
    width: 1.2rem;
    font-size: .14rem;
    text-align: center;
    line-height: 1.01rem;
  }

  .finish {
    width: 100%;
    height: .31rem;
    background: #fac100;
    color: #FFFFFF;
    font-size: .2rem;
    border-radius: .15rem;
    margin: .5rem 0 .1rem 0;
    border: none;
    outline: none;
  }

  .active {
    color: #ff4182;
    border: .01rem solid #ff4182;
  }

</style>
