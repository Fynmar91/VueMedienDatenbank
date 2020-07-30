<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <p class="topic">Medien hinzufügen:</p>
        <div class="flex">
          <p class="desc">Name:</p>
          <p class="desc">Autor:</p>
          <p class="desc">Erscheinungsjahr:</p>
          <p class="desc">Angefangen am:</p>
          <p class="desc">Bewertung:</p>
          <p class="desc">Ist beendet?</p>
        </div>
        <div class="flex">
          <input type="text" v-model="name" placeholder="Name..." />
          <input type="text" v-model="author" placeholder="Autor..." />
          <input type="date" v-model="releaseDate" />
          <input type="date" v-model="startDate" />
          <input type="text" v-model="rating" placeholder="Bewertung..." />
          <input type="text" v-model="finished" placeholder="Beendet..." />
        </div>
        <input type="submit" value="Sumbit" />
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddMedia",
  data() {
    return {
      name: "",
      author: "",
      releaseDate: new Date().toISOString().slice(0, 10),
      startDate: new Date().toISOString().slice(0, 10),
      rating: "",
      finished: "",
    };
  },
  methods: {
    ...mapActions(["addMedia"]),
    onSubmit(e) {
      e.preventDefault();
      const newMedia = {
        name: this.name,
        author: this.author,
        releaseDate: this.releaseDate,
        startDate: new Date(),
        rating: this.rating,
        finished: this.finished,
      };
      this.addMedia(newMedia);
      this.name = "";
      this.author = "";
      this.releaseDate = new Date();
      this.startDate = new Date();
      this.rating = "";
      this.finished = "";
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-gap: 10px;
  margin-top: 40px;
}
.flex {
  display: flex;
  flex-flow: column;
  grid-row: 2;
  justify-content: space-between;
}
.topic {
  grid-column: 1;
  grid-row: 1;
  max-width: 200px;
}
.desc {
  max-width: 200px;
}
input[type="text"],
input[type="date"] {
  grid-column: 2;
  grid-row: 2;
  padding: 10px;
  border: 1px #e65100 solid;
}
input[type="submit"] {
  grid-column: 3;
  grid-row: 2;
  max-width: 100px;
  background: #e65100;
  color: #fff;
  border: 1px #e65100 solid;
  cursor: pointer;
}
</style>
