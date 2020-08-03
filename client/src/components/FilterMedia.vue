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
    <select class="format" @change="filterMedia($event)">
      <option value="Alle">Alle</option>
      <option v-for="format in getAllFormats" :key="format._id" value="format.name">{{ format.name }}</option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterMedia",
  methods: {
    ...mapActions(["fetchFormats", "filterMedia", "setError"]),
  },
  computed: {
    ...mapGetters(["getAllFormats"]),
  },
  created() {
    try {
      this.fetchFormats();
    } catch (err) {
      this.setError(err.message);
    }
  },
};
</script>

<style scoped>
.filter {
  display: flex;
  margin-top: 40px;
}
.desc {
  margin-right: 20px;
}
select {
  max-width: 80px;
  padding: 6px;
  background: #212121;
  color: #e0e0e0;
  border: 1px #e65100 solid;
}
</style>
