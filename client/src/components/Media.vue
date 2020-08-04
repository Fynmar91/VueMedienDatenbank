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
    ...mapActions(["fetchMedia", "updateMedia", "setError"]),
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
  font-size: 24px;
  color: #e0e0e0;
}
.prop {
  font-size: 16px;
  color: #e0e0e0;
}
.date {
  font-size: 16px;
  color: #9e9e9e;
}
.media-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
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
  box-shadow: 8px 8px 12px 1px #141414, -12px -12px 18px 1px #272727;
}
.text {
  line-height: 0.5;
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
  max-width: 90%;
  max-height: 20rem;
}
@media (max-width: 1000px) {
  .media-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 750px) {
  .media-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 500px) {
  .media-container {
    grid-template-columns: 1fr;
  }
}
</style>
