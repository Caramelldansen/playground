import { auth } from '@/services/fireinit.js'
import { setToken, unsetToken } from '~/utils/auth'

auth.onAuthStateChanged((user) => {
  console.log(user)
  if (user) {
    user.getIdToken().then((idToken) => {
      setToken(idToken)
    })
  } else {
    unsetToken()
  }
})
