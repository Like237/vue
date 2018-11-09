<template>
  <div>
    <div class="head">
      <div class="search">
        <img src="./../../assets/fuzzimg/sousuo@2x.png" alt="">
        <input type="text" placeholder="吊灯">
        <img src="./../../assets/fuzzimg/shanchu@2x.png" alt="">
      </div>
      <router-link to="/home-one">
        <div class="cancel">
          <h1>取消</h1>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

  .head{
    width: 100%;
    font-size: .14rem;
    height: .5rem;
    background-color: #fac100;
    overflow: hidden;
    position: relative;
  }

  .head h1{
    font-size: .14rem;
    text-indent: .1rem;
    color: #fefefe;
    font-weight: 100;
  }

  .cancel{
    width: 15%;
    height: .2rem;
    margin-top: .17rem;
    float: right;
  }
  .search {
    width: 2.915rem;
    height: .3rem;
    border-radius: .5rem;
    font-size: .15rem;
    background-color: #fff;
    position: absolute;
    top: .1rem;
    left: .2rem;
  }

  .search img{
    width: .13rem;
    margin-left: .1rem;
    margin-top: .1rem;
  }

  .search input{
    width: 75%;
    height: .2rem;
    font-size: .14rem;
    text-indent: .1rem;
    border: none;
    outline: none;
  }

</style>
