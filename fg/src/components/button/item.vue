<template>
  <div>
    <button v-show="show" @click="fn">隐藏</button>
  </div>
</template>

<script>

  export default {
    props : ['show'],
    methods : {
      fn : function () {
        this.$emit('getShow',this.show)
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
