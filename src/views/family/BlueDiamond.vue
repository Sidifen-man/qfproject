<template>
  <div class="blue">
    <div class="banner">
      <img src="../../assets/images/blue/20190923-01_03.gif" alt />
    </div>
    <div class="video-1">
      <img class="part1" src="../../assets/images/blue/part1.png" alt />
      <div class="video1">
        <div :class="is_pause?'video':'video active'">
          <d-player
            @play="start"
            @pause="pause"
            @ended="end"
            ref="player"
            class="player"
            :options="options"
          ></d-player>
          <div class="start-btn" v-if="is_pause" @click="start">
            <img src="../../assets/images/blue/play.png" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="video-2">
      <div class="part2-box">
        <img class="part2" src="../../assets/images/blue/part2.png" alt />
      </div>
      <div class="video2">
        <img src="../../assets/images/blue/video2.png" alt />
        <div :class="is_pause?'video':'video active'">
          <d-player
            @play="start2"
            @pause="pause2"
            @ended="end2"
            ref="player2"
            class="player2"
            :options="options2"
          ></d-player>
          <div class="start-btn" v-if="is_pause2" @click="start2">
            <img src="../../assets/images/blue/play.png" alt />
          </div>
        </div>
        <img class="zj" src="../../assets/images/blue/zj.png" alt />
      </div>
    </div>
    <section class="part3">
      <div class="part3-title">
        <img src="../../assets/images/blue/part3.png" alt />
      </div>
      <ul>
        <li @click="change(1)">
          <img v-if="index===1" src="../../assets/images/blue/tab1_1.png" alt />
          <img v-else src="../../assets/images/blue/tab1.png" alt />
        </li>
        <li @click="change(2)">
          <img v-if="index===2" src="../../assets/images/blue/tab2.png" alt />
          <img v-else src="../../assets/images/blue/tab2_2.png" alt />
        </li>
        <li @click="change(3)">
          <img v-if="index===3" src="../../assets/images/blue/tab3_3.png" alt />
          <img v-else src="../../assets/images/blue/tab3.png" alt />
        </li>
      </ul>
      <div class="tabContent">
        <div class="content-item" v-show="index===1">
          <img src="../../assets/images/blue/index1.png" alt />
        </div>
        <div class="content-item" v-show="index===2">
          <img src="../../assets/images/blue/index2.png" alt />
        </div>
        <div class="content-item" v-show="index===3">
          <img src="../../assets/images/blue/index3.png" alt />
        </div>
        <div class="index">
          <div v-for="(item,i) in 3" :key="i">
            <img v-if="index===i+1" src="../../assets/images/blue/active.png" alt />
            <img v-else src="../../assets/images/blue/normal.png" alt />
          </div>
        </div>
      </div>
    </section>
    <section class="part4">
      <div class="part4-title">
        <img src="../../assets/images/blue/part4.png" alt />
      </div>
      <img class="qa" src="../../assets/images/blue/qa.png" alt />
      <div class="link">
        <a href="javascript:;" @click="push(0)">
          <img src="../../assets/images/blue/question.png" alt />
        </a>
      </div>
    </section>
    <section class="part5">
      <div class="part5-title">
        <img src="../../assets/images/blue/part5.png" alt />
      </div>
      <div class="links">
        <a href="javascript:;" @click="push('/family/atwo')">
          <img src="../../assets/images/blue/atwo.png" alt />
        </a>
        <a href="javascript:;" @click="push('/organic')">
          <img src="../../assets/images/blue/yj.png" alt />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
export default {
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return {
      index: 1,
      options: {
        video: {
          url: require("../../assets/mp4/shizi.mp4"),
          pic: require("../../assets/images/blue/video1.jpg")
        },
        hotkey: true,
        autoplay: false,
        loop: false
      },
      player: null,
      is_pause: true,
      options2: {
        video: {
          url: require("../../assets/mp4/v.mp4"),
          pic: require("../../assets/images/blue/zj.jpg")
        },
        hotkey: true,
        autoplay: false,
        loop: false
      },
      player2: null,
      is_pause2: true
    };
  },
  mounted() {
    this.player = this.$refs.player.dp;
    this.player2 = this.$refs.player2.dp;
  },
  methods: {
    change(index) {
      this.index = index;
    },
    start() {
      if (this.player) {
        this.player.play();
      }
      this.is_pause = false;
    },
    start2() {
      if (this.player2) {
        this.player2.play();
      }
      this.is_pause2 = false;
    },
    end() {
      this.is_pause = true;
    },
    end2() {
      this.is_pause2 = true;
    },
    pause() {
      this.is_pause = true;
    },
    pause2() {
      this.is_pause2 = true;
    },
    push(path) {
      if (path === 0) {
        localStorage.setItem('link',true)
        window.location.href =
          "http://babytree.citv.cn/mp/topic/module/wap/page?id=190719412";
      } else {
        localStorage.setItem('link',false)
        this.$router.push(path);
      }
    }
  }
};
</script>

<style lang="less" scoped>
.blue {
  .banner {
    width: 7.5rem;
    height: 4.52rem;
  }
  .video-1 {
    .part1 {
      width: 5.5rem;
      height: 1.78rem;
    }
    .video1 {
      .video {
        width: 6.94rem;
        height: 4.02rem;
        margin: 0 auto;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        /deep/ .dplayer-video-wrap {
          border-radius: 5px;
          overflow: hidden;
        }
        /deep/ .player {
          .dplayer-controller {
            display: none;
          }
          .dplayer-controller-mask {
            display: none;
          }
        }
        .start-btn {
          position: absolute;
          left: 50%;
          top: 50%;
          cursor: pointer;
          transform: translate(-50%, -50%);
          img {
            width: 48px;
          }
        }
      }
      .active /deep/ .player {
        .dplayer-controller {
          display: block;
        }
      }
    }
  }
  .video-2 {
    .part2-box {
      width: 5.42rem;
      height: 2.05rem;
    }
    .part2 {
      width: 5.42rem;
      height: 2.05rem;
      margin-right: 0;
      float: right;
    }
    .video2 {
      width: 6.97rem;
      height: 5.61rem;
      margin: 0 auto;
      position: relative;
      .zj {
        position: absolute;
        width: 5.31rem;
        height: 1.31rem;
        left: 0.26rem;
        bottom: 0.24rem;
      }
      .video {
        width: 6.94rem;
        height: 4.02rem;
        margin: 0 auto;
        margin-top: -5.52rem;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        /deep/ .dplayer-video-wrap {
          border-radius: 5px;
          overflow: hidden;
        }
        /deep/ .player {
          .dplayer-controller {
            display: none;
          }
          .dplayer-controller-mask {
            display: none;
          }
        }
        .start-btn {
          position: absolute;
          left: 50%;
          top: 50%;
          cursor: pointer;
          transform: translate(-50%, -80%);
          img {
            width: 48px;
          }
        }
      }
      .active /deep/ .player {
        .dplayer-controller {
          display: block;
        }
      }
    }
  }
  .part3 {
    .part3-title {
      width: 6.79rem;
      height: 2.09rem;
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 5.14rem;
      li {
        img {
          width: 1.11rem;
          height: 1.5rem;
        }
      }
    }
    .tabContent {
      width: 7.02rem;
      margin: 0.2rem auto 0;
      position: relative;
      .content-item {
        height: 8.9rem;
        img {
          width: 100%;
          // height: 95%;
          // border-radius: 15px
        }
      }
      .index {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        div {
          display: inline-block;
        }
        img {
          width: 0.28rem;
          height: 0.22rem;
          margin: 0 0.1rem;
        }
      }
    }
  }
  .part4 {
    position: relative;
    .part4-title {
      width: 6.83rem;
      height: 2.2rem;
    }
    .qa {
      width: 6.94rem;
      height: 4.37rem;
      margin: 0 auto;
      display: block;
    }
    .link {
      a {
        position: absolute;
        bottom: 0.27rem;
        left: 50%;
        transform: translateX(-50%);
        img {
          width: 1.53rem;
          height: 1.18rem;
        }
      }
    }
  }
  .part5 {
    margin-bottom: 1rem;
    .part5-title {
      height: 2.11rem;
      img {
        width: 6.83rem;
        height: 2.11rem;
        float: right;
      }
    }
    .links {
      width: 6.94rem;
      height: 5.12rem;
      margin: 0 auto;
      background: url("../../assets/images/blue/bg.png") no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      a {
        img {
          width: 6.5rem;
          height: 2.2rem;
          margin: 0.2rem auto;
          display: block;
        }
      }
    }
  }
}
</style>