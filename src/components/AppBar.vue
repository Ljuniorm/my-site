<template>
  <v-app-bar
    app
    class="nav"
    height="80"
    :color="colorAppBar.color"
    dark
    :flat="colorAppBar.flat"
  >
    <v-row align="center" no-gutters class="px-6">
      <v-col cols="6">
        <v-progress-circular
          size="62"
          rotate="1500"
          indeterminate
          color="#CACEDE"
        >
          <v-avatar size="60">
            <img src="../assets/eu.jpg" sizes="40" />
          </v-avatar>
        </v-progress-circular>
        <span class="ml-4 mb-12 name">Luiz Junior</span>
      </v-col>
      <v-col cols="6"><span>eae</span> </v-col>
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
</style>
