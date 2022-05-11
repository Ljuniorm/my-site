<template>
  <div class="container-technology">
    <v-row class="pt-6" :class="$vuetify.breakpoint.mdAndUp ? '' : 'px-14'" no-gutters justify="center">
      <span class="title-section">Technologies used in the project</span>
    </v-row>
    <v-row class="py-12" justify="center" no-gutters>
      <v-col align="center" :class="$vuetify.breakpoint.mdAndUp ? '' : 'py-6'" :cols="$vuetify.breakpoint.mdAndUp ? '' : '12'" v-for="(image, i) in images" :key="i" >
        <v-card class="pa-3 mx-5 card-image" height="150" width="150">
          <v-img  :src="image" contain height="75" width="75"></v-img>
        </v-card>
      </v-col>
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