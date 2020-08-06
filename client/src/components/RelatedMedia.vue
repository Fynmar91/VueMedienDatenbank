.<template>
  <div class="media-container">
    <div class="media" v-for="media in getRelatedMedia" :key="media._id" @dblclick="openEdit(media._id)">
      <p class="text title">{{ media.name }} {{ media.season }}</p>
      <img :src="media.image" />
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

<style>
.title {
  font-size: 30px;
  color: #e0e0e0;
}
img {
  border-radius: 20px;
  max-width: 10%;
  max-height: 48rem;
}
</style>
