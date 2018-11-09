<template>
  <div>
    <div class="search-tab-bar">
      <div class="search-tab-bar-l">
        <h1>全部</h1>
      </div>
      <div class="search-tab-bar-m">
        <h1>店铺</h1>
      </div>
      <div class="search-tab-bar-r">
        <h1>宝贝</h1>
      </div>
    </div>
  </div>
</template>

<script>

  export default  {

  }

</script>

<style scoped>
  .search-tab-bar{
    width: 100%;

    /*border: 1px solid black;*/
    display: flex;
    border-bottom: .001em solid #e6e6e6;
    /*font-size: .14rem;*/
  }

  .search-tab-bar h1{
    font-size: .16rem;
    font-weight: 500;
    color: #333333;
  }

  .search-tab-bar-l,.search-tab-bar-m,.search-tab-bar-r{
    flex: 1;
    height: .44rem;
    font-size: .1rem;
    text-align: center;
    line-height: .44rem;
  }

  .search-tab-bar-l{
    border-bottom: .02rem solid #fac100;
  }

</style>
