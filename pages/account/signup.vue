<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2>
      <div class="columns">
        <div class="one-half column centered">
          <div class="hero">
            <div class="hero-body">
              <h1 class="title">Authentication v1</h1>
              <h2 class="subtitle">Sign up to start using the application</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="one-half column centered">
          <SignupForm />
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import SignupForm from '~/components/account/SignUpForm.vue'

export default {
  middleware: 'anonymous',
  components: {
    SignupForm
  }
}
</script>
