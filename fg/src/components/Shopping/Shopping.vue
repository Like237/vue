<template>
  <div>
    <ShoppingHeader></ShoppingHeader>
    <ShoppingCart></ShoppingCart>
    <Dibu></Dibu>
    <TabBar></TabBar>
  </div>
</template>

<script>

  import TabBar from './../tabBar/tabBar.vue'
  import Dibu from './../tabBar/dibu.vue'
  import ShoppingCart from './shoppingCart/shoppingItem.vue'
  import ShoppingHeader from './shoppingCart/shoppingHeader.vue'



  export default{
    components :{
      TabBar,Dibu,ShoppingCart,ShoppingHeader
    }

  }

</script>


<style>

</style>
