<template>
  <div>
    <h3>Add Media</h3>
    <div class="add">
      <form @submit="onSubmit">
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
      const date = new Date();
      this.addMedia(this.title, date);
      this.title = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>
