<template>
  <div class="filter">
    <p class="desc">Medien filtern:</p>
    <select @change="filterMedia($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterMedia",
  methods: mapActions(["filterMedia"]),
};
</script>

<style scoped>
.filter {
  display: flex;
  margin-top: 40px;
}
.desc {
  min-width: 160px;
}
select {
  flex: 12;
  max-width: 80px;
  padding: 6px;
  border: 1px #41b883 solid;
}
</style>
