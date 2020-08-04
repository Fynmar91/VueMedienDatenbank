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
