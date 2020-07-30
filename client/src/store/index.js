import Vuex from "vuex";
import Vue from "vue";
import media from "./modules/media";

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
  modules: {
    media,
  },
});
