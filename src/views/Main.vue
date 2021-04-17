<template>
<div class="home grid grid-cols-4 gap-3">
   
  </div>
</template>


<script>
import axios from "axios";


export default {
  name: "Main",
  data() {
    return {
      Previews: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/Previews").then((result) => {
      this.postItList = result.data;
    });
  }
};
</script>
