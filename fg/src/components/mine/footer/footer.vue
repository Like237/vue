<template>
  <div class="footer" v-show="flag" @click="del">
    <p></p>
    <P>退出</P>
    <P></P>
  </div>
</template>

<script>

  export default {
    props : ['getUserName'],
    data : function () {
      return {
        text : '登录/注册'
      }
    },
    computed : {
      flag : function () {
        if(this.getUserName === '登录/注册'){
          return false ;
        }
        return true ;
      }
    },
    methods : {
      //设置cookie
      setCookie: function (c_name, exdays) {
        var exdate = new Date();//获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);//保存的天数
        //字符串拼接cookie
        window.document.cookie = "phoneNum" + "=" + c_name;
      },
      del : function () {
        this.setCookie('',-1);

        if(document.cookie.split('=')[1] === ''){
          this.$emit('getName',this.text);
        }
        window.location.hash = '/home';
      }
    }
  }

</script>


<style scoped>
  .footer {
    width: 100%;
    height: .3rem;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    line-height: .3rem;
    font-size: .16rem;
    color: #302f2e;
    z-index: 9999;
  }


  .footer p:nth-of-type(3) {
    margin-right: .1rem;
  }

  .footer a {
    color: #302f2e;
    text-decoration: none;
  }


</style>
