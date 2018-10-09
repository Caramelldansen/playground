import Vuex from 'vuex'
import firebase from 'firebase'
import { auth } from '@/services/fireinit.js'
import { unsetToken } from '~/utils/auth'
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
          .then((user) => {
            // return createNewAccount(user)
          })
      },
      userGoogleLogin ({ commit }) {
        return new Promise((resolve, reject) => {
          auth.useDeviceLanguage()
          const provider = new firebase.auth.GoogleAuthProvider()
          provider.addScope('https://www.googleapis.com/auth/plus.login')
          provider.setCustomParameters({
            'login_hint': 'user@example.com'
          })

          auth
            .signInWithPopup(provider)
            .then((result) => {
            // createNewAccount({
            //   newImage: result.additionalUserInfo.profile.picture, // just use their existing user image to start
            //   ...result.user
            // })
              commit('setUser', result.user)
              resolve()
            }).catch((error) => {
              console.log(error)
            })
        })
      },
      // userGithubLogin ({ commit }) {
      //   auth.useDeviceLanguage()
      //   const provider = new firebase.auth.GithubAuthProvider()
      //   provider.addScope('user:email')
      //   return auth
      //     .signInWithPopup(provider)
      //     .then((result) => {
      //       createNewAccount({
      //         newImage: result.additionalUserInfo.profile.avatar_url, // just use their existing user image to start
      //         ...result.user
      //       })
      //       return commit('setUser', result.user)
      //     }).catch((error) => {
      //       console.log(error)
      //     })
      // },
      userLogin ({ commit }, account) {
        return auth
          .signInWithEmailAndPassword(account.email, account.password)
          .then((user) => {
            return commit('setUser', user)
          })
      },
      userLogout ({ commit }) {
        console.log('logout')
        return auth
          .signOut()
          .then(() => {
            console.log('logout then')
            unsetToken()
            commit('resetUser')
          })
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
