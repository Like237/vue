<template>
  <div class="homeify-box">
    <Homeify text="女装馆" homeifyPic="./static/home/homeify/nvzhuangguan@2x.png"></Homeify>
    <Homeify text="男装馆" homeifyPic="./static/home/homeify/nanzhuangguan@2x.png"></Homeify>
    <Homeify text="数码馆" homeifyPic="./static/home/homeify/shumaguan@2x.png"></Homeify>
    <Homeify text="护肤馆" homeifyPic="./static/home/homeify/hufuguan@2x.png"></Homeify>
    <Homeify text="饰品馆" homeifyPic="./static/home/homeify/shipinguan@2x.png"></Homeify>
    <Homeify text="母婴馆" homeifyPic="./static/home/homeify/muyingguan@2x.png"></Homeify>
    <Homeify text="厨具馆" homeifyPic="./static/home/homeify/chujuguan@2x.png"></Homeify>
    <Homeify text="家居馆" homeifyPic="./static/home/homeify/jiajuguan@2x.png"></Homeify>
    <div class="clearfix"></div>
  </div>
</template>


<script>
  import Homeify from './homeify.vue'

  export default {
    components :{
      Homeify
    }
  }


</script>


<style scoped>
  .homeify-box {
    overflow: hidden;
    width: 100%;
    background-color: #fff;
    font-size: .145rem;

  }


</style>
