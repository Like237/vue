<template>
  <div class="loginSection">
    <LoginHeader></LoginHeader>
    <div class="username">
      <img src="./../../../../static/images/login/zhanghao@2x.png" alt=""/>
      <input type="text" v-model="user" placeholder="请输入账号" value=""/>
    </div>
    <div class="password">
      <img src="./../../../../static/images/registe/mima@2x.png" alt=""/>
      <input type="password" v-model="usePass" placeholder="请输入密码" value=""/>
    </div>
    <div class="prompt">
      <router-link to="/TabBarVue">免费注册</router-link>
      <span>忘记密码</span>
    </div>
    <div class="btn">
      <button @click="fn">登录</button>
    </div>
    <p class="ortext">或用一下方式登录</p>

    <div class="or">
      <img src="./../../../../static/images/login/weixin@3x.png" alt=""/>
      <img src="./../../../../static/images/login/qq@3x.png" alt=""/>
      <img src="./../../../../static/images/login/weibo@3x.png" alt=""/>
    </div>

    <!--提示错误-->
    <div class="point" v-show="flag">
      <div class="top">
        <p>账号或密码错误，请重新输入。</p>
      </div>
      <div class="bottom" @click="flag=!flag">确定</div>
    </div>
    <div class="mask" v-show="flag"></div>
  </div>
</template>

<script>


  import LoginHeader from './loginhome.vue'

  export default {

    props: ['text'],

    data: function () {
      return {
        user: '',
        usePass: '',
        flag: false,
      }
    },
    components: {
      LoginHeader
    },
    methods: {
      fn: function () {
        var that = this;
        //手机验证 密码正则匹配
        var reg = /^1[34578]\d{9}$/;
        var text = reg.test(this.user);
        var regone = /^[a-zA-Z1-9]\w{5,17}$/;
        var textone = regone.test(this.usePass);

        //如果正则不匹配，
        if (!text || !textone) return that.flag = true;
        $.ajax({
          url: 'http://172.25.7.227:8080/MyFirstProject/servlet/UserServlet?opr=login',
          type: 'get',
          data: {
            phoneNumber: this.user,
            userPassword: this.usePass
          },
          // dataType: 'jsonp',
          // jsonp: cb',
          // async: true,
          success: function (msg) {
            if (msg === '1') {
              window.location.hash = '/mine';
              that.setCookie(that.user, 1);
            } else if (msg === '0') {
              that.flag = true;
            }
          },
          error: function (err) {
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
      //读取cookie
      //   getCookie: function () {
      //     if (document.cookie.length > 0) {
      //       var arr = document.cookie.split(' ; ');//这里显示的格式需要切割一下
      //       for (var i = 0; i < arr.length; i++) {
      //         var arr2 = arr[i].split('=');//再次切割
      //         //判断查找相对应的值
      //         if (arr2[0] == 'user') {
      //           this.user = arr2[1]; //保存到保存数据的地方
      //           console.log(this.user)
      //         }
      //       }
      //     }
      //   },
      //   //清除cookie
      //   clearCookie: function () {
      //     this.setCookie("", -1);//修改2值都为空，天数为负1天就好了
      //   }
      // }
      // ,
      //页面加载调用获取cookie值
      mounted: function () {
        this.getCookie()
      }
    }
  }

</script>

<style scoped>
  .loginSection {
    position: relative;
    font-family: PFbold;
    font-size: .3rem;
  }

  .username {
    width: 2.905rem;
    height: .23rem;
    margin: .52rem auto 0 auto;
    border-bottom: .01rem solid #fac100;
  }

  .username img, .password img {
    width: .18rem;
    float: left;
  }

  .password img {
    height: .21rem;
  }

  .username input, .password input {
    width: 2rem;
    font-size: .16rem;
    vertical-align: top;
    height: .3rem;
    margin-left: .175rem;
    border: none;
    outline: none;
    line-height: .25rem;
    background: transparent;
    margin-top: -.07rem;
  }

  .password {
    width: 2.905rem;
    height: .23rem;
    margin: .65rem auto 0 auto;
    border-bottom: .01rem solid #fac100;
  }

  .password img {
    margin-top: -.015rem;
  }

  .prompt {
    width: 2.905rem;
    height: .23rem;
    margin: .16rem auto 0 auto;
    position: relative;
    font-size: .16rem;
    color: #6a6868;
  }

  .prompt a {
    text-decoration: none;
    font-size: .16rem;
    color: #6a6868;
  }

  .prompt span {
    display: inline-block;
    position: absolute;
    right: 0;
  }

  .loginSection .btn {
    width: 2.9rem;
    margin: .595rem auto 0 auto;
  }

  .loginSection button {
    width: 2.9rem;
    height: .32rem;
    font-size: .185rem;
    color: #ffffff;
    background: #2b2929;
    border-radius: .16rem;
    border: none;
    line-height: .32rem;
    outline-color: transparent;
  }

  .ortext {
    margin-top: .265rem;
    text-align: center;
    font-size: .16rem;
    color: #6a6868;
  }

  .or {
    width: 1.82rem;
    margin: .38rem auto 0 auto;
    text-align: center;
  }

  .or img {
    width: .3rem;
    margin-right: .35rem;
  }

  .or img:last-of-type {
    margin-right: 0;
  }

  .point {
    width: 2.8rem;
    background: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -1.4rem;
    z-index: 99;
    margin-top: -.395rem;
  }

  .point p {
    text-align: center;
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
    background: rgba(0, 0, 0, .5);
    position: absolute;
    top: -0rem;
    left: 0;
    z-index: 98;
  }
</style>
