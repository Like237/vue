<template>
  <div>
    <div class="head">
      <div class="search">
        <img src="./../../../assets/fuzzimg/sousuo@2x.png" alt="">
        <input type="text" placeholder="吊灯" v-model="title" @keyup="show">
        <img src="./../../../assets/fuzzimg/shanchu@2x.png" alt="" @click="fn">
      </div>
      <router-link to="/home">
        <div class="cancel">
          <h1>取消</h1>
        </div>
      </router-link>

    </div>
   <router-link to="/liebiao">
     <div class="mask" v-show="flag" v-for="item in data">
       <ul class="search-content-left">
         <li>{{item.productname}}</li>
       </ul>
       <ul class="search-content-right">
         <li>{{item.productCategoriesName}}</li>
       </ul>
     </div>
   </router-link>
  </div>
</template>

<script>

  export default  {
    data : function () {
      return{
        title : '',
        flag : false,
        data : []
      }
    },
    methods : {
      fn : function () {
        this.title = '';
      },
      show : function () {
        var that = this ;
      if(this.title === ''){
        this.flag = false ;
        this.$emit('getFlag',this.flag);
      }else {
        this.flag = true ;
        this.$emit('getFlag',this.flag);
        $.ajax({
          url: 'http://172.25.7.227:8080/MyFirstProject/servlet/ProductServlet?opr=getInfoByproductCategoriesName',
          type: 'get',
          data: {
            productCategoriesName : this.title
          },
          // dataType: 'jsonp',
          // jsonp: cb',
          // async: true,
          success: function (msg) {
            var msg = JSON.parse(msg);
            that.data = msg ;
          },
          error: function (err) {
            console.log(err)
          }
        })
      }
      }
    }
  }

</script>

<style scoped>

  .head{
    width: 100%;
    font-size: .14rem;
    height: .5rem;
    background-color: #fac100;
    overflow: hidden;
    position: relative;
  }

  .head h1{
    font-size: .14rem;
    text-indent: .1rem;
    color: #fefefe;
    font-weight: 100;
  }

  .cancel{
    width: 15%;
    height: .2rem;
    margin-top: .17rem;
    float: right;
  }
  .search {
    width: 2.915rem;
    height: .3rem;
    border-radius: .5rem;
    font-size: .15rem;
    background-color: #fff;
    position: absolute;
    top: .1rem;
    left: .2rem;
  }

  .search img{
    width: .13rem;
    margin-left: .1rem;
    margin-top: .1rem;
  }

  .search input{
    width: 75%;
    height: .2rem;
    font-size: .14rem;
    text-indent: .1rem;
    border: none;
    outline: none;
  }


  .mask{
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
