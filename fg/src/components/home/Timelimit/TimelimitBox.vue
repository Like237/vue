<template>
  <div class="timeLimit-box">
    <Timelimit offerPic="./static/home/homeify/xianshigoushangpin@2x.png" text="限时购"
    @hours="hours" @minutes="minutes" @seconds="seconds">
      <div class="time" slot="time">
        <p>{{hour}}</p>
        <span>:</span>
        <p>{{minute}}</p>
        <span>:</span>
        <p>{{second}}</p>
      </div>
      <p class="pingfang titleone" slot="offer"><span>￥</span>{{188}}</p>
      <p class="pingfang title line" slot="line"><span>￥</span>{{388}}</p>
    </Timelimit>
    <div class="time-line"></div>
    <Timelimit offerPic="./static/home/homeify/shangxinchanpin@2x.png" text="每日上新">
      <div class="p pingfang" slot="time">新款发布</div>
      <div slot="offer" class="pingfang">
        澳洲进口Swisse<br>
        蔓越莓口服液
      </div>
      <p class="title weight" slot="line"><span class="pingfang">￥</span>{{99}}</p>
    </Timelimit>
    <div class="clearfix"></div>
  </div>
</template>


<script>
  import Timelimit from './Timelimit.vue'

  export default {
    data: function () {
      return {
        hour: 0,
        minute: 0,
        second: 0
      }
    },
    components: {
      Timelimit
    },
    methods: {
      hours : function (data) {
        this.hour = data;
      },
      minutes : function (data) {
        this.minute = data;
      },
      seconds : function (data) {
        this.second = data;
      }

    }
  }

</script>

<style scoped>
  .timeLimit-box {
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #dcdcdc;
  }

  .time-line {
    height: 1.06rem;
    width: .01rem;
    background-color: #dcdcdc;
    float: left;
    margin-top: .14rem;
  }


</style>
