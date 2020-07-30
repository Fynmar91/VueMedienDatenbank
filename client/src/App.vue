<template>
  <div id="app">
    <div class="container">
      <Media />
      <FilterMedia />
      <AddMedia />
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
  line-height: 0;
  background: #212121;
  color: #eceff1;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
