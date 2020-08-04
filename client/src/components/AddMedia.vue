<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <p class="topic">HINZUFÜGEN:</p>
        <div class="flex">
          <p class="desc">Format:</p>
          <p class="desc">Name:</p>
          <p class="desc">Autor:</p>
          <p class="desc">Erschienen:</p>
          <p class="desc">Angefangen:</p>
          <p class="desc">Bewertung:</p>
          <p class="desc">Beendet:</p>
          <p class="desc">Bild:</p>
        </div>
        <div class="flex">
          <select class="input" v-model="format">
            <option v-for="format in getAllFormats" :value="format.singular" :key="format.singular">{{ format.singular }}</option>
          </select>
          <input class="input" type="text" v-model="name" placeholder="Name..." />
          <input class="input" type="text" v-model="author" placeholder="Autor..." />
          <select class="input" v-model="releaseDate">
            <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
          </select>
          <div class="start">
            <select class="input" v-model="startYear">
              <option v-for="year in years" :value="year" :key="year">{{ year }}</option>
            </select>
            <select class="input" v-model="startMonth">
              <option v-for="month in months" :value="month" :key="month">{{ month }}</option>
            </select>
            <select class="input" v-model="startDay">
              <option v-for="day in days" :value="day" :key="day">{{ day }}</option>
            </select>
          </div>
          <input class="input" type="text" v-model="rating" placeholder="Bewertung..." />
          <select class="input" v-model="finished">
            <option value="true">Ja</option>
            <option value="false">Nein</option>
          </select>
          <input class="input" type="text" v-model="image" placeholder="Bild..." />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <p>https://i.imgur.com/yD1Snju.jpg</p>
      <p>https://i.imgur.com/OytCq8h.jpg</p>
      <p>https://i.imgur.com/EZbpzu1.jpg</p>
      <p>https://i.imgur.com/GKbiunb.jpg</p>
      <p>https://i.imgur.com/YHPJU8H.jpg</p>
      <p>https://i.imgur.com/nZEX3mP.jpg</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddMedia",
  data() {
    return {
      format: "",
      name: "",
      author: "",
      releaseDate: new Date().getFullYear(),
      startYear: new Date().getFullYear(),
      startMonth: new Date().getMonth() + 1,
      startDay: new Date().getDate(),
      rating: "",
      finished: "true",
      image: "",
    };
  },
  methods: {
    ...mapActions(["addMedia"]),
    onSubmit(e) {
      e.preventDefault();
      const newMedia = {
        format: this.format,
        name: this.name,
        author: this.author,
        releaseDate: this.releaseDate,
        startDate: new Date(this.startYear, this.startMonth - 1, this.startDay),
        rating: this.rating,
        finished: this.finished,
        image: this.image,
      };
      this.addMedia(newMedia);
      this.format = "";
      this.name = "";
      this.author = "";
      this.releaseDate = new Date().getFullYear();
      this.startYear = new Date().getFullYear();
      this.startMonth = new Date().getMonth() + 1;
      this.startDay = new Date().getDate();
      this.rating = "";
      this.finished = "true";
      this.image = "";
    },
  },
  computed: {
    ...mapGetters(["getAllFormats"]),
    years() {
      const year = new Date().getFullYear();
      return Array.from({ length: year - 1949 }, (value, index) => year - index);
    },
    months() {
      return Array.from({ length: 12 }, (value, index) => 1 + index);
    },
    days() {
      return Array.from({ length: 31 }, (value, index) => 1 + index);
    },
  },
};
</script>

<style scoped>
form {
  display: grid;
  max-width: 600px;
  grid-template-columns: 1fr 2fr auto;
  grid-template-rows: auto auto auto 0.1fr;
  grid-gap: 5px;
  margin: auto;
  margin-top: 1rem;
}
.flex {
  display: flex;
  flex-flow: column;
  grid-row: 2;
  justify-content: space-between;
}
.topic {
  grid-column: 1 / span 2;
  color: #e65100;
  grid-row: 1;
  max-width: 200px;
}
.desc {
  max-width: 200px;
  padding-bottom: 12px;
}
.input {
  grid-column: 2;
  grid-row: 2;
  margin-bottom: 0.5rem;
}
.start {
  display: inline-block;
  white-space: nowrap;
}
input[type="text"] {
  padding: 10px;
  width: stretch;
  background: #212121;
  color: #e0e0e0;
  border: 1px #e65100 solid;
}
input[type="submit"] {
  grid-column: 3;
  grid-row: 2;
  margin-bottom: 0.5rem;
  background: #e65100;
  color: #e0e0e0;
  border: 1px #e65100 solid;
  cursor: pointer;
}
select {
  padding: 10px;
  background: #212121;
  color: #e0e0e0;
  border: 1px #e65100 solid;
}
@media screen and (max-width: 720px) {
  input[type="submit"] {
    grid-column: 1 / span 2;
    grid-row: 3;
    height: 4rem;
  }
}
</style>
