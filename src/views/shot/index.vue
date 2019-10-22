<template>
  <div class="shot" :style="{height: height+'px'}">
    <div class="inner">
      <div class="title">
        <img src="../../assets/images/shot/title.jpg" alt />
      </div>
      <div class="video">
        <div class="video-inner">
          <div class="content">
            <d-player
              @play="start"
              @pause="pause"
              @ended="end"
              ref="player"
              class="player"
              :options="options"
            ></d-player>
            <div class="start-btn" v-if="is_pause" @click="start">
              <img src="../../assets/images/shot/button.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <img src="../../assets/images/shot/bottom.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import VueDPlayer from "vue-dplayer";
export default {
  data() {
    return {
      height: 0,
      is_pause: true,
      player: {},
      options: {
        video: {
          url: require("../../assets/mp4/v.mp4"),
          pic: require("../../assets/images/shot/video.png")
        },
        hotkey: true
      }
    };
  },
  created() {
    this.height = window.innerHeight;
  },
  mounted() {
    this.player = this.$refs.player.dp;
  },
  methods: {
    start() {
      if (this.player) {
        this.player.play();
      }
      this.is_pause = false;
    },
    end() {
      this.is_pause = true;
    },
    pause() {
      this.is_pause = true;
    }
  },
  components: {
    "d-player": VueDPlayer
  }
};
</script>

<style lang="less" scoped>
.shot {
  width: 100%;
  background: url("../../assets/images/shot/bg1.png") no-repeat left top;
  background-size: cover;
  .video {
    padding: 0 0.3rem;
    .video-inner {
      height: 4rem;
      overflow: hidden;
      .content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 0.4rem;
        position: relative;
        /deep/ .player {
          height: 100%;
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
    }
  }
}
</style>