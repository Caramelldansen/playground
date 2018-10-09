<template>
  <v-container>
    <v-layout row>
      <v-flex text-xs-center xs12 sm4 offset-sm4>
        <h2 class="title">Login with Email</h2>

        <v-form v-model="valid">
          <v-text-field
            v-model="formEmail"
            label="E-mail"
            required
          />
          <v-text-field
            v-model="formPassword"
            type="password"
            label="Password"
            required
          />
        </v-form>

        <v-btn
          class="signIn mb-2"
          primary
          @click.native="emailLogin"
        >
          Log in
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout row mt-5>
      <v-flex row text-xs-center xs12 sm6 offset-sm3>
        <v-btn
          class="signIn mb-2"
          primary
          @click.native="googleLogin"
        >
          Log in with Google
        </v-btn>
        <v-btn
          class="signIn mb-2"
          primary
          @click.native="facebookLogin"
        >
          Log in with Facebook
        </v-btn>
        <v-btn
          class="signIn mb-2"
          primary
        >
          <nuxt-link to="/signup">Go to Sign up</nuxt-link>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    emailLogin () {
      this.$store
        .dispatch('signInWithEmail', {
          email: this.formEmail,
          password: this.formPassword
        })
        .then(() => {
          this.formEmail = ''
          this.formPassword = ''
        })
        .catch(error => {
          console.log(error.message)
        })
    },
    googleLogin () {
      this.$store.dispatch('loginWithGoogle').then(() => {
        location.reload()
      })
    },
    facebookLogin () {
      this.$store.dispatch('loginWithFacebook').then(() => {
        location.reload()
      })
    }
  }
}
</script>

<style lang="css">
.signIn {

}
</style>
