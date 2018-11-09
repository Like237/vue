<template>
  <div class="searchBox">
    <div id="search">
      <SearchBack @getFlag="fn"></SearchBack>
      <!--热搜-->
      <div v-show="flag">
        <div class="hotSearch">
          <ul>
            <li>热搜</li>
            <li class="gery">欧式吊灯</li>
            <li class="gery">上衣</li>
            <li class="gery">迷你小风扇</li>
          </ul>
        </div>

        <!--最近搜索-->
        <div class="lately">
          <div class="title">
            <span>最近搜索</span>
            <img src="./../../../../static/images/search/lajitongshanchu@2x.png" alt=""/>
          </div>
          <ul class="late">
            <li>毛衣</li>
            <li>手环手链脚链</li>
            <li style="margin-right: .5rem">手表女</li>
            <li>毛绒布艺玩偶</li>
            <li>衬衣</li>
            <li>裤子</li>
          </ul>
          <div class="clear" style="clear: both"></div>
        </div>

        <!--最热搜索-->
        <div class="lately">
          <div class="title">
            <span>最近搜索</span>
          </div>
          <ul class="late" style="margin-top: .1rem">
            <li>手表女</li>
            <li>小米手机</li>
            <li style="margin-right: .5rem">数据线</li>
            <li>毛绒布艺玩偶</li>
            <li>衬衣</li>
            <li style="margin-right: .5rem">T恤</li>
            <li>笔记本电脑</li>
            <li>夹克</li>
            <li>卫衣</li>
            <li>休闲裤</li>
          </ul>
          <div class="clear" style="clear: both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchBack from './searchBack.vue'

  export default {
    data: function () {
      return {
        flag: true
      }
    },
    components: {
      SearchBack
    },
    methods :{
      fn:function (data) {
        this.flag = !data ;
      }
    }

  }
</script>

<style scoped>
  .searchBox {
    width: 100%;
    height: 6.67rem;
  }

  #search {
    width: 100%;
    height: 100%;
    background: #fff;
  }

  .search {
    width: 100%;
    height: .44rem;
    background: #fac100;
    padding: .085rem .14rem;
    box-sizing: border-box;
    display: flex;
  }

  .search .searchText {
    width: 3.13rem;
    height: .3rem;
    border-radius: .26rem;
    background: #FFFFFF;
  }

  .search .searchText img {
    margin: .041rem .0509rem;
    width: .24rem;
    float: left;
  }

  .search .searchText input {
    margin-top: .02rem;
    vertical-align: top;
    width: 2.53rem;
    height: .273rem;
    font-size: .14rem;
    color: #999999;
    line-height: .24rem;
    outline: none;
    border: none;
  }

  .search .romove {
    width: .26rem;
    margin: 0 0 0 .1rem;
  }

  .hotSearch {
    margin-top: .1rem;
    line-height: .23rem;
  }

  ul {
    margin-top: .195rem;
  }

  .hotSearch li {
    margin-left: .2rem;
  }

  .hotSearch ul {
    display: flex;
  }

  .hotSearch li:first-of-type, .lately .title span {
    font-size: .14rem;
    color: #333333;
    font-weight: 600;
  }

  .hotSearch .gery {
    font-size: .12rem;
    padding: .05rem .1rem;
    text-align: center;
    line-height: .13rem;
    background: #eeeeee;
    border-radius: .13rem;
  }

  .lately {
    padding-left: .185rem;
    box-sizing: border-box;
    margin-top: .485rem;
  }

  .lately .title {
    display: flex;
    justify-content: space-between;
  }

  .lately .title img {
    width: .24rem;
    height: .24rem;
    margin-top: -.1rem;
    margin-right: .1rem;
  }

  .lately .late {
    /*width: 3.75rem;*/
  }

  .lately .late ul {

  }

  .lately .late li {
    font-size: .12rem;
    padding: .05rem .15rem;
    text-align: center;
    line-height: .13rem;
    background: #eeeeee;
    border-radius: .13rem;
    margin: 0 .1rem .1rem 0;
    float: left;
  }
</style>
