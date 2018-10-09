<template>
  <button type="button" class="btn" @click.prevent="GoogleButton" v-text="label"/>
</template>

<script>
export default {
  name: 'GoogleButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    GoogleButton () {
      this.$store.dispatch('userGoogleLogin')
    }
  }
}
</script>
