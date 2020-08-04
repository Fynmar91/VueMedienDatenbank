<template>
  <div class="filter">
    <form @submit="onReset">
      <p class="desc">FILTERN:</p>
      <select v-model="limit" @change="filterMedia({ limit, format, fromDate, toDate })">
        <option value="100">100</option>
        <option value="10">10</option>
      </select>
      <select class="format" v-model="format" @change="filterMedia({ limit, format, fromDate, toDate })">
        <option value="Alle">Alle</option>
        <option v-for="format in getAllFormats" :key="format._id" :value="format.singular">{{ format.name }}</option>
      </select>
      <select class="input" v-model="fromDate" @change="filterMedia({ limit, format, fromDate, toDate })">
        <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
      </select>
      <select class="input" v-model="toDate" @change="filterMedia({ limit, format, fromDate, toDate })">
        <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
      </select>
      <input type="submit" value="Reset" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FilterMedia",
  data() {
    return {
      limit: "100",
      format: "Alle",
      fromDate: new Date().getFullYear() - (new Date().getFullYear() - 1950),
      toDate: new Date().getFullYear(),
    };
  },
  methods: {
    ...mapActions(["fetchFormats", "fetchMedia", "filterMedia", "setError"]),
    onReset(e) {
      console.log("Test");
      e.preventDefault();
      this.limit = "100";
      this.format = "Alle";
      this.fromDate = new Date().getFullYear() - (new Date().getFullYear() - 1950);
      this.toDate = new Date().getFullYear();
      this.fetchMedia();
    },
  },
  computed: {
    ...mapGetters(["getAllFormats"]),
    years() {
      const year = new Date().getFullYear();
      return Array.from({ length: year - 1949 }, (value, index) => year - index);
    },
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
  margin-bottom: 20px;
  color: #e65100;
}
.desc {
  margin-bottom: 20px;
}
select {
  max-width: 80px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 6px;
  background: #212121;
  color: #e0e0e0;
  border: 1px #e65100 solid;
}
input[type="submit"] {
  background: #e65100;
  color: #e0e0e0;
  border: 1px #e65100 solid;
  cursor: pointer;
}
</style>
