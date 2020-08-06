<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Kacheln</router-link> | <router-link to="/list">Liste</router-link> |
      <router-link to="/add">Hinzufügen</router-link>
      <p class="error-p" v-if="getError">{{ getError }}</p>
    </div>
  </header>
</template>

<script>
//import MediaService from "../MediaService";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Header",
  methods: {
    ...mapActions(["setError", "resetState"]),
  },
  computed: {
    ...mapGetters(["getAllMedia", "getError"]),
  },
};
</script>

<style scoped>
.header {
  z-index: 1000;
  position: sticky;
  top: 0;
  background: #333;
  color: #fff;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
.header a {
  font-size: 20px;
  color: #fff;
  padding-right: 10px;
  padding-left: 10px;
  text-decoration: none;
}
.error-p {
  line-height: 1;
  margin-bottom: 10px;
  color: #e65100;
  text-align: center;
}
</style>
