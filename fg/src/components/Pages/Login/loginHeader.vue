<template>
  <div class="loginHeader">
    <router-link to="./login">
      <div class="title"><img src="./../../../../static/images/login/fanhuijian@2x.png" alt=""/></div>
    </router-link>
    <div class="login"><img src="./../../../../static/images/login/logo@2x.png" alt=""/></div>
  </div>
</template>

<script>


  export default {}
</script>

<style>
  .loginHeader {
    width: 100%;
    font-size: .13rem;
  }

  .loginHeader .title {
    margin-top: .08rem;
    margin-left: .2rem;
    box-sizing: border-box;
  }

  .loginHeader .title img {
    width: .135rem;
  }

  .loginHeader .login {
    width: 1.125rem;
    margin: .52rem auto;
    display: flex;
    justify-content: center;
    z-index: 1;
  }

  .loginHeader .login img {
    width: .77rem;
    height: 1.045rem;
  }
</style>
