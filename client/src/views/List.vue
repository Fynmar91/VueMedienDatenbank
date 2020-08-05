<template>
  <div id="home">
    <div class="container">
      <FilterMedia />
      <MediaList />
    </div>
  </div>
</template>

<script>
import FilterMedia from "../components/FilterMedia.vue";
import MediaList from "../components/MediaList.vue";

export default {
  name: "Home",
  components: {
    FilterMedia,
    MediaList,
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
