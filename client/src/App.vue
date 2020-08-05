<template>
  <div id="app">
    <Header />
    <h1>Mediendatenbank</h1>
    <hr />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: normal;
  background: #212121;
  color: #e0e0e0;
}
p {
  margin-top: 4px;
  margin-bottom: 4px;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
h1 {
  font-size: 10vw;
  text-align: center;
  line-height: 0.5;
}
@media screen and (min-width: 720px) {
  h1 {
    font-size: 72px;
  }
}
</style>
