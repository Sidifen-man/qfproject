<template>
  <div class="qiyun">
    <header>
      <img src="../../assets/images/qiyun/top.png" alt />
    </header>
    <div :class="'img'+(i+1)" v-for="(item,i) in 10" :key="i">
      <img :src="require('../../assets/images/qiyun/img'+(i+1)+'.png')" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          className: "",
          imgSrc: ""
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.qiyun {
  background: url("../../assets/images/qiyun/bg.png") no-repeat;
  background-size: cover;
  height: 100%;
  img {
    width: 7.5rem;
    height: auto;
  }
  .img1 {
    margin-top: -1.35rem;
  }
  .img2 {
    margin-top: 0.46rem;
  }
  .img3 {
    margin-top: 0.54rem;
  }
  .img4 {
    margin: 1.5rem 0;
  }
  .img5 {
    margin-bottom: 0.62rem;
  }
  .img6 {
    margin-bottom: 1.27rem;
  }
  .img7 {
    margin-bottom: 1.48rem;
  }
  .img8 {
    margin-bottom: 0.66rem;
  }
  .img9 {
    margin-bottom: 1.34rem;
  }
  .img10 {
    margin-bottom: 0.49rem;
  }
}
</style>