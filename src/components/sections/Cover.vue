<template>
  <div class="container-cover">
    <v-avatar class="mb-3" style="border: 2px solid white" size="225">
      <img src="../../assets/eu-cover.png" />
    </v-avatar>
    <span class="white--text my-name">Luiz Roberto Lopes de Moura Junior</span>
    <span class="white--text my-subtitle">Front-end and Mobile Developer</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.container-cover
  height: 100vh
  width: 100vw
  background-image: url("../../assets/background-cover.jpg")
  background-size: 100% 100%
  background-attachment: fixed
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

.my-name
  font-size: 30px
  font-weight: bold

.my-subtitle
  font-size: 20px
</style>