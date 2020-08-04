<template>
  <div>
    <p class="error-p" v-if="getError">{{ getError }}</p>
    <div class="media-container">
      <div class="media" v-for="media in getAllMedia" :key="media._id" @dblclick="deleteMedia(media._id)">
        <p class="text title">{{ media.name }}</p>
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
    ...mapActions(["fetchMedia", "deleteMedia", "updateMedia", "setError"]),
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
.error-p {
  color: #e65100;
  text-align: center;
}
.media-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.media {
  background: #212121;
  padding: 0.5rem;
  border-radius: 20px;
  text-align: center;
  position: relative;
  cursor: pointer;
  box-shadow: 2px 2px 0px #0a0a0a, -2px -2px 0px #424242;
}
.text {
  line-height: 0.5;
}
@media (max-width: 500px) {
  .media-container {
    grid-template-columns: 1fr;
  }
}
</style>
