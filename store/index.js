import Vuex from 'vuex'
import { auth, GoogleProvider, FacebookProvider } from '@/services/fireinit.js'
// import { firebaseMutations, firebaseAction } from 'vuexfire'

// function createNewAccount (user) {
//   return firebase.database().ref(`accounts/${user.uid}`).set({
//     displayName: user.displayName || user.email.split('@')[0], // use part of the email as a username
//     email: user.email,
//     image: user.newImage || '/images/default-profile.png' // supply a default profile image for all users
//   })
// }

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      account: null
    },
    getters: {
      isAuthenticated (state) {
        return !!state.user
      }
    },
    actions: {
      // setAccountRef: firebaseAction(({ bindFirebaseRef }, path) => {
      //   return bindFirebaseRef('account', firebase.database().ref(path))
      // }),
      userCreate ({ state }, account) {
        return auth
          .createUserWithEmailAndPassword(account.email, account.password)
          .then(result => {
            result.user.getIdToken().then((idToken) => {
              console.log(idToken)
            })
          })
      },
      userLogin ({ commit }, account) {
        return auth.signInWithEmailAndPassword(account.email, account.password)
      },
      userGoogleLogin ({ commit }) {
        auth.useDeviceLanguage()
        GoogleProvider.addScope('https://www.googleapis.com/auth/plus.login')
        GoogleProvider.setCustomParameters({
          'login_hint': 'user@example.com'
        })

        return auth
          .signInWithPopup(GoogleProvider)
          .catch(error => console.log(error))
      },
      userFacebookLogin ({ commit }) {
        auth.useDeviceLanguage()
        GoogleProvider.addScope('user_birthday')

        return auth
          .signInWithPopup(FacebookProvider)
          .catch(error => console.log(error))
      },
      userLogout ({ commit }) {
        return auth.signOut()
      }
      // userUpdate ({ state }, newData) {
      //   return firebase.database().ref(`accounts/${state.user.uid}`).update({
      //     displayName: newData.displayName
      //   })
      // },
      // userUpdateImage ({ state }, image) {
      //   return firebase.database().ref(`accounts/${state.user.uid}`).update({
      //     image
      //   })
      // }
    },
    mutations: {
      // ...firebaseMutations,
      setUser (state, user) {
        state.user = user
        // return this.dispatch('setAccountRef', `accounts/${state.user.uid}`)
      },
      resetUser (state) {
        state.user = null
      }
    }
  })
}

export default createStore
