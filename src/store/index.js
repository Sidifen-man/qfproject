import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    is_dialog: true
  },
  mutations: {
    set_dialog(state, flag) {
      state.is_dialog = flag;
    }
  }
});
