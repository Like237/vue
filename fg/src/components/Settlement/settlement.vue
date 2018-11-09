<template>
<div>
  <!--头部-->
<div class="header">
  <router-link to="/shopping">
    <img src="./../../assets/settimg/fanhuijian@2x.png" alt="">
  </router-link>
  <h1>提交订单</h1>
</div>
  <!--头部结束-->

  <!--地址栏-->
  <div class="address">
    <img class="zs" src="./../../assets/settimg/zhuangshi1@2x.png" alt="">
    <div class="address-content">
      <img class="dizhi" src="./../../assets/settimg/dizhi@2x.png" alt="">
      <div class="address-content-text">
        <div class="text-top">
          <div class="text-top-left">
            <p>收货人:H阿_</p>
          </div>
          <div class="text-top-right">
            <p>18236042071</p>
          </div>
        </div>
        <div class="text-btm">
          <p>收货地址：郑州市金水区花园路兰德中心课工场31号</p>
        </div>
      </div>
      <img class="fanhui" src="./../../assets/settimg/fanhui@2x.png" alt="">
    </div>
    <img class="zs" src="./../../assets/settimg/zhuangshi1@2x.png" alt="">
  </div>
  <!--地址栏结束-->
  <!--订单-->
  <div class="order">
    <h1>艺灯空间</h1>
    <div class="order-text">
      <img src="./../../assets/settimg/shangpin@2x.png" alt="">
      <div class="order-text-right">
        <p>灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意</p>
        <p class="yangshi">6头黑罩金灯体</p>
        <p class="seven">七天退换</p>
        <div class="num">
          <p class="price">￥299</p>
          <p class="number">x1</p>
        </div>
      </div>
    </div>
  </div>
  <!--订单结束-->
  <!--选项-->
  <div class="option">
    <div class="option-1">
      <p>售后服务</p>
      <p>上门安装20.00元</p>
    </div>
    <img src="./../../assets/settimg/fanhui@2x.png" alt="">
  </div>
  <div class="option">
    <div class="option-1">
      <p>配送方式</p>
      <p>快递  免邮</p>
    </div>
    <img src="./../../assets/settimg/fanhui@2x.png" alt="">
  </div>
  <div class="option">
    <div class="option-1">
      <p>运费险</p>
      <p>卖家赠送</p>
    </div>
    <img src="./../../assets/settimg/fanhui@2x.png" alt="">
  </div>
  <div class="option">
    <div class="option-1">
      <p>买家留言：</p>
      <input type="text" placeholder="选填：填写内容已和卖家协商确认">
    </div>
  </div>
  <!--选项结束-->
  <div class="option-btm">
    <p class="price-big">￥299</p>
    <p>共一件商品  小计：</p>
  </div>

  <div class="null">

  </div>

  <div class="footer">
    <div class="option-btm-1">
      <p class="price-big-1">￥299</p>
      <p class="price-big-text">共一件商品  小计：</p>
    </div>
    <div class="sub">
      <router-link to="/allOrders">
        <h1>提交订单</h1>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
.header{
  font-size: .2rem;
  width: 100%;
  height: .44rem;
  background-color: #fac100;
}
  .header img{
    width: .1rem;
    margin-top: .135rem;
    margin-left: .1rem;
    float: left;
  }
  .header h1{
    font-size: .16rem;
    color: #ffffff;
    font-weight: 500;
    line-height: .44rem;
    margin-left: 1.58rem;
  }


  .address {
    font-size: .2rem;
  }

.address .zs{
    width: 100%;
    float: left;
  }

.address .address-content{
  float: left;
  width: 100%;
  height: .7rem;
  font-size: .2rem;
}
.address-content .dizhi{
  width: .15rem;
  margin-top: .3rem;
  margin-left: .1rem;
  float: left;
}

.address-content .fanhui{
  width: .075rem;
  margin-top: .3rem;
  margin-left: .1rem;
}

.address-content-text{
  float: left;
  width: 3rem;
  height: 100%;
  margin-left: .1rem;
}

.text-top{
  width: 100%;
  margin-top: .07rem;
  display: flex;
  justify-content: space-between;
}

.text-btm{
  margin-top: .03rem;
}

.address-content-text .text-top , .text-btm p{
    font-size: .14rem;
    color: #2f2d2d;
}

  .order{
    width: 100%;
    font-size: .2rem;
    overflow: hidden;
  }
  .order h1{
    font-size: .14rem;
    color: #2d2b2b;
    font-weight: 500;
    margin-left: .1rem;
    margin-top: .11rem;
  }

  .order-text{
    width: 100%;
    height: 1.15rem;
    border: 1px solid #cccccc;
    padding: .1rem;
    background-color: #eeeeee;
    margin-top: .05rem;
  }
  .order-text img{
    width: 1.1rem;
    float: left;
  }
  .order-text-right{
    width: 2.33rem;
    margin-left: .1rem;
    float: left;
    font-size: .2rem;
  }
.order-text-right p{
  font-size: .14rem;
  color: #333333;
}
.order-text-right .yangshi{
  margin: 0.05rem 0 0.05rem 0;
  font-size: .12rem;
  color: #787373;
}
.order-text-right .seven{
  color: #cc0000;
  border: .001rem solid #cc0000;
  width: .5rem;
  font-size: .12rem;
  margin:  0.08rem 0 0.05rem 0;
}
.order-text-right .num p{
  display: inline-block;

}
.order-text-right .num{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.order-text-right .num .price{
  font-size: .14rem;
  color: #cc0000;
  margin:  0.05rem 0 0.05rem 0;
}
.order-text-right .num .number{
  font-size: .12rem;
  color: #131111;
  margin:  0.05rem 0 0.05rem 0;
}
  .option{
    font-size: .2rem;
    width: 100%;
    height: .6rem;
    border-bottom: .001rem solid #cccccc;
  }
  .option .option-1{
    width: 3.35rem;
    height: .4rem;
    display: flex;
    justify-content: space-between;
    padding: .1rem;
    float: left;
  }

.option .option-1 p{
  font-size: .14rem;
  color: #2d2b2b;
  line-height: .5rem;
}
.option img{
  width: .075rem;
  float: left;
  margin-top: .28rem;
}
.option .option-1 input{
  margin-top: .1rem;
  width: 2.6rem;
  height: .3rem;
  border: none;
  outline: none;
}

  .option-btm{
    width: 100%;
    height: .5rem;
    font-size: .2rem;
  }

.option-btm p{
  font-size: .12rem;
  color: #2d2b2b;
  float: right;
  margin-top: .14rem;
}

.option-btm .price-big{
  font-size: .17rem;
  color: #cc0000;
  margin-right: .275rem;
  margin-top: .1rem;
  }

  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: .65rem;
    border: 1px solid #cccccc;
  }

.option-btm-1{
  width: 2.55rem;
  height: .65rem;
  font-size: .2rem;
  float: left;
  background-color: #fff;
}
.price-big-text{
  font-size: .14rem;
  color: #2f2d2d;
  float: right;
  margin-top: .22rem;
}
.price-big-1{
  font-size: .17rem;
  color: #cc0000;
  float: right;
  margin-top: .2rem;
  margin-right: .1rem;
}
  .footer .sub{
    width: 1.18rem;
    height: .65rem;
    font-size: .2rem;
    float: left;
    background-color: #fac100;
    text-align: center;
  }

.footer .sub h1{
  font-weight: 500;
  line-height: .65rem;
  font-size: .17rem;
  color: #ffffff;
}
.null{
  width: 100%;
  height: .6rem;
}
</style>
