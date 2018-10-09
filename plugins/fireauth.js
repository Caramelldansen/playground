import { auth } from '@/services/fireinit.js'

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        user
          .getIdToken()
          .then((idToken) => {
            store.commit('setToken', idToken)
          })
      }
      resolve()
    })
  })
}
