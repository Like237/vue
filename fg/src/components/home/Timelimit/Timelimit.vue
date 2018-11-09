<template>
  <div class="time-limit border">
    <div class="top">
      <h2 class="pingfang">{{text}}</h2>
      <slot name="time"></slot>
    </div>
    <div class="footer">
      <div class="left">
        <slot name="offer"></slot>
        <slot name="line"></slot>
      </div>
      <div class="right">
        <img :src="offerPic" alt="">
      </div>
    </div>


  </div>
</template>


<script>

  export default {
    props: ['text', 'offer', 'price', 'offerPic'],
    data: function () {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        date1: new Date()
      }
    },
    mounted: function () {
      var that = this;
      var date2 = that.date1.getTime() + 1000 * 60 * 60 * 24;

      var date3 = date2 - that.date1.getTime();     //时间差的毫秒数

      var date4 = date3 / 1000;                     //时间差的秒钟数
      setInterval(function () {
        date4--;
                                                    //计算出小时数
        that.hours = Math.floor(date4 / (3600));
        var leave2 = date4 % (3600);                //计算小时数后剩余的秒数
        that.minutes = Math.floor(leave2 / (60));
                                                    //计算相差秒数
        var leave3 = leave2 % (60);                 //计算分钟数后剩余的秒数
        that.seconds = Math.round(leave3 % 60);

        that.hours = that.hours >= 10 ? that.hours : '0' + that.hours;
        that.minutes = that.minutes >= 10 ? that.minutes : '0' + that.minutes;
        that.seconds = that.seconds >= 10 ? that.seconds : '0' + that.seconds;

        that.$emit('hours', that.hours);
        that.$emit('minutes', that.minutes);
        that.$emit('seconds', that.seconds);
      }, 1000)

    },

  }

</script>

<style scoped>
  .time-limit {
    width: 49.5%;
    height: 1.06rem;
    float: left;
    margin-top: .14rem;
    font-size: .12rem;
    margin-right: -.01rem;
  }

  .time-limit .top {
    display: flex;
  }

  .time-limit .top h2 {
    font-weight: 600;
    font-size: .185rem;
    color: #201e1e;
    margin-left: .1rem;
    margin-top: -.01rem;
  }

  .time-limit .top .time {
    height: .215rem;
    display: flex;
    margin-left: .1rem;
  }

  .time-limit .top .time P {
    width: .215rem;
    height: .215rem;
    border-radius: 50%;
    text-align: center;
    line-height: .215rem;
    background-color: #000000;
    font-size: .145rem;
    color: #ffff;
  }

  .time-limit .top .p {
    margin-top: .02rem;
    font-size: .145rem;
    color: #201e1e;
    margin-left: .1rem;
  }

  .time-limit .top .time span {
    margin: -.01rem .035rem 0 .035rem;
    font-size: .16rem;
    color: #0f0e0e;
    font-weight: 500;
  }

  .time-limit .footer {
    position: relative;
    display: flex;
  }

  .time-limit .footer .left {
    margin-top: .3rem;
    margin-left: .15rem;
  }

  .time-limit .footer .left .titleone {
    font-family: 'DINCond-Black';
    font-size: .255rem;
    color: #de0101;
  }

  .time-limit .footer .left .titleone span {
    font-size: .16rem;
    color: #de0101;
  }

  /*删除线*/
  .time-limit .footer .left .line {
    text-decoration: line-through;
  }

  .time-limit .footer .left .title {
    font-family: 'DINCond-Black';
    font-size: .13rem;
    color: #837878;
    margin-left: .1rem;
  }

  /*字体加粗*/
  .time-limit .footer .left .weight {
    font-family: 'DINCond-Black';
    font-size: .16rem;
    color: #484040;
  }

  .time-limit .footer .right {
    position: absolute;
    top: 0;
    right: .28rem;
  }

  .time-limit .footer .right img {
    width: .325rem;
    height: .665rem;
    margin-top: .13rem;
    margin-left: .51rem;
  }

</style>
