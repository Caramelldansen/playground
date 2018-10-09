<template>
  <v-content>
    <h1 class="text-xs-center">Welcome Auth User</h1>
  </v-content>
</template>

<script>
export default {
  middleware: 'authenticated'
}
</script>
