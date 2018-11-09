<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeifyBox></HomeifyBox>
    <News></News>
    <TimeLimit></TimeLimit>
    <Activity></Activity>
    <ActivityBox></ActivityBox>
    <Recommend></Recommend>
    <Dibu></Dibu>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import HomeHeader from './homeHeader/homeHeader.vue'
  import HomeifyBox from './homeIfy/homeifybox.vue'
  import News from './newpeop/newpeoper.vue'
  import TimeLimit from './Timelimit/TimelimitBox.vue'
  import Activity from './activity.vue'
  import ActivityBox from './activeity/activeIfyBox.vue'
  import Recommend from './recommend/recommend.vue'
  import TabBar from './../tabBar/tabBar.vue'
  import Dibu from './../tabBar/dibu.vue'

  export default{
    components : {
      HomeHeader,HomeifyBox,News,TimeLimit,Activity,ActivityBox,Recommend,TabBar,Dibu
    }
  }

</script>


<style>

</style>
