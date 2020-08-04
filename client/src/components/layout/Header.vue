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
    ...mapActions(["setError"]),
  },
  computed: {
    ...mapGetters(["getAllMedia", "getError"]),
  },
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.header a {
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
