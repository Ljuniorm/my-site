<template>
  <div>
    <app-bar/>
    <cover/>
    <about/>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import About from '../components/sections/About.vue'
import Cover from '../components/sections/Cover.vue'
// @ is an alias to /src

export default {
  components: { Cover, About, AppBar },
  name: 'Home'
}
</script>
