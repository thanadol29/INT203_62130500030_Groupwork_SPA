<template>

      <li v-for="Previews in PreviewsList" :key="Previews.id">{{ Previews.title }}</li>

</template>

<script>
import axios from "axios";
export default {
  name: "Previews",
     props: {
    title: String,
    id: String
  },
  data() {
    return {
      PreviewsList: [],
    };
  }
  ,
  mounted() {
    axios.get("http://localhost:3000/Previews").then((result) => {
      this.PreviewsList = result.data;
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
