<template>
  <div class="Allicetion-box">
    <AllIcetionItem TopText="艺灯空间" TopTitle="卖家已发货" MiddleUrl="./static/AllOrders/shangpin1@2x.png"
                    MiddleText="灯具客厅简约现代吊灯客厅灯具卧室餐厅书房创意..." MiddleTitle="6头黑罩金灯体"
                    MiddlePrice="299" nums="1" total="299">
      <div class="yangshi shou-hui" slot="shouhuo">
        查看物流
      </div>
      <div class="yangshi shou-hui" slot="shouhuo">
        延长收货
      </div>
      <div class="yangshi shou-red" slot="shouhuo">
        确认收货
      </div>
    </AllIcetionItem>
    <AllIcetionItem TopText="风古家居" TopTitle="交易完毕" MiddleUrl="./static/AllOrders/shangpin2@2x.png"
                    MiddleText="风古实木家具新中式玄关桌断柜门厅..." MiddleTitle="6屉红色框架整装"
                    MiddlePrice="1359" nums="1" total="1359">
      <div class="yangshi shou-hui" slot="shouhuo">
        删除订单
      </div>
    </AllIcetionItem>
    <AllIcetionItem TopText="蜂购自营" TopTitle="交易成功" MiddleUrl="./static/AllOrders/shangpin3@2x.png"
                    MiddleText="现代中式实木客厅小户型电视柜茶几组合新中式地柜复古..." MiddleTitle="电视柜整装"
                    MiddlePrice="999" nums="1" total="999">
      <div class="yangshi shou-hui" slot="shouhuo">
        查看物流
      </div>
      <div class="yangshi shou-hui" slot="shouhuo">
        申请开票
      </div>
      <div class="yangshi shou-red" slot="shouhuo">
        评价
      </div>
    </AllIcetionItem>
  </div>
</template>


<script>
  import AllIcetionItem from './AllicetionItem.vue'

  export default {
    components: {
      AllIcetionItem
    }
  }

</script>

<style scoped>
  .Allicetion-box {
    width: 100%;
  }


</style>
