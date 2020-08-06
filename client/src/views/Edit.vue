<template>
  <div id="edit">
    <div class="container">
      <EditMedia />
      <RelatedMedia />
    </div>
  </div>
</template>

<script>
import EditMedia from "../components/EditMedia.vue";
import RelatedMedia from "../components/RelatedMedia.vue";

export default {
  name: "Edit",
  components: {
    EditMedia,
    RelatedMedia,
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
