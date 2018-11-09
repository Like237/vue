<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{

  }
}
</script>

<style>

  *{
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100px;
  }

  .html {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  ul,ol{
    list-style: none;
  }
  a{
    text-decoration: none;
  }

  body{
    font-family: "苹方 常规";
    background-color: #f8f3f3;
  }


  .clearfix {
    clear: both;
  }
  </style>
