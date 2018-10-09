<template>
  <button type="button" class="btn" @click.prevent="FacebookButton" v-text="label"/>
</template>

<script>
export default {
  name: 'FacebookButton',
  props: {
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    FacebookButton () {
      this.$store.dispatch('userFacebookLogin').then(() => {
        location.reload()
      })
    }
  }
}
</script>
