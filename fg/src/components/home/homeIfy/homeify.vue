<template>
  <div class="homeify">
    <img :src="homeifyPic" alt="">
    <p class="pingfang">{{text}}</p>
  </div>
</template>


<script>

  export default {
    props:['text','homeifyPic']
  }


</script>


<style scoped>
  .homeify {
    width: 25%;
    text-align: center;
    float: left;
    margin-top: .1rem;
  }
  .homeify img {
    width: .64rem;
    height: .64rem;
  }
  .homeify p{
    font-family: 'PingFang-SC-Regular';
    color: #1b1818;
    margin-bottom: .1rem;
  }

</style>
