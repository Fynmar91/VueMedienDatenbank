<template>
  <div id="home">
    <div class="container">
      <AddMedia />
    </div>
  </div>
</template>

<script>
import AddMedia from "../components/AddMedia.vue";

export default {
  name: "Home",
  components: {
    AddMedia,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
  overflow: auto;
  padding: 0 1rem;
}
</style>
