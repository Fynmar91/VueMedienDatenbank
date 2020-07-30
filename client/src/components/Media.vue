<template>
  <div>
    <h1>Mediendatenbank</h1>
    <hr />
    <p class="error-p" v-if="getError">{{ getError }}</p>
    <div class="media-container">
      <div class="media" v-for="media in getAllMedia" :key="media._id" @dblclick="deleteMedia(media._id)">
        <p class="text">{{ media.name }}</p>
        <p class="text">{{ `${media.date.getDate()}/${media.date.getMonth() + 1}/${media.date.getFullYear()}` }}</p>
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
    // onDblClick(todo) {
    //   const updTodo = {
    //     id: todo.id,
    //     title: todo.title,
    //     completed: !todo.completed,
    //   };
    //   this.updateTodo(updTodo);
    // },
  },
  computed: {
    ...mapGetters(["getAllMedia", "getError"]),
  },
  created() {
    try {
      this.fetchMedia();
      this.setError("Test Error");
    } catch (err) {
      this.setError(err.message);
    }
  },
};

// data() {
//   return {
//     media: [],
//     error: "",
//   };
// },
// async created() {
//   try {
//     this.media = await MediaService.getMedia();
//   } catch (err) {
//     this.error = err.message;
//   }
// },
// methods: {
// async createMedia() {
//   await MediaService.insertMedia(this.inputText);
//   this.media = await MediaService.getMedia();
//   this.inputText = "";
// },
// async deleteMedia(id) {
//   await MediaService.deleteMedia(id);
//   this.media = await MediaService.getMedia();
// },
</script>

<style scoped>
.error-p {
  color: #e65100;
  text-align: center;
}
.media-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.media {
  /* border: 1px solid #ccc; */
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
h1 {
  font-size: 72px;
  text-align: center;
  line-height: 0.5;
}
@media (max-width: 500px) {
  .media-container {
    grid-template-columns: 1fr;
  }
}
</style>
