<template>
  <div class="s-card">
    <div class="list" @touchstart="start" @touchmove="move" @touchend="end">
      <ul>
        <li
          :class="class_list[key]"
          v-for="(item, key) in banner"
          :key="key"
          @click="$router.push(item.url)"
        >
          <img :src="item.pic" alt />
        </li>
      </ul>
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
      banner_list: [
        {
          id: 1,
          img: require("../assets/images/index/animate1.gif"),
          url: ""
        },
        {
          id: 2,
          img: require("../assets/images/index/animate2.gif"),
          url: ""
        },
        {
          id: 3,
          img: require("../assets/images/index/animate3.gif"),
          url: ""
        },
        {
          id: 4,
          img: require("../assets/images/index/animate4.gif"),
          url: ""
        },
        {
          id: 5,
          img: require("../assets/images/index/animate5.gif"),
          url: ""
        }
      ],
      class_list: [
        "one-item",
        "two-item",
        "current",
        "three-item",
        "four-item"
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
  created() {},

  methods: {
    // 向上逻辑
    up() {
      this.class_list.unshift(this.class_list.pop());
      this.$emit("down");
    },
    // 向下滑
    down() {
      this.class_list.push(this.class_list.shift());
      this.$emit("up");
    },
    start(e) {
      //   console.log("开始滑动");
      this.start_time = new Date();
      this.startY = e.touches[0].pageY;
    },
    move(e) {
      e.preventDefault();
    },
    end(e) {
      //   console.log("结束滑动");
      this.endY = e.changedTouches[0].pageY;
      this.end_time = new Date();
      //   console.log(this.startY, this.endY);
      //   判断滑动是否有效
      if (
        this.end_time - this.start_time < 80 &&
        Math.abs(this.endY - this.startY) < 100
      ) {
        return;
      }

      // 判断滑动方向
      if (this.endY - this.startY < 0) {
        // console.log("向上滑");
        // 处理向上滑逻辑
        this.up();
      } else {
        // console.log("向下滑");
        this.down();
      }
    }
  }
};
</script>


<style lang="less" scoped>
.s-card {
  padding: 0 30px;
  overflow: hidden;
  box-sizing: border-box;
  .list ul {
    position: relative;
    height: 345px;
  }
  .distance {
    margin-bottom: 75px;
  }
  .one-item {
    position: absolute;
    top: 0;
    left: 0;

    z-index: 1;
    opacity: 0.8;
  }
  .one-item img {
    transform: scale(0.8);
  }
  .two-item {
    position: absolute;
    top: 30px;
    left: 0;

    z-index: 2;
    opacity: 0.9;
  }
  .two-item img {
    transform: scale(0.9);
  }
  .current {
    position: absolute;
    top: 60px;
    left: 0;
    transform: scale(1);
    z-index: 5;
    opacity: 10;
  }
  .three-item {
    position: absolute;
    top: 90px;
    left: 0;

    z-index: 4;
    opacity: 0.9;
  }
  .three-item img {
    transform: scale(0.9);
  }
  .four-item {
    position: absolute;
    top: 120px;
    left: 0;

    z-index: 3;
    opacity: 0.8;
  }
  .four-item img {
    transform: scale(0.8);
  }

  li {
    transition: all 0.5s;
  }
  li img {
    transition: all 0.5s;
    display: block;
    margin: 0 auto;
  }
}
</style>