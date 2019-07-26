import Vue from "vue";
import Vuex from "vuex";
import { Board } from "./store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Board
  }
});