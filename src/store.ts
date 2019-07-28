import Vue from "vue";
import Vuex from "vuex";
import { namespace } from "vuex-class";
import { Board } from "./store/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Board
  }
});

const boardModule = namespace("Board");

export {
  boardModule
};
