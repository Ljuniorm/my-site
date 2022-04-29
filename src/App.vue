<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';

export default {
  components: { AppBar },
  name: 'App',
};
</script>

<style>
 * {
   font-family: 'Oswald', sans-serif !important;
 }
</style>