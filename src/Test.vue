<template>
  <div class="test" style="height: 500px;">
    <tinder
      v-cloak
      ref="tinder"
      :allow-super="true"
      key-name="key"
      :pointer-threshold="0.5"
      :super-threshold="0.5"
      :queue.sync="queue"
      @submit="submit"
    >
      <template slot-scope="scope">
        <div class="pic">
          <img :src="scope.data.pic" alt />
        </div>
      </template>
    </tinder>
  </div>
</template>
<script>
import tinder from "vue-tinder";
export default {
  data() {
    return {
      queue: []
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      var list = [];
      for (var i = 0; i < 5; i++) {
        list.push({
          pic: require("./assets/images/index/animate1.gif"),
          key: Math.random()
        });
      }
      this.queue = this.queue.concat(list);
    },
    submit: function(info) {
      if (this.queue.length < 2) {
        this.getData();
      }
    },
    decide: function(choice) {
      if (choice === "help") {
        window.location.href = "https://shanlh.github.io/vue-tinder";
      } else {
        this.$refs.tinder.decide(choice);
      }
    }
  },
  components: {
    tinder
  }
};
</script>
<style lang="less" scoped>
.vue-tinder {
  height: 500px;
}
</style>