<template>
  <div class="container-technology">
    <v-row no-gutters justify="center">
      <span class="title-section">Technologies used in the project</span>
    </v-row>
    <v-row justify="center" no-gutters>
      <v-card v-for="(image, i) in images" :key="i" class="pa-3 mx-5 card-image" height="150" width="150">
        <v-img  :src="image" contain height="75" width="75"></v-img>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-light-text.svg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.container-technology
  height: 300px
  width: 100vw
  background-color: black
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.card-image
  border-radius: 15px
  background-color: white
  display: flex
  justify-content: center
  align-items: center
</style>