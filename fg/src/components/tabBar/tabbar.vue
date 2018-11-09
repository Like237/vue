<template>
  <div class="tab-bar">
    <router-link to="/home">
      <TabBarItem @getIndex="getIndex" :activeIndex="activeIndex" text="首页"
                  index="home" TABbarPic="./static/home/footer/weidianliang1@2x.png"
                  activePic="./static/home/footer/dibuicon1@2x.png"></TabBarItem>
    </router-link>
    <router-link to="/shopping">
      <TabBarItem text="购物" TABbarPic="./static/home/footer/dibuiocn2@2x.png"
                  index="shopping" @getIndex="getIndex" :activeIndex="activeIndex"
                  activePic="./static/home/footer/icon2dianliang@2x.png"></TabBarItem>
    </router-link>
    <Classify text="分类"  TABbarPic="./static/home/footer/dibuiocn3@2x.png"></Classify>
    <router-link to="/mine">
      <TabBarItem text="我的" TABbarPic="./static/home/footer/dibuiocn4@2x.png"
                  index="mine" @getIndex="getIndex" :activeIndex="activeIndex"
                  activePic="./static/home/footer/icon4@2x.png"></TabBarItem>
    </router-link>
  </div>
</template>


<script>
  import TabBarItem from './tabBarItem.vue'
  import Classify from './classify.vue'

  export default {
    components: {
      TabBarItem,Classify
    },
    data: function () {
      return {
        activeIndex: ''
      }
    },
    created: function () {
      this.activeIndex = window.location.hash.substr(2).split('/')[0] || 'home'
    },
    methods: {
      getIndex: function (data) {
        this.activeIndex = data;
      }
    }
  }

</script>


<style scoped>
  .tab-bar {
    width: 100%;
    height: .48rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
  }


</style>
