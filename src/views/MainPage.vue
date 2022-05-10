<template>
  <div>
    <app-bar/>
    <cover/>
    <about-me/>
    <skills/>
    <experience/>
    <project-technologies/>
    <contact/>
  </div>
</template>

<script>
import AppBar from '../components/AppBar.vue'
import Skills from '../components/sections/Skills.vue'
import Cover from '../components/sections/Cover.vue'
import ProjectTechnologies from '../components/sections/ProjectTechnologies.vue'
import AboutMe from '../components/sections/AboutMe.vue'
import Contact from '../components/sections/Contact.vue'
import Experience from '../components/sections/Experience.vue'

export default {
  components: { Cover, Skills, AppBar, ProjectTechnologies, AboutMe, Contact, Experience },
  name: 'Home'
}
</script>
