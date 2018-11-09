<template>
  <div>
    <LiebiaoHeader></LiebiaoHeader>
    <LiebiaoBox></LiebiaoBox>
  </div>
</template>


<script>
  import LiebiaoHeader from './liebiaoHeader/liebiaoHeader.vue'
  import LiebiaoBox from './liebiaoItem/liebiaoBox.vue'

  export default{
    components :{
      LiebiaoHeader,LiebiaoBox
    }
  }

</script>

<style scoped>



</style>
