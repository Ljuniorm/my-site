<template>
  <div>
    <app-bar/>
    <cover/>
    <about-me/>
    <project-technologies/>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import AboutMe from '../components/sections/AboutMe.vue'
import Cover from '../components/sections/Cover.vue'
import ProjectTechnologies from '../components/sections/ProjectTechnologies.vue'

export default {
  components: { Cover, AboutMe, AppBar, ProjectTechnologies },
  name: 'Home'
}
</script>
