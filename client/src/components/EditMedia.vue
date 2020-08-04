.<template>
  <div class="media-container">
    <div class="media" v-for="media in getSingleMedia" :key="media._id" @dblclick="openEdit(media._id)">
      <p class="text title">{{ media.name }}</p>
      <p class="text title">{{ media.author }}</p>
      <p class="text prop">{{ media.format }}</p>
      <p class="text date">{{ media.releaseDate }}</p>
      <p class="text date">Angefangen am {{ `${media.startDate.getFullYear()}-${("0" + (media.startDate.getMonth() + 1)).slice(-2)}-${("0" + media.startDate.getDate()).slice(-2)}` }}</p>
      <p class="text date">{{ media.rating }} %</p>
      <p class="text date">{{ media.image }}</p>
      <img :src="media.image" />
      <button @click="deleteMedia(media._id)">x</button>
    </div>
  </div>
</template>

<script>
//import MediaService from "../MediaService";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "EditMedia",
  methods: {
    ...mapActions(["fetchSingleMedia", "updateMedia", "setError"]),
  },
  computed: {
    ...mapGetters(["getSingleMedia", "getError"]),
  },
  created() {
    try {
      this.fetchSingleMedia(this.$router.history.current.params.id);
    } catch (err) {
      this.setError("EditMedia.vue: ", err.message);
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  color: #e0e0e0;
}
.prop {
  font-size: 20px;
  color: #e0e0e0;
}
.date {
  font-size: 20px;
  color: #9e9e9e;
}
.error-p {
  color: #e65100;
  text-align: center;
}
.media-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.media {
  display: grid;
  background: #212121;
  padding: 1rem;
  border-radius: 20px;
  text-align: left;
  position: relative;
  box-shadow: 2px 2px 0px #0a0a0a, -2px -2px 0px #424242;
}
.text {
  grid-column: 2;
  line-height: 0.5;
}
button {
  grid-column: 100;
  grid-row: 100;
  font-size: 24px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background: #ffffff00;
  color: #e65100;
  text-align: center;
}
img {
  grid-column: 1;
  grid-row: 1 / span 100;
  border-radius: 20px;
  max-width: 80%;
  max-height: 48rem;
}
</style>
