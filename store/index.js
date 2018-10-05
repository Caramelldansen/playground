import Vuex from 'vuex'
import firebase, { auth, GoogleProvider } from '@/services/fireinit.js'

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user
      },
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload
      },
    },
    actions: {
      signInWithEmail({ commit }, { email, password }) {
        return new Promise((resolve, reject) => {
          auth
            .signInWithEmailAndPassword(email, password)
            .then(user => {
              console.log(user.getIdToken())
            })
            .catch(error => {
              console.log(error)
            })
          resolve()
        })
      },
      signUpWithEmail({ commit }, { email, password }) {
        return new Promise((resolve, reject) => {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
              console.log(user)
            })
            .catch(error => {
              console.log(error)
            })
          resolve()
        })
      },
      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit('setUser', null)
          })
          .catch(err => console.log(error))
      },
    },
  })
}

export default createStore
