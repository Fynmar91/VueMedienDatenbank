<template>
  <div id="app">
    <div class="container">
      <AddMedia />
      <FilterMedia />
      <Media />
    </div>
  </div>
</template>

<script>
import AddMedia from "./components/AddMedia.vue";
import FilterMedia from "./components/FilterMedia.vue";
import Media from "./components/Media.vue";

export default {
  name: "App",
  components: {
    AddMedia,
    FilterMedia,
    Media,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
