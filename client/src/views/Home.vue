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

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
