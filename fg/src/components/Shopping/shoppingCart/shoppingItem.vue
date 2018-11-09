<template>
  <div class="shopping-item">
    <div class="buy">
      <div class="top">
        <img @click="toggleAll" src="./../../../assets/shopping/xuanzhongzhuangtai@2x.png" alt="">
        <div class="title">
          艺灯空间
          <img src="./../../../assets/shopping/xiaofanhuijian@2x.png" alt="">
        </div>
        <div class="right">
          <p>领卷</p>
          <div class="text">
            编辑
          </div>
        </div>
        <div class="clearfix"></div>
      </div>

    </div>
    <ul>
      <li v-for="(item , index) in data">
        <div v-show=" !item.flag" class="yuan" @click="xian(index)"></div>
        <img v-show=" item.flag" src="./../../../assets/shopping/xuanzhongzhuangtai@2x.png" alt=""
             @click="xian(index)">
        <div class="left">

          <img :src="item.itemPic" alt="">
        </div>
        <div class="right">
          <div class="title">
            {{item.title}}
          </div>
          <div class="amount">
            <p>{{item.amount}}</p>
            <img src="./../../../assets/shopping/xialaanniu@2x.png" alt="">
          </div>
          <div class="footer">
            <p class="pingfang"><span>￥</span>{{item.price}}</p>
          </div>
          <div class="del" v-show="!item.flag">
            <img @click="del(index)" src="./../../../assets/fuzzimg/shanchu@2x.png" alt="">
          </div>
        </div>
        <div class="numper">
          <img src="./../../../assets/shopping/jianhao@2x.png" alt="" @click="jian(index)">
          <span>{{item.num}}</span>
          <img src="./../../../assets/shopping/jiahao@2x.png" alt="" @click="jia(index)">
        </div>
        <div class="clearfix"></div>
      </li>
    </ul>

    <div class="balance">
      <div class="check-all">
        <!--<div v-show="false" class="quan"></div>-->
        <img @click="Allstatus" src="./../../../assets/shopping/xuanzhongzhuangtai@2x.png" alt="">
        <p>全选</p>
      </div>
      <div class="total">
        <p>合计</p>
        <p class="pingfang ALLprice"><span>￥</span>{{AllPrice}}</p>
      </div>
      <router-link to="/settlement">
        <div class="wind">
          结算
        </div>
      </router-link>

    </div>
    <div class="zhanwei"></div>
  </div>
</template>

<script>

  export default {
    props: ['show'],
    data: function () {
      return {
        data: [
          {
            itemPic: "./static/shopping/shangpintu1@2x.png",
            title: "灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意...",
            amount: " 6头黑罩金灯体",
            price: 299,
            num: 1,
            flag: true
          },
          {
            itemPic: "./static/shopping/shangpintu2@2x.png",
            title: "北欧简约现代灯泡吊灯客厅灯具卧室餐厅书房过道...",
            amount: " 3头白罩黑灯体",
            price: 129,
            num: 1,
            flag: true
          },
          {
            itemPic: "./static/shopping/shangpintu3@2x.png",
            title: "灯具客厅简约现代马卡龙书房创意led灯...",
            amount: " F16453黑色体",
            price: 129,
            num: 1,
            flag: true
          }
        ],
        flag: true,
        AllPrice: 0
      }
    },
    methods: {
      // 先进性检测全选还是全不选
      // 有任何一个没被选中 则执行全选
      // 所有的都被选中 则执行全不选
      checkStatus: function (flag) {
        for (var i = 0; i < this.data.length; i++) {
          if (flag ? this.data[i].flag : !this.data[i].flag) {
            return true;
          }

        }
        return false;
      },
      // 全选
      toggleAll: function () {
        var flag = this.checkStatus();
        for (var i = 0; i < this.data.length; i++) {
          this.data[i].flag = flag;
          if (this.data[i].flag === true) {
            this.AllPrice += this.data[i].price * this.data[i].num;
            this.flag = true;
          } else {
            this.AllPrice = 0;
            this.flag = false;
          }
        }

      },
      //加减数量
      jian: function (index) {
        //商品未被选中就跳出函数，选中及参加运算
        if (this.data[index].flag === false) {
          return;
        }
        this.data[index].num--;
        if (this.data[index].num < 1) {
          return this.data[index].num = 1;
        }
        var nuns = this.data[index].num - (this.data[index].num - 1);
        this.AllPrice = this.AllPrice - this.data[index].price * nuns;
      },
      jia: function (index) {
        //商品未被选中就跳出函数，选中及参加运算
        if (this.data[index].flag === false) {
          return;
        }
        this.data[index].num++;
        var nuns = this.data[index].num - (this.data[index].num - 1);
        this.AllPrice = this.AllPrice + this.data[index].price * (nuns);
      },
      //切换商品前的选中状态
      xian: function (index) {
        //点击切换商品选中和未选中状态
        this.data[index].flag = !this.data[index].flag;
        // 切换未选中及总价减去商品*数量
        if (this.data[index].flag === false) {
          this.AllPrice = this.AllPrice - this.data[index].price * (this.data[index].num);
        } else if (this.data[index].flag === true) {
          this.AllPrice += this.data[index].price * (this.data[index].num);  //选中总价+=选中商品的单价 * 商品数量
        }

      },
      //点击全选后，切换选中状态
      Allstatus: function () {
        var flag = this.checkStatus();
        for (var i = 0; i < this.data.length; i++) {
          this.data[i].flag = flag;
          if (this.data[i].flag === true) {
            this.AllPrice += this.data[i].price * this.data[i].num;
            this.flag = true;
          } else {
            this.AllPrice = 0;
            this.flag = false;
          }
        }
      },
      //点击删除后，删除对应的商品
      del: function (index) {
        this.data.splice(index, 1)
      }
    },
    created: function () {
      var that = this ;
      var flag = this.checkStatus();
      for (var i = 0; i < this.data.length; i++) {
        this.data[i].flag = !flag;
        if (this.data[i].flag === true) {
          this.AllPrice += this.data[i].price * this.data[i].num;
        } else {
          this.AllPrice = 0;
        }
      }





    }
  }

</script>


<style scoped>
  /*头部部分*/
  .buy {
    width: 100%;
    background-color: #fff;
    font-size: .13rem;
    overflow: hidden;
  }

  .buy .top {
    width: 100%;
    margin-top: .1rem;
    margin-bottom: .1rem;
    display: flex;
    position: relative;
  }

  .buy .top > img {
    width: .17rem;
    height: .17rem;
    margin-left: .1rem;
    float: left;
  }

  .yuan {
    width: .15rem;
    height: .15rem;
    margin-left: .1rem;
    float: left;
    border: .01rem solid #ccc;
    border-radius: 50%;
  }

  .buy .top .title {
    display: flex;
    margin-left: .1rem;
    font-size: .14rem;
    float: left;
    color: #2f2d2d;
  }

  .buy .quan {
    width: .15rem;
    height: .15rem;
    margin-left: .1rem;
    border-radius: 50%;
    border: .01rem solid #cccc;
  }

  .buy .top .title img {
    width: .06rem;
    height: .115rem;
    margin-top: .04rem;
    margin-left: .1rem;
  }

  .buy .top .right {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
  }

  .buy .top .right .text {
    margin-right: .1rem;
    font-size: .14rem;
    color: #2f2d2d;
  }

  .buy .top .right p {
    margin-right: .41rem;
    font-size: .14rem;
    color: #2f2d2d;
  }

  /*middle主体部分*/
  .shopping-item {
    font-size: .13rem;
    width: 100%;
    position: relative;
    background-color: #fff;
  }

  .shopping-item .yuan {
    width: .15rem;
    height: .15rem;
    margin-left: .1rem;
    float: left;
    margin-top: .4rem;
    border-radius: 50%;
    border: .01rem solid #cccc;
  }

  .shopping-item li {
    position: relative;
    margin-bottom: .2rem;
    padding-bottom: .1rem;
  }

  .shopping-item li > img {
    width: .17rem;
    height: .17rem;
    margin-left: .1rem;
    float: left;
    margin-top: .4rem;
  }

  .shopping-item li > .left {
    float: left;
    margin-left: .03rem;
  }

  .shopping-item li > .left img {
    width: .97rem;
    height: .96rem;
    /*width: 100%;*/
  }

  .shopping-item li > .right {
    float: left;
    margin-left: .1rem;
    position: relative;
  }

  .shopping-item li > .right .title {
    font-size: .14rem;
    color: #333333;
    width: 1.45rem;
  }

  .amount {
    width: 1.125rem;
    height: .145rem;
    background-color: #f4f4f4;
    line-height: .145rem;
    display: flex;
    position: relative;
    top: .05rem;
    left: 0;
  }

  .amount > p {
    font-size: .12rem;
    color: #787373;
    margin-left: .01rem;
  }

  .amount > img {
    width: .115rem;
    height: .06rem;
    position: absolute;
    top: .04rem;
    right: .05rem;

  }

  .footer {
    position: absolute;
    top: .75rem;
    left: 0;
  }

  .footer p {
    font-size: .19rem;
    color: #ff0033;
  }

  .footer p span {
    font-size: .17rem;
  }

  .numper {
    position: absolute;
    bottom: .2rem;
    right: .1rem;
  }

  .numper img {
    width: .175rem;
    height: .165rem;
    vertical-align: bottom;
  }

  .numper span {
    margin: 0 .1rem;
    font-size: .14rem;
    color: #666666;
  }

  .balance {
    width: 100%;
    height: .47rem;
    background-color: #fff;
    position: fixed;
    bottom: .48rem;
    left: 0rem;
    border-bottom: .01rem solid #ebebeb;
    display: flex;
  }

  .balance .check-all {
    margin-top: .16rem;
    display: flex;
  }

  .balance .check-all > img {
    width: .17rem;
    height: .17rem;
    margin-left: .1rem;
  }

  .balance .check-all > .quan {
    width: .15rem;
    height: .15rem;
    margin-left: .1rem;
    border-radius: 50%;
    border: .01rem solid #cccc;
  }

  .balance .check-all > p {
    font-size: .14rem;
    color: #2f2d2d;
    margin-left: .03rem;
  }

  .balance .total {
    display: flex;
    position: relative;
  }

  .balance .total p:nth-of-type(1) {
    margin-left: .985rem;
    margin-top: .195rem;
    font-size: .14rem;
    color: #2f2d2d;
  }

  .balance .total p:nth-of-type(2) {
    /*margin-left: .2rem;*/
    /*margin-top: .17rem;*/
    font-size: .19rem;
    color: #e90525;
    position: absolute;
    top: .17rem;
    right: -.78rem;
  }

  .balance .wind {
    width: 1.07rem;
    height: .47rem;
    background-color: #fac100;
    text-align: center;
    line-height: .47rem;
    font-size: .18rem;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
  }

  .del {
    position: absolute;
    top: 0rem;
    right: -.8rem;
  }

  .del img {
    width: .18rem;
    height: .18rem;
  }

</style>
