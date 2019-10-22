<template>
  <div class="brand" :style="{height: height+'px'}">
    <div class="inner-content">
      <div class="title">
        <div>
          <img src="../../assets/images/brand/title.png" />
        </div>
      </div>
      <!-- 轮播区域 -->
      <div class="banner">
        <slider class="slide" @slide="slide" ref="slider" :options="options">
          <slideritem>
            <div class="item" @click="push(0)">
              <img src="../../assets/images/brand/item6.gif" alt srcset />
            </div>
          </slideritem>
          <!-- <slideritem>
          <div
            class="item"
            @click="push(1)"
          >
            <img
              src="../../assets/images/brand/item2.gif"
              alt
              srcset
            />
          </div>
        </slideritem>
        <slideritem>
          <div
            class="item"
            @click="push(2)"
          >
            <img
              src="../../assets/images/brand/item3.gif"
              alt
              srcset
            />
          </div>
          </slideritem>-->
          <slideritem>
            <div class="item" @click="push(1)">
              <img src="../../assets/images/brand/item5.gif" alt srcset />
            </div>
          </slideritem>
        </slider>
        <div class="left-btn" @click="last">
          <img src="../../assets/images/brand/left.png" alt />
        </div>
        <div class="right-btn" @click="next">
          <img src="../../assets/images/brand/right.png" alt srcset />
        </div>
      </div>
      <!-- 分页部分 -->
      <div class="page">
        <div class="inner">
          <ul class="list">
            <!-- <li :class="{active: current_index==0}"></li> -->
            <!-- <li :class="{active: current_index==1}"></li> -->
            <li :class="{active: current_index==0}"></li>
            <li :class="{active: current_index==1}"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import { setTimeout } from "timers";
import wechat from "../../lib/wechat";
export default {
  data() {
    return {
      height: 0,
      current_index: 0,
      options: {
        // itemAnimation: true,
        centeredSlides: true,
        loopedSlides: 2,
        slidesToScroll: 1,
        pagination: false,
        currentPage: 1,
        // autoplay: 3000,
        loop: true
      },
      flag: true
    };
  },
  created() {
    this.height = window.innerHeight;
    wechat.customShare(
      "启赋3活动专区",
      "立即探索启赋3精彩世界",
      "/pages/illuma3/brand/img/share.jpg"
    );
  },
  methods: {
    last() {
      if (this.flag) {
        this.flag = false;
        this.$refs.slider.$emit("autoplayStop");
        this.$refs.slider.$emit("slidePre");
        setTimeout(() => {
          this.flag = true;
          this.$refs.slider.$emit("autoplayStart", 3000);
        }, 550);
      }
    },
    next() {
      if (this.flag) {
        this.flag = false;
        this.$refs.slider.$emit("autoplayStop");
        this.$refs.slider.$emit("slideNext");
        setTimeout(() => {
          this.flag = true;
          this.$refs.slider.$emit("autoplayStart", 3000);
        }, 550);
      }
    },
    slide(data) {
      this.current_index = data.currentPage;
    },
    push(index) {
      if (index === 0) {
        window.location.href =
          "http://wyeth.kenuonet.com/1907/index.html?source=1";
      }
      //  else if (index === 1) {
      //   this.$router.push("/shot");
      // } else if (index === 2) {
      //   this.$router.push("/family/atwo");
      // }
      else if (index === 1) {
        window.location.href =
          "https://illumacare.beats-digital.com/?hmsr=offline&hmpl=&hmcu=&hmkw=&hmci=&from=groupmessage&isappinstalled=0";
      }
    }
  },
  components: {
    slider,
    slideritem
  }
};
</script>

<style lang="less" scoped>
.brand {
  width: 100%;

  position: relative;
  .inner-content {
    background: url("../../assets/images/brand/bg.png") no-repeat left top;
    background-size: cover;
    height: 100%;
    padding-bottom: 0.5rem;
  }
  .title {
    img {
      width: 100%;
    }
  }
  .banner {
    position: relative;
    .left-btn,
    .right-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1000;
      img {
        width: 16px;
      }
    }
    .left-btn {
      left: 9px;
    }
    .right-btn {
      right: 9px;
    }
    /deep/ .slide {
      .slider-item {
        transform: scale(0.8);
        transition-timing-function: ease;
        transition-duration: 300ms;
        width: 5.8rem;
        margin-left: -18px;
        position: relative;
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 998;
        }
      }
      .slider-item.slider-active {
        transform: scale(1);
        z-index: 999;
        &::before {
          display: none;
        }
      }
      .slider-item.slider-active-copy {
        transform: scale(1);
        z-index: 999;
      }
    }
  }
  .page {
    margin-top: 0.3rem;
    .inner {
      .list {
        display: flex;
        justify-content: center;
        align-items: center;
        li {
          width: 0.3rem;
          height: 0.3rem;
          margin-right: 0.1rem;
          background: url("../../assets/images/brand/normal.png") no-repeat left
            top;
          background-size: 0.3rem 0.3rem;
          &.active {
            background-image: url("../../assets/images/brand/select.png");
          }
        }
      }
    }
  }
}
</style>