<template>
  <div>
    <ul v-for="item in arr">
     <router-link to="/page">
       <li>
         <div class="left">
           <img src="./../../../assets/liebiao/shnagpin1@2x.png" alt="">
         </div>
         <div class="right">
           <div class="title" >
             {{item.productdesc}}
           </div>
           <span class="middle">
            ￥{{item.productprice}}
          </span>
           <div class="footer">
             {{item.shopName}}
           </div>
         </div>
         <img class="fanhui" src="./../../../assets/liebiao/heisefanhui@2x.png" alt="">
         <div class="clearfix"></div>
       </li>
     </router-link>
    </ul>
  </div>
</template>

<script>

  export default {
    data : function (){
      return {
        arr : [

        ]
      }
    },
    created : function (){
      var that = this ;
      $.ajax({
        url: 'http://172.25.5.53:8080/MyFirstProject/servlet/ProductServlet?opr=getInfoByProductName',
        type: 'get',
        data: {
          ProductName: '吊灯'
        },
        // dataType: 'jsonp',
        // jsonp: cb',
        // async: true,
        success: function (msg) {
          var msg = JSON.parse(msg);
          that.arr = msg ;
        },
        error: function (err) {
          console.log(err)
        }
      })
    }
  }

</script>

<style scoped>
  li {
    margin-bottom: .1rem;
    font-size: .13rem;
    background-color: #fff;
    position: relative;
  }

  li > .left {
    float: left;
    margin-left: .1rem;
    margin-bottom: .2rem;
    margin-top: .15rem;
  }

  li > .left img {
    width: 1.1rem;
    height: 1.08rem;
    border-radius: 0rem;
  }

  li > .right {
    float: left;
    margin-top: .15rem;
    margin-left: .2rem;
    position: relative;
  }

  li > .right .title {
    font-size: .14rem;
    color: #333333;
    width: 1.9rem;
  }
  .middle {
    position: absolute;
    font-size: .16rem;
    color: #ff2e42;
    top: .56rem;
    left: 0;
  }


  .footer {
    position: absolute;
    font-size: .12rem;
    color: #333333;
    top: 1rem;
    left: 0;
  }


  .fanhui {
    position: absolute;
    bottom: .18rem;
    right: .25rem;
  }


</style>
