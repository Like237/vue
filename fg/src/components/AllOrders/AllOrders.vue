<template>
  <div>
    <AllHeader></AllHeader>
    <AllTabbar></AllTabbar>
    <AllIcetionBox></AllIcetionBox>
  </div>
</template>

<script>
  import AllHeader from './AllHeader/AllHeader.vue'
  import AllTabbar from './AllHeader/alltabbar/Alltabbar.vue'
  import AllIcetionBox from './Allicetion/AllicetionBox.vue'

  export default  {
    components :{
      AllHeader,AllTabbar,AllIcetionBox
    }
  }

</script>

<style>



</style>
