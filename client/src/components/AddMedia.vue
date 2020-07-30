<template>
  <div>
    <div class="add">
      <form @submit="onSubmit">
        <p class="desc">Medien hinzufügen:</p>
        <input type="text" v-model="title" placeholder="Add Media..." />
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
      title: "",
    };
  },
  methods: {
    ...mapActions(["addMedia"]),
    onSubmit(e) {
      e.preventDefault();
      const newMedia = {
        name: this.title,
        date: new Date(),
      };
      this.addMedia(newMedia);
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin-top: 40px;
}
.desc {
  min-width: 160px;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px #41b883 solid;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
