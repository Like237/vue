<template>
  <div class="afterwards-item">
    <img :src="URL" alt="">
    <p>{{text}}</p>
  </div>
</template>


<script>

  export default {
    props : ['URL','text']
  }

</script>

<style scoped>
  .afterwards-item {
    width: 33%;
    font-size: .135rem;
    height: .705rem;
    float: left;
    overflow: hidden;
    text-align: center;
  }

  .afterwards-item img {
    width: .275rem;
    height: .26rem;
    margin-top: .1rem;
  }

  .afterwards-item p {
    color: #000;
    margin-top: .05rem;
  }


</style>
