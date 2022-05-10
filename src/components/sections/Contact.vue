<template>
  <div class="container-contact">
    <v-row no-gutters justify="center">
      <span class="title-section">Contact</span>
    </v-row>
    <v-row class="pb-3" justify="center" no-gutters>
      <v-btn class="px-8" height="40" width="40" color="white" icon @click="openUrlLink(contact.url)" v-for="(contact, i) in contacts" :key="i">
        <v-icon size="40">
          {{contact.icon}}
        </v-icon>
      </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contacts: [{icon: 'mdi-instagram', url: 'https://www.instagram.com/juniorlimaam/'}, {icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/luizrobertolopes/'}, {icon: 'mdi-github', url: 'https://www.linkedin.com/in/luizrobertolopes/'}]
    }
  },
  methods: {
    openUrlLink (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="sass" scoped>
.container-contact
  height: 150px
  width: 100vw
  background-color: black
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>