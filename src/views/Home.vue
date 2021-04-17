<template>
  <div class="home">
    <Addcompo />
    <Previews />
  </div>
</template>

<script>
// @ is an alias to /src
import Addcompo from './Addcompo.vue'
import Previews from '@/components/Previews.vue'

export default {
  name: 'Home',
  components: {
    Addcompo,
    Previews,
  }
}
</script>
