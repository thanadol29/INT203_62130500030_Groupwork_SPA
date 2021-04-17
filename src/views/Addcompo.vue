<template>

    <div>
      <h3 class="">Post</h3>
      <div class="p-2">
      <input class="shadow-2xl shadow-inner" type="text" placeholder="title" v-model="title" />
      <input class="shadow-2xl shadow-inner" type="text" placeholder="context" v-model="context" />
      </div>
      <button class="p-2 focus:ring-5 ring-1 ring-red-500 "  @click="submit">submit</button>
    </div>

</template>

<script>
import axios from "axios";
export default {
  name: "Addcompo",
    data() {
    return {
      title: "",
      context:"",
    };
    
  },
  methods: {
    submit() {
          axios.post("http://localhost:3000/Previews", {
              title: this.title,
              context: this.context,
            })
            
        } 
        }
      
    
  
  
};
</script>

