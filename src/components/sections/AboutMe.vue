<template>
  <div class="container-about">
     <v-row class="pt-10" justify="center" no-gutters>
       <span class="white--text title-section">About</span>
     </v-row>
     <v-row class="pt-6 pb-16" align="center" justify="center" no-gutters>
       <v-col :class="$vuetify.breakpoint.mdAndUp ? '' : 'py-6'" :order="$vuetify.breakpoint.mdAndUp ? 1 : 2" class="px-12" align="justify" :cols="$vuetify.breakpoint.mdAndUp ? '4' : '12'">
          <span class="white--text">
            Hello my name is Luiz but I prefer to be called Junior, I'm 22 years old, I live in Florianópolis/SC which is located in Brazil, I'm passionate about my profession, my hobby has always been staying and playing on my computer since I was little, I'm a very communicative and happy.
          </span>
       </v-col>
       <v-col :class="$vuetify.breakpoint.mdAndUp ? '' : 'py-6'" :order="$vuetify.breakpoint.mdAndUp ? 2 : 1" align="center" :cols="$vuetify.breakpoint.mdAndUp ? '3' : '12'">
          <v-img eager style="border-radius: 3000px; border: 3px solid white" src="../../assets/me-about.jpg" contain height="228" width="250"></v-img>
       </v-col>
     </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>

.container-about
  display: flex
  align-items: center
  flex-direction: column
  height: 100%
  background-image: linear-gradient(#030303, #1b1d36, #030303)
  width: 100vw
  background-color: black

</style>