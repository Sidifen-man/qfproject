<template>
  <div class="organic" :style="{height: height+'px'}">
    <div class="organic-inner">
      <div class="title">
        <img src="../../assets/images/organic/kv.png" alt />
      </div>
      <div class="part1">
        <div class="title">
          <img src="../../assets/images/organic/title1.png" alt />
          <!-- 浮窗 -->
          <div class="modal">
            <img src="../../assets/images/organic/modal.png" alt />
          </div>
        </div>
        <div class="nav">
          <div class="list">
            <ul>
              <li @click="slideTo2(0)">
                <p class="active" v-if="current == 0">
                  <img src="../../assets/images/organic/nav1_select.png" alt />
                </p>
                <p v-else>
                  <img src="../../assets/images/organic/nav1.png" alt />
                </p>
              </li>
              <li @click="slideTo2(1)">
                <p class="active" v-if="current == 1">
                  <img src="../../assets/images/organic/nav2_select.png" alt />
                </p>
                <p v-else>
                  <img src="../../assets/images/organic/nav2.png" alt />
                </p>
              </li>
              <li @click="slideTo2(2)">
                <p class="active" v-if="current == 2">
                  <img src="../../assets/images/organic/nav3_select.png" alt />
                </p>
                <p v-else>
                  <img src="../../assets/images/organic/nav3.png" alt />
                </p>
              </li>
              <li @click="slideTo2(3)">
                <p class="active" v-if="current == 3">
                  <img src="../../assets/images/organic/nav4_select.png" alt />
                </p>
                <p v-else>
                  <img src="../../assets/images/organic/nav4.png" alt />
                </p>
              </li>
            </ul>
          </div>
        </div>

        <!-- 视频播放区域 -->
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
                <img src="../../assets/images/organic/btn.png" alt />
              </div>
            </div>
          </div>
          <div class="banner">
            <div class="banner-inner">
              <slider class="slide" @slide="slide" ref="slider" :options="slide_opt">
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banner1.jpg" alt srcset />
                  </div>
                </slideritem>
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banner2.jpg" alt srcset />
                  </div>
                </slideritem>
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banner3.jpg" alt srcset />
                  </div>
                </slideritem>
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banner4.jpg" alt srcset />
                  </div>
                </slideritem>
              </slider>
            </div>
          </div>
          <!-- 分页部分 -->
          <div class="page">
            <div class="inner">
              <ul class="list">
                <li :class="{active: current_index==0}"></li>
                <li :class="{active: current_index==1}"></li>
                <li :class="{active: current_index==2}"></li>
                <li :class="{active: current_index==3}"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="part2">
        <div class="title">
          <img src="../../assets/images/organic/title3.png" alt />
        </div>

        <div class="banner">
          <div class="nav">
            <ul>
              <li class="current_item" @click="slideTo(0)">
                <p class="active" v-show="tab_active == 0">
                  <img src="../../assets/images/organic/tab1_select.png" alt />
                </p>
                <p v-show="tab_active != 0">
                  <img src="../../assets/images/organic/tab1.png" alt />
                </p>
              </li>
              <li @click="slideTo(1)">
                <p class="active" v-show="tab_active == 1">
                  <img src="../../assets/images/organic/tab2_select.png" alt />
                </p>
                <p v-show="tab_active != 1">
                  <img src="../../assets/images/organic/tab2.png" alt />
                </p>
              </li>
              <li @click="slideTo(2)">
                <p class="active" v-show="tab_active == 2">
                  <img src="../../assets/images/organic/tab3_select.png" alt />
                </p>
                <p v-show="tab_active != 2">
                  <img src="../../assets/images/organic/tab3.png" alt />
                </p>
              </li>
            </ul>
          </div>
          <div class="banner-inner">
            <div class="content">
              <slider class="slide" @slide="slide2" ref="slider2" :options="slide_opt2">
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banners.jpg" alt srcset />
                  </div>
                </slideritem>
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banners.jpg" alt srcset />
                  </div>
                </slideritem>
                <slideritem>
                  <div class="item">
                    <img src="../../assets/images/organic/banners.jpg" alt srcset />
                  </div>
                </slideritem>
              </slider>
            </div>
            <div class="left-btn" @click="last">
              <img src="../../assets/images/organic/left_a.png" alt />
            </div>
            <div class="right-btn" @click="next">
              <img src="../../assets/images/organic/right_a.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="part3">
        <div class="title">
          <img src="../../assets/images/organic/title2.png" alt />
        </div>
        <!-- 视频播放区域 -->
        <div class="video">
          <div class="video-inner">
            <div class="content">
              <d-player
                @play="start2"
                @pause="pause2"
                @ended="end2"
                ref="player2"
                class="player"
                :options="options2"
              ></d-player>
              <div class="start-btn" v-if="is_pause2" @click="start2">
                <img src="../../assets/images/organic/btn.png" alt />
              </div>
            </div>
          </div>
          <div class="boy">
            <img src="../../assets/images/organic/boy.png" alt />
          </div>
          <div class="cao">
            <img src="../../assets/images/organic/cao.png" alt />
          </div>
        </div>

        <!-- 专家介绍 -->
        <div class="zhuanjia">
          <div class="top-main">
            <div class="top">
              <img src="../../assets/images/organic/zhuanjia2.png" />
              <div>
                <h3>卢振辉</h3>
                <p>中国有机产品认证专家组成员</p>
              </div>
            </div>
            <div class="bottom">中国有机产品认证专家权威解读：什么是真正的有机奶粉？</div>
          </div>
          <div class="bottom-main">
            <div class="common" @click="push(1)">
              <div class="top">
                <img src="../../assets/images/organic/zhuanjia1.png" />
                <div class="info">
                  <h3>金焱</h3>
                  <p>
                    上海国际和平妇幼保障院
                    营养门诊营养主治医生
                  </p>
                </div>
              </div>
              <div class="sp">育儿也要亲和style！</div>
              <div class="start">
                <img src="../../assets/images/organic/start_class.png" alt />
              </div>
            </div>
            <div class="common" @click="push(2)">
              <div class="top">
                <img src="../../assets/images/organic/zhuanjia1.png" />
                <div class="info">
                  <h3>金焱</h3>
                  <p>
                    上海国际和平妇幼保障院
                    营养门诊营养主治医生
                  </p>
                </div>
              </div>
              <div class="sp">育儿也要亲和style！</div>
              <div class="start">
                <img src="../../assets/images/organic/start_class.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="part4">
        <div class="content">
          <h3>
            <strong>Q1</strong>有机牧场有哪些不同？
          </h3>
          <div class="ques">与普通牧场不同的是，有机牧场必须保证三年内未使用过农药、化肥、除草剂、植物生长调节素等违禁物质，为奶牛提供全年的天然营养草料。</div>
          <div class="more_btn" @click="push(3)">
            <img src="../../assets/images/organic/more_quest.png" alt />
          </div>
        </div>
      </div>

      <div class="part5">
        <div class="content">
          <div class="list">
            <ul>
              <li @click="push('/family/atwo')">
                <img src="../../assets/images/organic/pro_1.png" alt />
              </li>
              <li @click="push('/family/blueDiamond')">
                <img src="../../assets/images/organic/pro_2.png" alt />
              </li>
            </ul>
          </div>
          <div class="tree1">
            <img src="../../assets/images/organic/tree1.png" alt />
          </div>
          <div class="tree2">
            <img src="../../assets/images/organic/tree2.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueDPlayer from "vue-dplayer";
import { slider, slideritem } from "vue-concise-slider";
export default {
  data() {
    return {
      height: 0,
      current: 0,
      current_index: 0,
      tab_active: 0,
      is_pause: true,
      is_pause2: true,
      player: {},
      player2: {},
      options: {
        video: {
          url: require("../../assets/mp4/60s_teach.mp4"),
          pic: require("../../assets/images/organic/v_cover.png")
        },
        hotkey: true
      },
      options2: {
        video: {
          url: require("../../assets/mp4/lujiao.mp4"),
          pic: require("../../assets/images/organic/cover4.png")
        },
        hotkey: true
      },
      slide_opt: {
        // itemAnimation: true,
        centeredSlides: true,
        loopedSlides: 2,
        slidesToScroll: 1,
        pagination: false,
        loop: true
        // autoplay: 2500
      },
      slide_opt2: {
        // itemAnimation: true,
        centeredSlides: true,
        loopedSlides: 2,
        slidesToScroll: 1,
        pagination: false,
        loop: true
      }
    };
  },
  created() {
    this.height = window.innerHeight;
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
    end() {
      this.is_pause = true;
    },
    pause() {
      this.is_pause = true;
    },
    start2() {
      if (this.player2) {
        this.player2.play();
      }
      this.is_pause2 = false;
    },
    end2() {
      this.is_pause2 = true;
    },
    pause2() {
      this.is_pause2 = true;
    },
    slide(data) {
      this.current_index = data.currentPage;
      this.current = data.currentPage;
    },

    slide2(data) {
      this.tab_active = data.currentPage;
    },

    last() {
      this.$refs.slider2.$emit("slidePre");
    },
    next() {
      this.$refs.slider2.$emit("slideNext");
    },
    push(path) {
      if (path === 1) {
        localStorage.setItem('link',true)
        window.location.href =
          "http://promo.babytree.com/illumaorganic/answer1";
      } else if (path === 2) {
        localStorage.setItem('link',true)
        window.location.href =
          "http://promo.babytree.com/illumaorganic/answer2";
      } else if (path === 3) {
        localStorage.setItem('link',true)
        window.location.href =
          "http://promo.babytree.com/illumaorganic/question";
      } else {
        localStorage.setItem('link',false)
        this.$router.push(path);
      }
    },
    slideTo(num) {
      this.$refs.slider2.$emit("slideTo", num);
    },
    slideTo2(num) {
      this.$refs.slider.$emit("slideTo", num);
    }
  },

  components: {
    "d-player": VueDPlayer,
    slider,
    slideritem
  }
};
</script>
<style lang="less" scoped>
.organic {
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;

  .organic-inner {
    background: url("../../assets/images/organic/bg.png") no-repeat left top;
    background-size: 100%;
  }
  .part1 {
    margin-top: 0.9rem;
    .title {
      position: relative;
      > img {
        width: 5.55rem;
        display: block;
        margin: 0 auto;
      }
      .modal {
        position: absolute;
        right: -28px;
        top: -120px;
        > img {
          width: 2.54rem;
        }
      }
    }
    .nav {
      .list {
        padding: 0 0.36rem;
        ul {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 1.7rem;
          li {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            p {
              img {
                width: 1.37rem;
              }
              &.active {
                img {
                  width: 1.65rem;
                }
              }
            }
          }
        }
      }
    }
    .video {
      margin-top: 0.1rem;
      .video-inner {
        width: 6.96rem;
        height: 3.6rem;
        padding: 0.19rem;
        box-sizing: border-box;
        background: url("../../assets/images/organic/border.png") no-repeat left
          top;
        background-size: 6.96rem 3.6rem;
        margin: 0 auto;
        overflow: hidden;
        .content {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0.4rem;
          position: relative;
          /deep/ .player {
            height: 100%;
            overflow: hidden;
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
      .banner {
        width: 6.96rem;
        height: 3.92rem;
        background: url("../../assets/images/organic/banner_bg.png") no-repeat
          left top;
        background-size: 6.96rem 3.92rem;
        margin: 0 auto;
        .banner-inner {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          padding: 0.48rem 0.21rem 0.16rem 0.21rem;
          .slide {
            border-radius: 0.4rem;
            overflow: hidden;
          }
          .item {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .page {
      margin-top: 0.3rem;
      .inner {
        .list {
          display: flex;
          width: 80px;
          margin: 0 auto;
          li {
            width: 0.2rem;
            height: 0.26rem;
            flex: 1;
            background: url("../../assets/images/organic/normal.png") no-repeat
              left top;
            background-size: 0.2rem 0.26rem;
            &.active {
              background-image: url("../../assets/images/organic/select.png");
            }
          }
        }
      }
    }
  }
  .part2 {
    margin-top: 3rem;
    .title {
      img {
        width: 3.72rem;
        display: block;
        margin: 0 auto;
      }
    }
    .banner {
      .nav {
        height: 1.6rem;
        padding: 0 0.3rem;
        ul {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          li {
            &.current_item {
              height: 1.7rem;
              display: flex;
              align-items: flex-end;
            }
            &:first-child {
              img {
                width: 1.97rem;
              }
            }
            &:nth-child(2) {
              img {
                width: 2.67rem;
              }
            }
            &:last-child {
              img {
                width: 1.97rem;
              }
            }
          }
        }
      }

      .banner-inner {
        width: 6.96rem;
        height: 3.6rem;
        background: url("../../assets/images/organic/border.png") no-repeat left
          top;
        background-size: 100%;
        margin: 0 auto;
        margin-top: 0.2rem;
        position: relative;
        .left-btn,
        .right-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          z-index: 1000;
          img {
            width: 0.5rem;
          }
        }
        .left-btn {
          left: -0.1rem;
        }
        .right-btn {
          right: -0.1rem;
        }
        .content {
          padding: 0.19rem;
          box-sizing: border-box;
          height: 100%;
          .slide {
            overflow: hidden;
            border-radius: 0.3rem;
            .item {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

  .part3 {
    margin-top: 0.2rem;

    .video {
      margin-top: 0.1rem;
      position: relative;
      .boy {
        position: absolute;
        left: 0;
        bottom: -30px;
        img {
          width: 1.91rem;
        }
      }
      .cao {
        position: absolute;
        right: 12px;
        bottom: -3px;
        img {
          width: 1.29rem;
        }
      }
      .video-inner {
        width: 7.24rem;
        height: 4.21rem;
        padding: 0.19rem;
        box-sizing: border-box;
        background: url("../../assets/images/organic/border.png") no-repeat left
          top;
        background-size: 7.24rem 4.21rem;
        margin: 0 auto;
        overflow: hidden;
        .content {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 0.6rem;
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

    .zhuanjia {
      margin-top: 0.33rem;
      .top-main {
        .top {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 0.86rem;
            margin-right: 0.24rem;
          }
          h3 {
            font-size: 17px;
            color: #68b64b;
            font-weight: bold;
          }
          p {
            color: #666;
            font-size: 12px;
          }
        }
        .bottom {
          text-align: center;
          font-size: 13px;
          color: #68b64b;
          margin-top: 0.2rem;
        }
      }
      .bottom-main {
        padding: 0 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.6rem;
        .common {
          width: 3.2rem;
          background-color: #fff;
          padding: 0.18rem;
          box-sizing: border-box;
          border-radius: 0.5rem;
          .top {
            img {
              width: 0.86rem;
              float: left;
            }
            .info {
              margin-left: 0.96rem;
              h3 {
                font-size: 15px;
                color: #68b64b;
              }
              p {
                font-size: 10px;
                margin-top: 0.15rem;
              }
            }
          }
          .sp {
            color: #68b64b;
            font-size: 12px;
            text-align: center;
            padding: 0.15rem 0;
          }
          .start {
            img {
              width: 1.57rem;
              display: block;
              margin: 0 auto;
            }
          }
        }
      }
    }
  }

  .part4 {
    margin-top: 0.6rem;
    width: 100%;
    height: 7.65rem;
    background: url("../../assets/images/organic/question.png") no-repeat left
      top;
    background-size: 100% 7.65rem;
    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 4.2rem 1.2rem 0.4rem 1.2rem;
      position: relative;
      h3 {
        font-size: 18px;
        color: #128c8b;
        text-align: center;
        margin-bottom: 0.2rem;
      }
      .ques {
        font-size: 12px;
        color: #287c8b;
        line-height: 20px;
        height: 60px;
        overflow: hidden;
      }
      .more_btn {
        position: absolute;
        left: 50%;
        bottom: 0.6rem;
        transform: translateX(-50%);
        img {
          width: 2.62rem;
        }
      }
    }
  }
  .part5 {
    margin-top: 0.6rem;
    width: 100%;
    height: 10.07rem;
    background: url("../../assets/images/organic/part5.png") no-repeat left top;
    background-size: 100% 10.07rem;
    .content {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding: 2.5rem 0.7rem 0.4rem 0.7rem;
      position: relative;
      .list {
        li {
          margin-bottom: 0.2rem;
          img {
            width: 100%;
            height: 2.8rem;
            border-radius: 0.2rem;
          }
        }
      }
      .tree1,
      .tree2 {
        position: absolute;
        bottom: 1.1rem;
        right: 0;
      }
      .tree1 {
        right: 1rem;
        img {
          width: 0.75rem;
        }
      }
      .tree2 {
        right: 0.4rem;
        img {
          width: 0.75rem;
        }
      }
    }
  }
}
</style>