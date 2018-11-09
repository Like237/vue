<template>
  <div class="setting-item">
    <img :src="settingUrl" alt="">
    <p>{{title}}</p>
    <img src="./../../../assets/mine/fanhui@2x.png" alt="">
  </div>
</template>

<script>

  export default {
    props : ['settingUrl','title']
  }

</script>

<style scoped>
  .setting-item {
    width: 100%;
    height: .24rem;
    margin-top: .2rem;
    font-size: .13rem;
  }

  .setting-item img:nth-of-type(1) {
    width: .24rem;
    height: .24rem;
    margin-left: .2rem;
    float: left;
  }
  .setting-item p{
    font-size: .16rem;
    color: #000;
    margin-left: .1rem;
    float: left;
    margin-top: .025rem;
  }
  .setting-item img:nth-of-type(2) {
    width: .24rem;
    height: .24rem;
    margin-right: .1rem;
    float: right;
  }


</style>
