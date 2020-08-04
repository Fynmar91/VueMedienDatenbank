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
  padding: 0 1rem;
}
</style>
