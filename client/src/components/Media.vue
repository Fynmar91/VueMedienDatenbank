<template>
  <div>
    <div class="media-container">
      <div class="media" v-for="media in getAllMedia" :key="media._id" @dblclick="openEdit(media._id)">
        <p class="text title">{{ media.name }}</p>
        <img :src="media.image" />
        <p class="text prop">{{ media.format }}</p>
        <p class="text date">{{ media.releaseDate }}</p>
        <p class="text date">{{ `${media.startDate.getFullYear()}-${("0" + (media.startDate.getMonth() + 1)).slice(-2)}-${("0" + media.startDate.getDate()).slice(-2)}` }}</p>
      </div>
    </div>
  </div>
</template>

<script>
//import MediaService from "../MediaService";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Media",
  methods: {
    ...mapActions(["fetchMedia", "updateMedia", "setError", "resetState"]),
    openEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
  computed: {
    ...mapGetters(["getAllMedia"]),
  },
  created() {
    try {
      this.fetchMedia();
    } catch (err) {
      this.setError("Media.vue: ", err.message);
    }
  },
};
</script>

<style scoped>
.title {
  overflow: hidden;
  font-size: 30px;
  color: #e0e0e0;
}
.prop {
  overflow: hidden;
  font-size: 16px;
  color: #e0e0e0;
}
.date {
  overflow: hidden;
  font-size: 16px;
  color: #9e9e9e;
}
.media-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.media {
  height: fit-content;
  background: #212121;
  padding: 0.5rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  box-shadow: 10px 10px 30px #0a0a0a, -4px -4px 20px #3a3a3a;
}
button {
  cursor: pointer;
  border: none;
  line-height: 1.5;
  border-radius: 10px;
  background: #ffffff00;
  color: #e65100;
  text-align: center;
  float: right;
  margin: 5px;
}
img {
  border-radius: 20px;
  margin-top: 1rem;
  max-width: 90%;
  max-height: 30rem;
}
@media (max-width: 1000px) {
  .media-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 500px) {
  .media-container {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
