<template>
  <div class="activeify-box">
    <ActiveIfyTtem title="灯屋" url="./static/home/activity/dengwu@2x.png"></ActiveIfyTtem>
    <ActiveIfyTtem title="逸轩" url="./static/home/activity/xixuan@2x.png"></ActiveIfyTtem>
    <ActiveIfyTtem title="逸轩" url="./static/home/activity/langli@2x.png"></ActiveIfyTtem>
    <div class="clearfix"></div>
  </div>
</template>


<script>
  import ActiveIfyTtem from './activeifyItem.vue'

  export default {
    components :{
      ActiveIfyTtem
    }
  }

</script>

<style scoped>
.activeify-box {
  width: 100%;
  background-color: #fff;
}



</style>
