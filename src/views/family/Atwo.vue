<template>
  <div class="atwo">
    <!-- ATWO详情页 -->
    <div class="banner">
      <img src="../../assets/images/atwo/20190923_03.gif" alt />
    </div>
    <!-- 视频一区 -->
    <div class="video_1">
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
          <img src="../../assets/images/atwo/player.png" alt />
        </div>
      </div>
    </div>
    <!-- 视频二区 -->
    <div class="video_2">
      <div class="video2_title">
        <img src="../../assets/images/atwo/video2_title.png" alt />
      </div>
      <div :class="is_pause2?'video2':'video2 active'">
        <d-player
          @play="start2"
          @pause="pause2"
          @ended="end2"
          ref="player2"
          class="player"
          :options="options2"
        ></d-player>
        <div class="start-btn" v-if="is_pause2" @click="start2">
          <img src="../../assets/images/atwo/player.png" alt />
        </div>
      </div>
      <div class="links">
        <a href="javascript:;" @click="push(0)">
          <img src="../../assets/images/atwo/link1.png" alt />
        </a>
        <a href="javascript:;" @click="push(1)">
          <img src="../../assets/images/atwo/link2.png" alt />
        </a>
      </div>
    </div>
    <!-- 视频三区 -->
    <div class="video_3">
      <div class="link_2">
        <a href="javascript:;" @click="push('/family/blueDiamond')">
          <img src="../../assets/images/atwo/link3.png" alt />
        </a>
        <a href="javascript:;" @click="push('/organic')">
          <img src="../../assets/images/atwo/link4.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
export default {
  data() {
    return {
      options: {
        video: {
          url: require("../../assets/mp4/qifu.mp4"),
          pic: require("../../assets/images/atwo/cover.png")
        },
        hotkey: true,
        autoplay: false,
        loop: false
      },
      options2: {
        video: {
          url: require("../../assets/mp4/nai.mp4"),
          pic: require("../../assets/images/atwo/video2.png")
        },
        hotkey: true,
        autoplay: false,
        loop: false
      },
      player: null,
      is_pause: true,
      player2: null,
      is_pause2: true
    };
  },
  mounted() {
    this.player = this.$refs.player.dp;
    this.player2 = this.$refs.player2.dp;
  },
  methods: {
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
        localStorage.setItem("link", true);
        window.location.href =
          "http://promo.babytree.com/wyeth_illuma/expert?id=1578&type=2";
      } else if (path === 1) {
        localStorage.setItem("link", true);
        window.location.href =
          "http://promo.babytree.com/wyeth_illuma/expert?id=1570&type=3";
      } else {
        localStorage.setItem("link", false);
        this.$router.push(path);
      }
    }
  },
  components: {
    "d-player": VueDPlayer
  }
};
</script>

<style lang="less" scoped>
.atwo {
  .banner {
    width: 7.5rem;
    height: 4.5rem;
  }
  .video_1 {
    overflow: hidden;
    height: 5.58rem;
    width: 7.5rem;
    background: url("../../assets/images/atwo/part1.png") no-repeat;
    background-size: cover;
    .video {
      width: 6.87rem;
      height: 3.87rem;
      margin: 1.6rem auto 0;
      position: relative;
      border-radius: 12px;
      overflow: hidden;
      /deep/ .dplayer-video-wrap {
        border-radius: 5px;
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
  .video_2 {
    width: 7.11rem;
    height: 9.5rem;
    overflow: hidden;
    margin: 0.34rem auto 0.08rem;
    background: url("../../assets/images/atwo/part2.png") no-repeat;
    background-size: cover;
    padding-top: 1.34rem;
    box-sizing: border-box;
    .video2_title {
      width: 6.86rem;
      height: 1.52rem;
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      z-index: 2;
    }
    .video2 {
      width: 6.86rem;
      height: 3.83rem;
      overflow: hidden;
      margin: 0 auto 0.25rem;
      position: relative;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin-top: -1px;
      /deep/ .dplayer-video-wrap {
        border-radius: 5px;
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
    .links {
      width: 6.86rem;
      margin: 0 auto;
      a {
        display: inline-block;
        img {
          width: 3.35rem;
          height: 2.4rem;
        }
        &:nth-of-type(1) img {
          margin-right: 0.1rem;
        }
      }
    }
    .active /deep/ .player {
      .dplayer-controller {
        display: block;
      }
    }
  }
  .video_3 {
    width: 7.5rem;
    height: 6.62rem;
    background: url("../../assets/images/atwo/part3.png") no-repeat;
    background-size: cover;
    padding-top: 1.63rem;
    box-sizing: border-box;
    margin-bottom: 1.03rem;
    .link_2 {
      margin: 0 auto 0;
    }
    a {
      img {
        width: 6.7rem;
        height: 2.27rem;
        display: block;
        margin: 0 auto;
      }
      &:nth-of-type(1) img {
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>