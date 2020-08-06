.<template>
  <div class="media-container">
    <div class="media" v-for="media in getRelatedMedia" :key="media._id" @dblclick="openEdit(media._id)">
      <img :src="media.image" />
      <p class="text title">{{ media.name }} {{ media.season }}</p>
    </div>
  </div>
</template>

<script>
//import MediaService from "../MediaService";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RelatedMedia",
  methods: {
    ...mapActions(["setError"]),
    openEdit(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
  computed: {
    ...mapGetters(["getRelatedMedia"]),
  },
};
</script>

<style scoped>
.title {
  overflow: hidden;
  font-size: 30px;
  color: #e0e0e0;
  padding: 1rem;
}
.media-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.media {
  max-width: 16rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 10px 10px 30px #0a0a0a, -4px -4px 20px #3a3a3a;
}
img {
  border-radius: 20px;
  display: block;
  width: 100%;
  height: auto;
}
@media (max-width: 1500px) {
  .media-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 1000px) {
  .media-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>
