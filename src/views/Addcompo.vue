<template>

    <div>
      <h3>Post</h3>
      <input type="text" placeholder="topic" v-model="title" />
      <button @click="submit">submit</button>
    </div>

</template>

<script>
import axios from "axios";
export default {
  name: "Addcompo",
    data() {
    return {
      title: "",
    };
    
  },
  methods: {
    submit() {
          axios.post("http://localhost:3000/prev", {
              title: this.title
            })
            
        } 
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
