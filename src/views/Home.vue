<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Addcompo />
    <Prev />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Addcompo from './Addcompo.vue'
import Prev from '@/components/prev.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Addcompo,
    Prev
  }
}
</script>
