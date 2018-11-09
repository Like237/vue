<template>
  <div class="setting-box">
    <router-link to="/allOrders"><SettingItem settingUrl="./static/mine/dingdan@2x.png" title="全部订单"></SettingItem></router-link>
    <SettingItem settingUrl="./static/mine/kefu@2x.png" title="客服"></SettingItem>
    <SettingItem settingUrl="./static/mine/geren@2x.png" title="个人资料"></SettingItem>
    <SettingItem settingUrl="./static/mine/shezhi@2x.png" title="设置"></SettingItem>

  </div>
</template>

<script>
  import SettingItem from './settingItem.vue'

  export default {
    components: {
      SettingItem
    }
  }

</script>

<style scoped>
  .setting-box {
    width: 3.55rem;
    background-color: #fff;
    border-radius: .15rem;
    margin: .5rem .1rem;
    overflow: hidden;
    padding-bottom: .2rem;
  }


</style>
