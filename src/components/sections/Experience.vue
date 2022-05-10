<template>
  <div class="container-experience">
    <v-row no-gutters class="mb-8" justify="center">
      <span class="title-section">Experience</span>
    </v-row>
    <v-row class="py-6" style="width: 100%" align="center" v-for="(experience, index) in experiences" :key="index" justify="center" no-gutters>
      <v-col align="justify" class="column-description px-12" cols="5">
        <span>{{experience.office}}</span>
        <br>
        <span>{{experience.company}}</span>
        <br>
        <span>{{experience.time}}</span>
      </v-col>
      <v-col align="center" cols="2">
        <v-img class="ml-n16" style="border-radius: 30px; border: 3px solid white" :src="experience.image" contain height="100" width="100"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        {office: 'Front-End and Mobile Developer', company: 'Blueticket', time: '03/2021 - The moment', image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQGXGyZrfbJNww/company-logo_100_100/0/1572617430545?e=1660176000&v=beta&t=7NQ8Fm4cCWkokvCfjlicJ3embB1YRUQNBGm7wlR4mWM'},
        {office: 'Front-End Developer', company: 'String', time: '05/2020 - 03/2021', image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFxWwkb7gKX9A/company-logo_100_100/0/1625142223834?e=1660176000&v=beta&t=76fjLJ5ezjr9TMEaJMZtK9IQzZHtREu7vT15equjQLc'},
        {office: 'Trainee Front-End Developer', company: 'LabTic', time: '10/2019 - 10/2020', image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEIeZLgJTICuw/company-logo_100_100/0/1525283071969?e=1660176000&v=beta&t=-oUdtT2dHDgljaYaCx-gHf76GA06SpRCID06w3ebc6o'},
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container-experience
  height: 100%
  width: 100vw
  background-image: linear-gradient(#030303, #1b1d36, #030303)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 0px 400px
  padding-bottom: 85px

.card-image
  border-radius: 15px
  background-color: white
  display: flex
  justify-content: center
  align-items: center

.column-description
  span
   color: white
</style>