<template>
  <div class="tab-bar-item" @click="fn">
    <img v-show="!flag" :src="TABbarPic" alt="">
    <img v-show="flag" :src="activePic" alt="">
    <p :class="{active : flag}">{{text}}</p>
  </div>
</template>


<script>


  export default {
    props: ['text', 'TABbarPic', 'index', 'activeIndex', 'activePic'],
    data: function () {
      return {}
    },
    computed: {
      flag: function () {
        if (this.index === this.activeIndex) {
          return true;
        }
        return false;
      }
    },
    methods: {
      fn: function () {
        this.$emit('getIndex', this.index)
      }
    }
  }

</script>


<style scoped>
  .tab-bar-item {
    text-align: center;
    width: 25%;
    float: left;
    font-size: .13rem;
    color: rgb(14, 13, 13);

  }

  .tab-bar-item img {
    width: .24rem;
    height: .24rem;
    margin-top: .03rem;
  }

  .tab-bar-item .active {
    color: rgb(246, 210, 1);
  }


</style>
