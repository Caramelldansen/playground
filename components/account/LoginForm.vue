<template>
  <div>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label>Email</label>
        <div class="control">
          <input :class="{ 'is-danger': invalidEmail }" v-model="email" class="form-control" type="email" placeholder="Account Email">
        </div>
        <p v-if="invalidEmail" class="error">This email is invalid</p>
      </div>

      <div class="form-group">
        <label>Password</label>
        <div class="control">
          <input :class="{ 'is-danger': invalidPassword }" v-model="password" class="form-control" type="password" placeholder="Password">
        </div>
        <p v-if="invalidPassword" class="error">This password is invalid</p>
      </div>

      <div class="form-group">
        <p><nuxt-link to="/account/signup">I don't have an account</nuxt-link></p>
      </div>

      <div class="form-group">
        <div v-if="formError.length > 0" class="flash flash-error" v-text="formError"/>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Log In</button>
      </div>

      <div class="form-actions mt-2">
        <GoogleButton label="Sign In With Google" />
      </div>

      <div class="form-actions mt-2">
        <GithubButton label="Sign In With Github" />
      </div>
    </form>
  </div>
</template>

<script>
import GoogleButton from '~/components/account/3rd-party/GoogleButton.vue'
import GithubButton from '~/components/account/3rd-party/GithubButton.vue'

export default {
  name: 'LoginForm',
  components: {
    GoogleButton,
    GithubButton
  },
  data () {
    return {
      email: '',
      password: '',
      formError: ''
    }
  },
  computed: {
    invalidEmail () {
      return false // !this.email.includes('@')
    },
    invalidPassword () {
      return false // !this.password.length > 12
    }
  },
  methods: {
    signup () {
      this.formError = ''
      this.$store.dispatch('userLogin', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/account')
        })
        .catch((error) => {
          console.log(error)
          this.formError = error.message
        })
    }
  }
}
</script>
