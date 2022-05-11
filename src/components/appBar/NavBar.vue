<template>
  <v-navigation-drawer
    absolute
    v-model="drawerOpen"
    class="nav-bar"
    right
    app
  >
    <v-row no-gutters>
      <v-spacer></v-spacer>
      <v-btn icon @click="drawerOpen = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-row>
    <v-list
      nav
      dense
    >
      <v-list-item-group
        v-model="group"
      >
        <v-list-item @click="$emit('handleScrollTo', '.container-about')">
          <v-list-item-title>
            <v-row no-gutters justify="center">About</v-row>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="$emit('handleScrollTo', '.container-skills')">
          <v-list-item-title>
            <v-row no-gutters justify="center">Skills</v-row>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="$emit('handleScrollTo', '.container-experience')">
          <v-list-item-title>
            <v-row no-gutters justify="center">Experience</v-row>
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="$emit('handleScrollTo', '.container-contact')">
          <v-list-item-title>
            <v-row no-gutters justify="center">Contact</v-row>
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    props: ['drawer'],
    data: () => ({
      group: null,
      drawerOpen: false
    }),

    watch: {
      group () {
        this.drawerOpen = false
      },
      drawer () {
        this.drawerOpen = true
      }
    },
  }
</script>

<style lang="sass" scoped>
.nav-bar
  background-image: linear-gradient(#030303, #1b1d36) !important
</style>