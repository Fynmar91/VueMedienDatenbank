<template>
  <div id="app">
    <h1>Mediendatenbank</h1>
    <hr />
    <div class="container">
      <FilterMedia />
      <Media />
      <AddMedia />
    </div>
  </div>
</template>

<script>
import FilterMedia from "./components/FilterMedia.vue";
import Media from "./components/Media.vue";
import AddMedia from "./components/AddMedia.vue";

export default {
  name: "App",
  components: {
    FilterMedia,
    Media,
    AddMedia,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 0;
  background: #212121;
  color: #e0e0e0;
}
h1 {
  font-size: 72px;
  text-align: center;
  line-height: 0.5;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
