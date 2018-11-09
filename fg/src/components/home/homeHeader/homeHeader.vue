<template>
  <div class="home-header">
    <div class="search-box">
      <img src="./../../../assets/home/homeheader/xiaoxitubiao@2x.png" alt="">
      <img src="./../../../assets/home/homeheader/sousuotubiao@2x.png" alt="">
      <router-link to="/search"><input type="text" placeholder="欧式吊灯" class="pingfang"></router-link>
    </div>
    <Banner></Banner>
  </div>
</template>


<script>
  import Banner from './banner/banner.vue'

  export default {
    components :{
      Banner
    }
  }

</script>


<style scoped>
  .home-header {
    width: 100%;
    position: relative;

  }

  .search-box {
    display: flex;
    position: relative;
    top: .09rem;
    left: 0;
    z-index: 99;
  }

  .search-box  img:nth-of-type(1) {
    width: .25rem;
    height: .25rem;
    margin-left: .16rem;
  }

  .search-box img:nth-of-type(2) {
    width: .17rem;
    height: .15rem;
    position: absolute;
    top: .06rem;
    left: .67rem;
  }
  .search-box a {
    font-size: .13rem;
  }
  .search-box  input {
    border: 1px solid transparent;
    width: 3.06rem;
    height: .25rem;
    border-radius: .125rem;
    background-color: #fff;
    font-size: .145rem;
    outline: none;
    text-indent: .42rem;
    color: #8b8880;
    margin-left: .105rem;
  }



</style>
