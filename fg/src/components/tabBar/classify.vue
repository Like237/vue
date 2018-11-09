<template>
  <div class="tab-bar-item">
    <img  :src="TABbarPic" alt="">
    <p>{{text}}</p>
  </div>
</template>


<script>


  export default {
    props:['text','TABbarPic']
  }

</script>


<style scoped>

  .tab-bar-item {
    text-align: center;
    width: 25%;
    float: left;
    font-size: .13rem;
    color: rgb(14,13,13);
  }
  .tab-bar-item img{
    width: .24rem;
    height: .24rem;
    margin-top: .03rem;
  }

</style>
