<template>
  <div class="recommend">
    <h2 class="pingfang">你可能喜欢</h2>
    <div class="recommend-box">
    <router-link to="/page">
      <RecommendItem comUrl="./static/home/recommend/diaodeng1@2x.png" title="北欧客厅灯具现代简约led吊灯"
                     price="1260" payment="850"></RecommendItem>
    </router-link>
      <RecommendItem comUrl="./static/home/recommend/diaodeng2@2x.png" title="创意客厅沙发现代简约组合"
      price="3220" payment="620"></RecommendItem>
      <RecommendItem comUrl="./static/home/recommend/diaodeng3@2x.png" title="北欧餐厅北欧简约餐桌小清新"
      price="3290" payment="350"></RecommendItem>
      <RecommendItem comUrl="./static/home/recommend/diaodeng4@2x.png" title="创意客厅餐厅灯具现代简约led吊灯"
      price="890" payment="230"></RecommendItem>
    </div>
    <div class="clearfix"></div>
  </div>
</template>


<script>
  import RecommendItem from './recommengItem.vue'

  export default {
    components : {
      RecommendItem
    }
  }

</script>

<style scoped>

  .recommend {
    width: 100%;
    font-size: .13rem;
  }
  .recommend h2 {
    font-size: .185rem;
    color: #0c0b0b;
    font-weight: 500;
    margin: .1rem 0 .1rem .1rem;
  }
  .recommend-box{
    width: 98%;
    margin-left: .1rem;
  }


</style>
