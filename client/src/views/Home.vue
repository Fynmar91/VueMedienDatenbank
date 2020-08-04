<template>
  <div id="home">
    <div class="container">
      <FilterMedia />
      <Media />
    </div>
  </div>
</template>

<script>
import FilterMedia from "../components/FilterMedia.vue";
import Media from "../components/Media.vue";

export default {
  name: "Home",
  components: {
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
  color: #e0e0e0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
