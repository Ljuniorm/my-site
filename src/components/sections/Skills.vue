<template>
  <div class="container-skills">
     <v-row class="pt-8" justify="center" no-gutters>
       <span class="white--text title-section">Skills</span>
     </v-row>
     <v-row class="py-12" no-gutters>
       <v-col>
         <v-card class="card-skills">
           <v-row no-gutters>
             <v-col class="py-4" align="center" :cols="$vuetify.breakpoint.mdAndUp ? '3' : '6'" v-for="(skill, index) in skills" :key="index">
                <h3 class="white--text" style="text-align: center">• {{skill}}</h3>
             </v-col>
           </v-row>
         </v-card>
       </v-col>
     </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      skills: ['Vue.js', 'React Native', 'Javascript', 'HTML', 'CSS', 'Vuetify', 'Bootstrap', 'UX/UI', 'Git', 'Firebase', 'Scrum', 'SCSS/SASS', 'API REST', 'Vuex', 'Redux'],
    }
  }
}
</script>

<style lang="sass" scoped>
$small: 950px

.container-skills
  display: flex
  align-items: center
  flex-direction: column
  background-color: black
  width: 100vw
  background-color: black

.card-skills
  border-radius: 15px !important
  background-image: linear-gradient(#030303, #1b1d36, #030303)
  -webkit-border-radius: 15px !important
  -moz-border-radius: 15px !important
  border: 3px solid rgba(27,29,54,1)
  display: flex
  justify-content: center
  align-items: center
  height: 300px
  width: 800px

.card-skills
  @media screen and (max-width: $small)
    height: 100%
    width: 300px
    padding: 12px
</style>