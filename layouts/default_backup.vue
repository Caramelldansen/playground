<template>
  <div class="">
    <v-toolbar>
      <v-toolbar-side-icon/>
      <v-toolbar-title><nuxt-link to="/">Home</nuxt-link></v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="user" flat><nuxt-link class="navbar-item" to="/account" v-text="user.email"/></v-btn>
        <v-btn v-if="user" flat @click.native="signOut">Sign Out</v-btn>
        <v-btn v-else flat><nuxt-link class="navbar-item" to="/account/login">Login</nuxt-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-container pt-5>
      <nuxt />
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'user'
  ]),
  methods: {
    signOut () {
      this.$store.dispatch('userLogout')
        .then(() => {
          this.$router.push('/account/login')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
