<template>
  <button type="button" class="btn" @click.prevent="GithubButton" v-text="label"/>
</template>

<script>
export default {
  name: 'GithubButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    GithubButton () {
      this.$store.dispatch('userGithubLogin')
    }
  }
}
</script>
