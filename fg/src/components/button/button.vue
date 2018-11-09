<template>
  <div>
    <button @click="fn">显示</button>
    <Item :show="show" @getShow="get"></Item>
  </div>
</template>

<script>
  import Item from './item.vue'

  export default {
    data : function () {
      return {
        show : false
      }
    },
    components : {
      Item
    },
    methods : {
      fn : function () {
        this.show = true;
      },
      get :function (data) {
        this.show = !data ;
      }
    }

  }

</script>


<style scoped>

  button {
    width: 1rem;
    height: .3rem;
    font-size: .16rem;
  }

</style>
