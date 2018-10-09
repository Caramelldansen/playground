import { auth } from '@/services/fireinit.js'
import { setToken } from '~/utils/auth'

export default context => {
  // const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        user
          .getIdToken()
          .then((idToken) => {
            setToken(idToken)
          })
      }
      resolve()
    })
  })
}
