<template>
  <div class="p-14">
    <div v-for="Previews in PreviewsList" :key="Previews.id">
      {{ "Title :  " + Previews.title }}
      {{ "Content : " + Previews.context }}
      <button @click="remove">remove</button>
      <button class="p-1" @click="edit">edit</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Previews",
  props: {
    title: String,
    context: String,
    id: String,
  },
  data() {
    return {
      PreviewsList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/Previews").then((result) => {
      this.PreviewsList = result.data;
    });
  },
  methods: {
    remove(id) {
      axios.delete("http://localhost:3000/Previews" + id)
        .then(this.PreviewsList.splice(id, 1));
    },
    edit(){
      axios.put("http://localhost:3000/Previews", {
        title: this.title,
        context: this.context,
      });
    }
  },
};
</script>

