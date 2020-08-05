<template>
  <div>
    <p class="error-p" v-if="getError">{{ getError }}</p>
    <div class="media-container">
      <table id="t01">
        <tr>
          <th>Name</th>
          <th>Beendet</th>
          <th>Format</th>
          <th>Erschienen</th>
          <th>Bewertung</th>
        </tr>
        <tr div class="media" v-for="media in getAllMedia" :key="media._id" @dblclick="openEdit(media._id)">
          <td>{{ media.name }}</td>
          <td>{{ media.finished }}</td>
          <td>{{ media.format }}</td>
          <td>{{ media.releaseDate }}</td>
          <td>{{ media.rating }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
//import MediaService from "../MediaService";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Media",
  methods: {
    ...mapActions(["fetchMedia", "deleteMedia", "updateMedia", "setError"]),
    openEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
  computed: {
    ...mapGetters(["getAllMedia", "getError"]),
  },
  created() {
    try {
      this.fetchMedia();
    } catch (err) {
      this.setError(err.message);
    }
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
}
th,
td {
  overflow: hidden;
  font-size: 24px;
  text-align: left;
  line-height: 1;
  padding: 15px 10px;
}
#t01 tr:nth-child(even) {
  background-color: #424242;
}
#t01 tr:nth-child(odd) {
  background-color: #212121;
}
#t01 th {
  color: #e0e0e0;
  background-color: #212121;
}
</style>
