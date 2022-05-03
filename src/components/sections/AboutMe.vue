<template>
  <div class="container-about">
     <v-row class="pt-10 mb-n6" justify="center" no-gutters>
       <span class="white--text title-section">Compêtencias</span>
     </v-row>
     <v-row no-gutters>
       <v-col class="pr-16">
         <v-card class="card-about" height="550px" width="400px"></v-card>
       </v-col>
       <v-col class="pl-16">
         <v-card elevation="100" class="card-about" height="550px" width="400px"></v-card>
       </v-col>
     </v-row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
$small: 300px
$medium: 900px

.container-about
  display: flex
  align-items: center
  flex-direction: column
  height: 800px
  background-image: linear-gradient(#030303, #1b1d36)
  width: 100vw
  background-color: black

.card-about
  border-radius: 15px !important
  background-image: linear-gradient(#030303, #1b1d36)
  -webkit-border-radius: 15px !important
  -moz-border-radius: 15px !important
  border: 3px solid rgba(27,29,54,1)

.smth 
  @media screen and (max-width: $small) 
  @media screen and (min-width: $medium)
</style>