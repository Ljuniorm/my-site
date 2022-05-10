<template>
  <v-app-bar
    fixed
    height="80"
    dark
    :color="colorAppBar.color"
    :flat="colorAppBar.flat"
    :elevation="positionScroll ? 10 : 0"
  >
    <v-row justify="center" align="center" no-gutters class="px-6">
      <v-col>
        <v-row align="center" no-gutters>
          <v-avatar style="border: 2px solid white" size="60">
            <v-img src="../assets/eu.png" contain/>
          </v-avatar>
          <span class="ml-4 name">Luiz Junior</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row no-gutters>
          <v-col class="mr-n4" align="center">
            <span class="menu-text-items">About</span>
          </v-col>
          <v-col align="center">
            <span class="menu-text-items">Skills</span>
          </v-col>
          <v-col align="center">
            <span class="menu-text-items">Experience</span>
          </v-col>
          <v-col class="mr-n4" align="center">
            <span class="menu-text-items">Contact</span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    positionScroll: 0,
  }),
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    colorAppBar() {
      let scroll = this.positionScroll === 0;
      return {
        color: scroll ? "transparent" : "black",
        flat: scroll,
      };
    },
  },
  methods: {
    handleScroll() {
      this.positionScroll = window.scrollY;
    },
  },
};
</script>

<style lang="sass" scoped>
.name
  font-size: 25px
  font-weight: bold

.menu-text-items
  font-size: 20px

  &:hover
    border-width: 0 0 1px
    border-style: solid
    boder-color: white
    cursor: pointer
</style>
