<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <h2 class="title">Sign In with Email</h2>

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

      <v-btn class="signIn mb-2" primary @click.native="emailLogin">Log in</v-btn>
      <v-btn class="signIn mb-2" primary @click.native="emailSignup">Sign up</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      formEmail: '',
      formPassword: ''
    }
  },
  methods: {
    emailLogin() {
      this.$store
        .dispatch('signInWithEmail', {
          email: this.formEmail,
          password: this.formPassword
        })
        .then(() => {
          this.formEmail = ''
          this.formPassword = ''
        })
        .catch(e => {
          console.log(e.message)
        })
    },
    emailSignup() {
      this.$store
        .dispatch('signUpWithEmail', {
          email: this.formEmail,
          password: this.formPassword
        })
        .then(() => {
          this.formEmail = ''
          this.formPassword = ''
        })
        .catch(e => {
          console.log(e.message)
        })
    }
  }
}
</script>

<style lang="css">
.signIn {

}
</style>
