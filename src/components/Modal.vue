<template>
  <div class="modal">
    <div class="content">

    </div>
  </div>
</template>

<script>
  export default {
    // props: {
    //   show: {
    //     type: Boolean,
    //     default: true
    //   }
    // },
    
  }
</script>

<style lang="less" scoped>
.modal{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  width: 7.5rem;
  height: 5rem;
  z-index: 100;
  .content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: url('../assets/images/modal/bg.png') no-repeat;
    background-size: cover;
    width: 5.67rem;
    height: 7.13rem;
    z-index: 100;
  }
}
</style>