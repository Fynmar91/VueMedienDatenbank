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
