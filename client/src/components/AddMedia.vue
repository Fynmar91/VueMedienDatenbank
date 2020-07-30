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
          <input class="input" type="text" v-model="name" placeholder="Name..." />
          <input class="input" type="text" v-model="author" placeholder="Autor..." />
          <datepicker v-model="releaseDate" :minimumView="'year'" :maximumView="'year'" :initialView="'year'" placeholder="Select Date"></datepicker>
          <datepicker v-model="startDate" :minimumView="'year'" :maximumView="'year'" :initialView="'year'" placeholder="Select Date"></datepicker>
          <input class="input" type="text" v-model="rating" placeholder="Bewertung..." />
          <input class="input" type="text" v-model="finished" placeholder="Beendet..." />
        </div>
        <input type="submit" value="Sumbit" />
      </form>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

import { mapActions } from "vuex";

export default {
  name: "AddMedia",
  components: {
    Datepicker,
  },
  data() {
    return {
      name: "",
      author: "",
      releaseDate: "",
      startDate: "",
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
      (this.releaseDate = ""), (this.startDate = ""), (this.rating = "");
      this.finished = "";
    },
  },
};
</script>

<style>
form {
  display: grid;
  max-width: 600px;
  grid-template-columns: 1fr 2fr 0.2fr;
  grid-template-rows: auto 1fr 1fr;
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
.input {
  grid-column: 2;
  grid-row: 2;
  margin-bottom: 10px;
}
input[type="text"] {
  padding: 10px;
  width: stretch;
  border: 1px #e65100 solid;
}
input[type="submit"] {
  grid-column: 3;
  grid-row: 2;
  background: #e65100;
  color: #fff;
  border: 1px #e65100 solid;
  cursor: pointer;
}
.vdp-datepicker {
  position: relative;
  text-align: left;
  margin-bottom: 10px;
  background: #e65100;
}
.vdp-datepicker__calendar {
  position: absolute;
  z-index: 100;
  background: #212121;
  width: auto;
  border: 1px solid #e65100;
}
</style>
