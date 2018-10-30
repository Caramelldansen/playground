<template>
  <div>
    <form @submit.prevent="signup">
      <div class="form-group">
        <label>Username</label>
        <div class="control">
          <input :class="{ 'is-danger': invalidUsername }" v-model="username" class="form-control" type="text" placeholder="Your Username">
        </div>
        <p v-if="invalidUsername" class="help is-danger">This username is invalid</p>
      </div>

      <div class="form-group">
        <label>Email</label>
        <div class="control">
          <input :class="{ 'is-danger': invalidEmail }" v-model="email" class="form-control" type="email" placeholder="New Account Email">
        </div>
        <p v-if="invalidEmail" class="help is-danger">This email is invalid</p>
      </div>

      <div class="form-group">
        <label>Password</label>
        <div class="control">
          <input :class="{ 'is-danger': invalidPassword }" v-model="password" class="form-control" type="password" placeholder="New Account Password">
        </div>
        <p v-if="invalidPassword" class="help is-danger">This password is invalid</p>
      </div>

      <v-layout row wrap mb-4>
        <v-flex md12 lg6>
          <v-checkbox v-model="selected" label="League of Legends" value="1" hide-details/>
        </v-flex>
        <v-flex md12 lg6>
          <v-checkbox v-model="selected" label="Overwatch" value="2" hide-details/>
        </v-flex>
        <v-flex md12>
          <v-checkbox v-model="selected" label="Defense of the Ancients" value="3" hide-details/>
        </v-flex>
      </v-layout>

      <div class="form-checkbox">
        <label>
          <input type="checkbox" name="terms">
          <span>I accept the terms and conditions</span>
        </label>
      </div>

      <div class="form-group">
        <p><nuxt-link to="/account/login">I already have an account</nuxt-link></p>
      </div>

      <div class="form-group">
        <div v-if="formError.length > 0" class="flash flash-error" v-text="formError"/>
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      selected: [],
      username: '',
      email: '',
      password: '',
      formError: ''
    }
  },
  computed: {
    gameSuscriptionsAttributes () {
      return this.selected.map(game => ({ game_id: game }))
    },
    invalidUsername () {
      return false // !this.username.length > 12
    },
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
      this.$store
        .dispatch('userCreate', {
          username: this.username,
          game_suscriptions_attributes: this.gameSuscriptionsAttributes,
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
