<template>
  <div class="s-card">
    <div
      class="list"
      :style="{height: container_height+'px'}"
      @touchstart="start"
      @touchmove.prevent="move"
      @touchend="end"
    >
      <div class="inner">
        <ul>
          <li v-if="is_show" class="distance" :style="{height: height1+'px'}"></li>
          <li
            :class="item.type_class"
            v-for="(item,idx) in banner_list"
            :style="{top: item.top+'px'}"
            @click="go(item.url)"
            :key="idx"
          >
            <img :src="item.img" alt v-lazy="item.img" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { truncate } from "fs";
export default {
  data() {
    return {
      is_show: false,
      height: 0,
      height1: 220,
      container_height: 470,
      banner_list: [
        {
          id: 1,
          img: require("../assets/images/index/7.gif"),
          url: "/family/blueDiamond",
          type_class: "",
          top: 1
        },
        {
          id: 2,
          img: require("../assets/images/index/ani1.gif"),
          url: "/organic",
          type_class: "",
          top: 260
        },
        {
          id: 3,
          img: require("../assets/images/index/ani2.gif"),
          url: "/family/atwo",
          type_class: "",
          top: 260
        },
        {
          id: 4,
          img: require("../assets/images/index/20190923-02_03.gif"),
          url: "/family/qiyun",
          type_class: "",
          top: 260
        },
        {
          id: 5,
          img: require("../assets/images/index/ani4.gif"),
          url: "/ha",
          type_class: "",
          top: 260
        }
      ],
      start_time: 0,
      end_time: 0,
      startY: 0,
      endY: 0,
      //   计数器
      count: 0
    };
  },

  props: ["banner"],
  created() {
    this.height = window.innerHeight;
  },

  methods: {
    go(url) {
      // console.log(url);
      this.$router.push(url);
    },
    // 向上逻辑
    up() {
      this.count += 1;

      if (this.count > 4) {
        this.count = 4;
        return;
      }

      this.$emit("down");

      this.height1 = this.height1 + 15;

      switch (this.count) {
        case 0:
          break;
        case 1:
          var class_list = ["four-item", "current"];
          var top_list = [0, 15];
          for (var i = 0; i <= this.count; i++) {
            this.banner_list[i].type_class = class_list[i];
            this.banner_list[i].top = top_list[i];
          }
          this.container_height += 15;
          break;
        case 2:
          var top_list = [0, 15, 30];
          var class_list = ["three-item", "four-item", "current"];
          for (var i = 0; i <= this.count; i++) {
            this.banner_list[i].type_class = class_list[i];
            this.banner_list[i].top = top_list[i];
          }
          this.container_height += 15;
          break;
        case 3:
          var top_list = [0, 15, 30, 45];
          var class_list = ["two-item", "three-item", "four-item", "current"];
          for (var i = 0; i <= this.count; i++) {
            this.banner_list[i].type_class = class_list[i];
            this.banner_list[i].top = top_list[i];
          }
          this.container_height += 15;
          break;
        case 4:
          var top_list = [0, 15, 30, 45, 60];
          var class_list = [
            "one-item",
            "two-item",
            "three-item",
            "four-item",
            "current"
          ];
          for (var i = 0; i <= this.count; i++) {
            this.banner_list[i].type_class = class_list[i];
            this.banner_list[i].top = top_list[i];
          }
          this.container_height = 310;
          break;
      }
      this.is_show = true;
    },
    // 向下滑
    down() {
      this.count -= 1;
      if (this.count < 0) {
        this.count = 0;
        return;
      }
      this.$emit("up");
      this.height1 = this.height1 - 15;
      var class_list;
      switch (this.count) {
        case 0:
          class_list = ["", "", "", "", ""];
          var top_list = [1, 260, 260, 260, 260];
          this.is_show = false;
          for (var i = 0; i <= 4; i++) {
            this.banner_list[i].top = top_list[i];
          }
          this.container_height = 470;
          break;
        case 1:
          class_list = ["four-item", "current", "", "", ""];
          this.is_show = true;
          this.container_height = 470 + 1 * 15;
          break;
        case 2:
          class_list = ["three-item", "four-item", "current", "", ""];
          this.is_show = true;
          this.container_height = 470 + 2 * 15;
          break;
        case 3:
          class_list = ["two-item", "three-item", "four-item", "current", " "];
          this.is_show = true;
          this.container_height = 470 + 3 * 15;
          break;
      }
      for (var i = 0; i <= 4; i++) {
        this.banner_list[i].type_class = class_list[i];
      }
    },
    start(e) {
      //   console.log("开始滑动");
      this.start_time = new Date();
      this.startY = e.touches[0].pageY;
    },
    move(e) {
      //   console.log("滑动中");
    },
    end(e) {
      //   console.log("结束滑动");
      this.endY = e.changedTouches[0].pageY;
      this.end_time = new Date();
      //   console.log(this.startY, this.endY);
      //   判断滑动是否有效
      if (
        this.end_time - this.start_time < 150 &&
        Math.abs(this.endY - this.startY) < 150
      ) {
        return;
      }

      // 判断滑动方向
      if (this.endY - this.startY < 0) {
        console.log("向上滑");
        // 处理向上滑逻辑
        this.up();
      } else {
        console.log("向下滑");
        this.down();
      }
    }
  }
};
</script>


<style lang="less" scoped>
.s-card {
  padding: 15px 30px;
  overflow: hidden;
  box-sizing: border-box;
  .list {
    height: 470px;
    overflow: hidden;
    transition: height 0.5s;
  }
  .list ul {
    position: relative;
    min-height: 220px;
  }
  .one-item {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.8);
    z-index: 1;
    opacity: 0.3;
  }
  .two-item {
    position: absolute;
    top: 15px;
    left: 0;
    transform: scale(0.85);
    z-index: 2;
    opacity: 0.35;
  }
  .three-item {
    position: absolute;
    top: 30px;
    left: 0;
    transform: scale(0.9);
    z-index: 3;
    opacity: 0.4;
  }
  .four-item {
    position: absolute;
    top: 45px;
    left: 0;
    transform: scale(0.95);
    z-index: 4;
    opacity: 0.6;
  }
  .current {
    position: absolute;
    top: 60px;
    left: 0;
    transform: scale(1);
    z-index: 5;
    opacity: 1;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  li {
    margin-bottom: 15px;
    transition: top 0.8s ease-in-out, transform 0.6s, opacity 0.6s;
    height: 220px;
  }
  li img {
    width: 100%;
    height: 220px;
  }
}
</style>