<template>
  <form>
    <dl class="form-group">
      <dt><label class="text-inherit">Display Name</label></dt>
      <dd class="control">
        <input v-model="newData.displayName" class="form-control" type="email" placeholder="Display Name" @input="updateField('displayName')">
      </dd>
    </dl>
    <dl class="form-group">
      <dt><label class="text-inherit">Profile Image</label></dt>
      <dd class="control">
        <input ref="fileInput" class="form-control" type="file" accept="image/*" placeholder="Profile Image" @change="updateProfileImage">
      </dd>
    </dl>
    <div class="form-group">
      <div v-if="formSuccess.length > 0" class="flash" v-text="formSuccess"/>
      <div v-if="formError.length > 0" class="flash flash-error" v-text="formError"/>
    </div>
  </form>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase'

export default {
  data () {
    return {
      newData: {
        displayName: '',
        image: ''
      },
      debounceTimer: setTimeout(() => {}),
      formError: '',
      formSuccess: ''
    }
  },
  computed: mapState([
    'user',
    'account'
  ]),
  mounted () {
    this.newData.displayName = this.account.displayName
    this.newData.image = this.account.image
  },
  methods: {
    resetFormMessages () {
      this.formSuccess = this.formError = ''
    },
    updateField (key) {
      this.resetFormMessages()
      clearTimeout(this.debounceTimer)
      this.debounceTimer = setTimeout(() => {
        console.info('update field', key)
        this.$store.dispatch('userUpdate', this.newData)
          .then(() => {
            this.formSuccess = 'Successfully updated your account details'
          })
          .catch((err) => {
            this.formError = 'Error saving the profile changes'
            console.error(err)
          })
      }, 500)
    },
    updateProfileImage () {
      this.resetFormMessages()
      const file = this.$refs.fileInput.files[0]
      const ref = firebase.storage().ref(`accounts/profile/${this.user.uid}`)
      ref.put(file).then((snapshot) => {
        return this.$store.dispatch('userUpdateImage', snapshot.downloadURL)
      })
        .then(() => {
          this.formSuccess = 'Successfully uploaded a new profile image'
          // reset the form input
          this.$refs.fileInput.value = null
        })
        .catch((err) => {
          this.formError = 'Error uploading new profile image'
          console.error(err)
        })
    }
  }
}
</script>
