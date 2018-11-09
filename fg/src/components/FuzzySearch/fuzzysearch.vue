<template>
  <div>
    <!--<Hone></Hone>-->
    <Mohu></Mohu>
    <Body></Body>
    <div class="search-content">
      <ul class="search-content-left">
        <li>吊灯</li>
        <li>创意</li>
        <li>个性</li>
      </ul>
      <ul class="search-content-right">
        <li>工业</li>
        <li>复古</li>
        <li>卧室</li>
      </ul>
    </div>
    <div class="search-content">
      <ul class="search-content-left">
        <li>吊灯</li>
        <li>现代</li>
        <li>简约</li>
      </ul>
      <ul class="search-content-right">
        <li>创意</li>
        <li>餐厅</li>
      </ul>
    </div>
    <div class="search-content">
      <ul class="search-content-left">
        <li>吊灯</li>
        <li>客厅</li>
        <li>欧式</li>
      </ul>
      <ul class="search-content-right">
        <li>复式</li>
        <li>灯具</li>
      </ul>
    </div>
    <div class="search-content">
      <ul class="search-content-left">
        <li>吊灯</li>
        <li>客厅</li>
        <li>简约现代</li>
      </ul>
      <ul class="search-content-right">
        <li>圆形</li>
        <li>吸顶</li>
        <li>玻璃</li>
      </ul>
    </div>
    <div class="search-content">
      <ul class="search-content-left">
        <li>吊灯</li>
        <li>卧室</li>
      </ul>
      <ul class="search-content-right">
        <li>工业</li>
        <li>吸顶</li>
        <li>欧式</li>
      </ul>
    </div>
    <div class="search-content">
      <ul class="search-content-left">
        <li>吊灯</li>
        <li>北欧</li>
      </ul>
      <ul class="search-content-right">
        <li>欧式</li>
        <li>简约</li>
        <li>温馨</li>
      </ul>
    </div>
  </div>
</template>

<script>

  import Mohu from './mohu.vue'
  import Body from './body.vue'

  export default {
    components:{
      Mohu,Body
    }
  }
</script>

<style scoped>


.search-content{
  width: 100%;
  height: .5rem;
  border-bottom: .001em solid #e6e6e6;
  font-size: .2rem;
}

.search-content-left li{
  margin-left: .08rem;
  height: .4rem;
  font-size: .15rem;
  line-height: .5rem;
  float: left;
  color: #333333;
  padding: 0 .05rem;
}

.search-content-right li{
  width: .5rem;
  text-align: center;
  border-radius: .2rem;
  float: right;
  font-size: .15rem;
  height: .26rem;
  color: #333333;
  line-height: .26rem;
  margin-right: .08rem;
  margin-top: .1rem;
  background-color: #eeeeee;
}


</style>
