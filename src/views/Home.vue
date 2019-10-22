<template>
  <div class="home" :class="{open: is_dialog}" :style="{height: height+'px'}">
    <div class="home-inner">
      <!-- 首页轮播 -->
      <div class="banner">
        <slider class="slide" @slide="slide" ref="slider" :options="slide_opt">
          <slideritem>
            <div class="item">
              <img src="../assets/images/index/title.png" alt srcset />
            </div>
          </slideritem>
          <slideritem>
            <div class="item">
              <img src="../assets/images/index/title.png" alt srcset />
            </div>
          </slideritem>
          <slideritem>
            <div class="item">
              <img src="../assets/images/index/title.png" alt srcset />
            </div>
          </slideritem>
        </slider>
      </div>
      <!-- 分页 -->
      <!-- 分页部分 -->
      <div class="page">
        <div class="inner">
          <ul class="list">
            <li :class="{active: current_index==0}"></li>
            <li :class="{active: current_index==1}"></li>
            <li :class="{active: current_index==2}"></li>
          </ul>
        </div>
      </div>

      <!-- 第一个部分 -->
      <section class="part">
        <div class="animate">
          <img
            src="../assets/images/index/opo.png"
            :style="{transform: 'translate('+ 5*count +'px, '+10*count+'px)'}"
            alt
          />
        </div>
        <div class="animate animate2">
          <img
            src="../assets/images/index/pop.png"
            :style="{transform: 'translate(-'+ 5*count +'px, '+10*count+'px)'}"
            alt
          />
        </div>
        <div class="title">
          <img src="../assets/images/index/set1.png" alt />
        </div>
        <Card />
      </section>
      <section class="part part2">
        <div class="title">
          <img src="../assets/images/index/set2.png" alt />
        </div>
        <div class="inner" @click="QrScan">
          <img src="../assets/images/index/pic.png" alt />
        </div>
      </section>
    </div>
    <!-- <Modal /> -->
    <!-- <el-dialog
      :visible.sync="is_dialog"
      :lock-scroll="true"
      :show-close="false"
      :close-on-click-modal="false"
    >-->
    <div class="modal" v-show="is_dialog">
      <div class="content">
        <img @click="close" class="close" src="../assets/images/modal/close.png" alt />
        <img @click="close" class="confirm" src="../assets/images/modal/button.png" alt />
      </div>
    </div>
    <!-- </el-dialog> -->
  </div>
</template>

<script>
import { slider, slideritem } from "vue-concise-slider";
import Card from "../components/CardTest";
import { mapState } from "vuex";
import { stat } from "fs";
export default {
  name: "home",
  data() {
    return {
      current_index: 0,
      slide_opt: {
        centeredSlides: true,
        loopedSlides: 2,
        slidesToScroll: 1,
        pagination: false,
        loop: true
        // autoplay: 2500
      },

      show: true,
      height: 0,
      dialogVisible: true,
      count: 0
    };
  },
  created() {
    const isPopped = localStorage.getItem("popped");
    this.dialogVisible = isPopped === null;
    this.height = window.innerHeight;
  },
  computed: mapState({
    is_dialog: state => state.is_dialog
  }),
  methods: {
    down() {
      this.count += 1;
      if (this.count > 8) {
        this.count = 8;
      }
    },
    up() {
      this.count -= 1;
      if (this.count < -1) {
        this.count = -1;
      }
    },
    get_data() {
      var temp = [
        {
          key: Math.random(),
          pic: require("../assets/images/index/animate1.gif"),
          url: "/family/blueDiamond"
        },
        {
          key: Math.random(),
          pic: require("../assets/images/index/animate2.gif"),
          url: "/organic"
        },
        {
          key: Math.random(),
          pic: require("../assets/images/index/animate3.gif"),
          url: "/family/atwo"
        },
        {
          key: Math.random(),
          pic: require("../assets/images/index/animate4.gif"),
          url: "/family/qiyun"
        },
        {
          key: Math.random(),
          pic: require("../assets/images/index/animate5.gif"),
          url: "/ha"
        }
      ];
      this.card_list = this.card_list.concat(temp);
    },
    slide(data) {
      this.current_index = data.currentPage;
    },
    push(path) {
      this.$router.push(path);
    },
    close() {
      this.$store.commit("set_dialog", false);
    },
    submit() {
      if (this.card_list.length < 2) {
        this.get_data();
      }
    },

    QrScan() {
      // console.log(window.location.href.split("#")[0]);
      this.$axios({
        url: "/WeChat/GetTestJSSDKAuth",
        methods: "get",
        params: {
          url: window.location.href.split("#")[0]
        }
      }).then(response => {
        var appId = response.data.result.appId;
        var timestamp = response.data.result.timestamp;
        var nonceStr = response.data.result.nonceStr;
        var signature = response.data.result.signature;
        var jsApiList = response.data.result.appId;
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: appId, // 必填，公众号的唯一标识
          timestamp: timestamp, // 必填，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名
          jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
        });
        wx.ready(function() {
          wx.scanQRCode({
            needResult: 1,
            scanType: ["qrCode"],
            success: function(res) {
              var url = res.resultStr;
              window.location.href = url;
            }
          });
        });
      });
    }
  },
  components: {
    slider,
    slideritem,
    Card
  },
  beforeRouteEnter(to, from, next) {
    // const paths = [
    //   "/family/blueDiamond",
    //   "/organic",
    //   "/family/atwo",
    //   "/family/qiyun",
    //   "/ha"
    // ];
    next(vm => {
      var link = localStorage.getItem("link");
      if (link === "true") {
        vm.$store.commit("set_dialog", false);
      } else if (link === "false") {
        vm.$store.commit("set_dialog", false);
      }
    });
  },
  beforeRouteLeave(to, from, next) {
    // ...
    localStorage.setItem("link", false);
    next();
  }
};
</script>
<style lang="less" scoped>
.home {
  /deep/ .el-dialog__header {
    padding: 0;
  }
  /deep/ .el-dialog__body {
    display: none;
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 100;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../assets/images/modal/bg.png") no-repeat;
    background-size: cover;
    width: 5.67rem;
    height: 7.13rem;
    z-index: 100;
    .close {
      position: absolute;
      width: 0.34rem;
      height: 0.34rem;
      top: 0.39rem;
      right: 0.39rem;
    }
    .confirm {
      width: 2.42rem;
      height: 0.56rem;
      position: absolute;
      bottom: 0.97rem;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.home {
  width: 100%;
  height: 100%;
  &.open {
    overflow: hidden;
  }
  .home-inner {
    width: 100%;
    background: url("../assets/images/index/bg.png") no-repeat left top;
    background-size: cover;
    overflow: hidden;
    .slide {
      .item {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
  }

  .page {
    margin-top: 0.3rem;
    .inner {
      position: relative;
      .list {
        display: flex;
        width: 80px;
        margin: 0 auto;
        li {
          width: 0.3rem;
          height: 0.3rem;
          flex: 1;
          background: url("../assets/images/brand/normal.png") no-repeat left
            top;
          background-size: 0.3rem 0.3rem;
          &.active {
            background-image: url("../assets/images/brand/select.png");
          }
        }
      }
    }
  }

  .part {
    margin-top: 0.7rem;
    position: relative;
    .card {
      height: 240px;
      padding: 30px;
      .vue-tinder {
        height: 100%;
      }
    }
    .animate {
      position: absolute;
      right: 0;
      top: -53px;
      img {
        width: 0.8rem;
        transform: translateX(-20px);
        // transition: transform 3s ease-in-out;
        animation: down 4s ease-in-out;
        animation-iteration-count: infinite;
      }
    }
    .animate2 {
      left: 0;
      top: 250px;
      z-index: 20;
      img {
        animation-name: down1;
      }
    }
    .title {
      text-align: center;
      img {
        width: 6.26rem;
      }
    }
    &.part2 {
      padding-bottom: 1.4rem;
      .title {
        img {
          width: 6.26rem;
        }
      }
    }
    .inner {
      padding-top: 0.4rem;
      img {
        width: 6.6rem;
        display: block;
        margin: 0 auto;
        border-radius: 10px;
      }
    }
  }
  .btn {
    position: absolute;
    width: 6.6rem;
    height: 4.5rem;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    opacity: 0;
  }
  .slider-active {
    transform: scale(1);
  }
  .slider-item {
    transform: scale(0.9);
  }
}
@keyframes down {
  0% {
    transform: translate(0, -20px);
  }
  100% {
    transform: translate(25px, 80px);
  }
}
@keyframes down1 {
  0% {
    transform: translate(0, -20px);
  }
  100% {
    transform: translate(-25px, 80px);
  }
}
</style>