<template>
  <div class="hah">
    <div class="prompt">
      <div class="pic" v-show="hide">
        <img class="qunimeide" src="../../../../static/images/registe/yidongtubiao@2x.png" alt=""/>
      </div>

      <input type="text" placeholder="请输入手机号" v-model="phoneNum" class="phone" value=""/>


      <div class="run">
        <img class="runImg" @touchend="end" @touchstart="start" @touchmove="move"
             src="../../../../static/images/registe/kongjianhuadong@2x.png"
             alt=""/>
        <span class="spans">按住滑块，拖动完成上方拼图</span>
        <div class="imputMask"></div>
      </div>
      <div class="code">
        <input type="text" v-model="email" placeholder="请输入短信验证码" class="phoneText" maxlength="6"/>
        <div class="codeNum" @click="open">获取验证码</div>
      </div>
      <div class="clear"></div>
      <input type="password" v-model="Password" placeholder="请输入密码" class="codeText" value=""/>
      <button class="registe" @click="fn">注册</button>
    </div>
    <div class="ok"><input type="checkbox" v-model="ok" class="ok"/> <span>我同意《服务条款》和蜂购《隐私政策》</span></div>

    <div class="point" v-show="flag">
      <div class="top">
        <p class="title tishi">账号或密码错误
        </p>
      </div>
      <div class="bottom" @click="flag = !flag">确定</div>
    </div>


    <div class="mask" v-show="flag"></div>
  </div>
</template>

<script>

  import LoginHeader from './../Login/loginHeader.vue';


  export default {
    components: {
      LoginHeader: LoginHeader
    },
    data: function () {
      return {
        phoneNum: '',
        Password: '',
        hide: false,
        flag: false,
        startClientX: 0,
        moveX: 0,
        disX: 0,
        timer: null,
        time: 60,
        text: false,
        text1: false,
        email: '',
        arr: ['160239', '298221', '604848', '090760', '443088', '028210'],
        textTwo: false,
        ok: true
      }
    },
    methods: {
      // //手机验证
      // Phone: function () {
      //   var reg = /^[1][34578]\d{9}$/;
      //   this.text = reg.test(this.phoneNum);
      //   if (this.text) {
      //   } else {
      //     this.flag = true;
      //   }
      // },
      //
      // //验证密码
      // PassWord: function () {
      //   var reg = /^[a-zA-Z1-9]\w{5,17}$/;
      //   this.text1 = reg.test(this.Password);
      //   if (this.text1) {
      //   } else {
      //     this.flag = true
      //   }
      // },
      // 触摸img显示滑动验证图片
      start: function (ev) {
        var reg = /^1[34578]\d{9}$/;
        var text = reg.test(this.phoneNum);
        if (this.phoneNum === '' || !text) return;
        this.hide = true;
        //  触摸事件
        ev.preventDefault();
        this.startClientX = ev.touches[0].clientX;
      },
      //  触摸移动事件
      move: function (ev) {
        var reg = /^1[34578]\d{9}$/;
        var text = reg.test(this.phoneNum);
        if (this.phoneNum === '' || !text) return;
        ev = ev || event;
        ev.preventDefault();
        if (ev.touches.length == 1) {
          //滑动时距离浏览器左侧的距离
          this.moveX = ev.touches[0].clientX;
          //实时的滑动的距离-起始位置=实时移动的位置
          this.disX = this.moveX - this.startClientX;
          this.disX = this.disX / 100;
          // 判断this.disX是否超出屏幕
          this.disX = this.disX < 0 ? 0 : this.disX;
          this.disX = this.disX > 3 ? 3 : this.disX;
          // 滑动验证图片left值
          $('.qunimeide').css({
            left: this.disX + 'rem'
          });
          $('.runImg').css({
            left: this.disX + 'rem'
          });
          $('.imputMask').css({
            width: this.disX + .3 + 'rem'
          }).prev().html('');

          if (this.disX <= 0) {
            $('.imputMask').css({
              width: this.disX + 'rem'
            }).prev().html('按住滑块，拖动完成上方拼图');
          }


          //判断小图片是否到达指定位置，到达点击后及发送验证码
          if (this.disX >= 1.3 && this.disX <= 1.45) {
            var that = this;
            $('.codeNum').on('click', function () {
              clearInterval(that.timer);
              that.timer = setInterval(function () {
                that.time--;
                $('.codeNum').html(that.time);
                if (that.time < 1) {
                  $('.codeNum').html('请重新获取验证码').addClass('font');
                }
              }, 1000);
            });
          }
        }
      },
      // 手指离开屏幕时
      end: function () {
        this.hide = false; //滑动图片隐藏
      },
      //点击发送验证码
      open: function () {
        if ($('.codeNum').html() === '请重新获取验证码') {
          var that = this;
          that.time = 60;
          clearInterval(that.timer);
          that.timer = setInterval(function () {
            that.time--;
            $('.codeNum').html(that.time);
            if (that.time < 1) {
              $('.codeNum').html('请重新获取验证码').addClass('font');
            }
          }, 1000);
        }
      },
      //点击注册后向后台发送请求
      fn: function () {
        clearInterval(this.timer);
        this.time = 60;
        var that = this;

        //正则匹配
        var reg = /^1[34578]\d{9}$/;
        var text = reg.test(that.phoneNum);
        var regone = /^[a-zA-Z1-9]\w{5,17}$/;
        var textone = regone.test(that.Password);

        // 判断验证码是否匹配
        for (var i = 0; i < this.arr.length; i++) {
          if (that.email === this.arr[i]) {
            that.textTwo = true;
            break;
          } else {
            that.textTwo = false;
          }
        }

        //如果正则未通过及提示用户
        if (!text || !textone || !that.textTwo) return that.flag = true;

        $.ajax({
          url: 'http://172.25.7.227:8080/MyFirstProject/servlet/UserServlet?opr=checkUserPhone',
          type: 'get',
          data: {
            phoneNumber: that.phoneNum,
            userPassword: that.Password
          },
          // dataType: 'jsonp',
          // jsonp: 'cb',
          // async: true,
          success: function (msg) {
            console.log(msg);
            if (msg === '1') {
              window.location.hash = '/mine';
              that.setCookie(that.phoneNum, 1);
            } else if (msg === '0') {
              that.flag = true;
            }else if (msg === '2'){
              that.flag = true;
              $('.tishi').html('该账号已被注册，请重新输入')
            }
          },
          error: function (err) {
            console.log(err)
          }
        })

      },
      //设置cookie
      setCookie: function (c_name, exdays) {
        var exdate = new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie = "phoneNum" + "=" + c_name;
      },

      //页面加载调用获取cookie值
      mounted: function () {
        this.getCookie()
      }
    }
  }
</script>

<style scoped>

  .imputMask {
    width: 0;
    height: .25rem;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 2;
    border-radius: .125rem;
  }

  .hah {
    box-sizing: border-box;
  }

  .hah {
    font-size: .16rem;
    color: #6a6868;
    position: relative;
  }

  .prompt {
    width: 100%;
    padding: 0 .1rem;
    box-sizing: border-box;
    position: relative;
  }

  .prompt .pic {
    width: 3.55rem;
    height: 1.235rem;
    background: url("../../../../static/images/registe/tupiandatu@2x.png") no-repeat;
    background-size: 100%;
    position: absolute;
    top: -.81rem;
  }

  .prompt .pic img {
    height: .475rem;
    position: absolute;
    top: .35rem;
    left: 0rem;
  }

  .prompt input {
    font-size: .16rem;
    color: #6a6868;
    text-indent: .165rem;
  }

  .prompt .phone {
    width: 3.555rem;
    height: .435rem;
    background: rgba(232, 115, 70, 0.14);
    border: none;
    text-indent: .17rem;
    outline: none;
  }

  .prompt .run {
    width: 3.47rem;
    height: .25rem;
    border: .01rem solid #fac100;
    margin-top: .21rem;
    border-radius: .15rem;
    position: relative;
    background: rgba(232, 115, 70, 0.14);
  }

  .prompt .run span {
    display: inline-block;
    margin-left: .6rem;
    line-height: .25rem;
  }

  .prompt .run img {
    height: .25rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
  }

  .prompt .code {
    margin-top: .205rem;
  }

  .prompt .code .phoneText {
    width: 2.11rem;
    height: .435rem;
    line-height: .435rem;
    background: rgba(232, 115, 70, 0.14);
    border: none;
    outline: none;
    float: left;
    margin-right: .3rem;
  }

  .prompt .codeNum {
    width: 1.115rem;
    height: .435rem;
    border: .01rem solid #fac100;
    background: #ffffff;
    float: left;
    line-height: .435rem;
    text-align: center;
  }

  .prompt .font {
    font-size: .12rem;
  }

  .clear {
    clear: both;
  }

  .prompt .codeText {
    width: 3.555rem;
    height: .435rem;
    margin-top: .2rem;
    background: rgba(232, 115, 70, 0.14);
    border: none;
    outline: none;
  }

  .prompt .registe {
    width: 3.165rem;
    height: .325rem;
    font-size: .185rem;
    color: #ffffff;
    background: #313131;
    border: none;
    border-radius: .15rem;
    margin-top: .2rem;
    margin-left: .265rem;
  }

  .hah .ok {
    margin-top: .2rem;
    margin-left: .1rem;
  }

  .point {

    width: 2.8rem;
    background: #ffffff;
    position: absolute;
    top: .3rem;
    left: 50%;
    margin-left: -1.4rem;
    z-index: 99;
  }

  .point p {
    text-indent: .15rem;
    font-size: .14rem;
    margin-bottom: .1rem;
    margin-top: .1rem;
  }

  .point .top {
    border-bottom: .01rem solid #e7e7e7;
  }

  .point .bottom {
    text-align: center;
    line-height: .4rem;
    font-size: .2rem;
  }

  .mask {
    width: 3.75rem;
    height: 6.67rem;
    background: rgba(0, 0, 0, .6);
    position: absolute;
    top: -2.035rem;
    left: 0;
    z-index: 98;
  }

  #box {
    position: relative;
    width: 100%;
    height: 40px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #e8e8e8;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  }

  .bgColor {
    position: absolute;
    left: 0;
    top: 0;
    width: 40px;
    height: 40px;
    background-color: lightblue;
  }

  .txt {
    position: absolute;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #767676;
    text-align: center;
  }

  .slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 50px;
    height: 40px;
    border: 1px solid #ccc;
    background: #fff;
    text-align: center;
    cursor: move;
  }

  .slider > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slider.active > i {
    color: green;
  }
</style>
