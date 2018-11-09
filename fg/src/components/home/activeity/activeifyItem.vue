<template>
  <div class="activeify-item">
    <div class="item">
      <img :src="url" alt="">
      <div class="mask pingfang" >
        {{title}}
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    props: ['title','url']
  }

</script>


<style scoped>

  .activeify-item {
    width: 1.11rem;
    position: relative;
    margin-left: .1rem;
    float: left;
  }
  .activeify-item img {
    width: 1.11rem;
    height: .83rem;
    float: left;
    margin: .1rem .1rem 0 0;
  }
  .mask {
    width: 1.11rem;
    height: .83rem;
    background-color: rgba(0,0,0,.4);
    z-index: 99;
    position: absolute;
    top: .1rem;
    left: .0rem;
    font-size: .16rem;
    color: #ffffff;
    text-align: center;
    line-height: .83rem;
  }


</style>
