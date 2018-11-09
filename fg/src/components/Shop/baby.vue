<template>
  <div>
    <Tou></Tou>
    <div class="tab-bar-2">
      <ul>
        <li>综合</li>
        <li>销量</li>
        <li>
          价格
          <img class="tb" src="../../assets/babyimg/jiageshangxiaicon@2x.png" alt="">
        </li>
        <li>上新</li>
      </ul>
    </div>
    <div class="a">
    <Rec comUrl="./static/babyimg/shangpintu1@2x.png" title="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." price="299.00"></Rec>
    <Rec comUrl="./static/babyimg/shangpintu2@2x.png" title="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." price="299.00"></Rec>
    <Rec comUrl="./static/babyimg/shangpintu3@2x.png" title="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." price="299.00"></Rec>
    <Rec comUrl="./static/babyimg/shangpintu4@2x.png" title="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." price="299.00"></Rec>
   </div>
  </div>
</template>

<script>
  import Rec from './recommentitem.vue'
  import Tou from './shop.vue'
  export default{
    components:{
      Rec,
      Tou
    }
  }
</script>

<style scoped>
  .a{
    width:98%;
    margin-left: .1rem;
  }

  .tab-bar-2{
    width: 100%;
    height: .4rem;
  }


  .tab-bar-2  ul li{
    width: 25%;
    font-size: .14rem;
    line-height: .4rem;
    text-align: center;
    float: left;
  }

  .tb{
    width: .06rem;
    position: absolute;
    top: .16rem;
    right: .22rem;
    height: .1rem;
  }

  .tab-bar-2 ul li:nth-of-type(1){
    color: #ff9000;
  }

  .tab-bar-2 ul li:nth-of-type(3){
    position: relative;
  }


</style>

