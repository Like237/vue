<template>
  <div>
    <MineHeader @getName="getName"></MineHeader>
    <AfterwardsBox></AfterwardsBox>
    <div class="clearfix"></div>
    <SettingBox></SettingBox>
    <div class="clearfix"></div>
    <Footer :getUserName="getUserName" @getName="get"></Footer>
  </div>
</template>

<script>
  import Dibu from './../tabBar/dibu.vue'
  import MineHeader from './mine/mineHeader.vue'
  import AfterwardsBox from './afterwards/afterwardsBox.vue'
  import SettingBox from './setting/settingBox.vue'
  import Footer from './footer/footer.vue'


  export default {
    components :{
      Dibu,MineHeader,AfterwardsBox,SettingBox,Footer
    },
    data : function () {
      return {
        getUserName : ''
      }
    },
    methods : {
      getName : function (data) {
        this.getUserName = data ;
      },
      get : function (data) {
        this.getUserName = data ;
      }
    }
  }

</script>


<style scoped>

  .footer {
    width: 100%;
    height: .4rem;
  }

</style>
