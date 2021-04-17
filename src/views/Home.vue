<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Main />
    <Previews />
    <Addcompo />
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Addcompo from './Addcompo.vue'
import Previews from '@/components/Previews.vue'
import Main from '@/views/Main.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Addcompo,
    Previews,
    Main,
  }
}
</script>
