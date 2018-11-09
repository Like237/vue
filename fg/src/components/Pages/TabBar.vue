<template>
  <div class="app">
    <LoginHeader> </LoginHeader>
    <Prompt></Prompt>
  </div>
</template>

<script>

  import LoginHeader from './Login/loginHeader.vue'
  import Prompt from './Prompt/prompt.vue'

  export default {
    name: 'App',
    components:{
      LoginHeader:LoginHeader,
      Prompt:Prompt
    }
  }
</script>

<style>

</style>
