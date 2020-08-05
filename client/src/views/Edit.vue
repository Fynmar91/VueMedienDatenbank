<template>
  <div id="edit">
    <div class="container">
      <EditMedia />
    </div>
  </div>
</template>

<script>
import EditMedia from "../components/EditMedia.vue";

export default {
  name: "Edit",
  components: {
    EditMedia,
  },
  created() {},
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
