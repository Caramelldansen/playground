import { auth } from '@/services/fireinit.js'

export default function ({ isServer, store, redirect }) {
  if (!isServer && (store.getters.isAuthenticated && auth.currentUser)) {
    return redirect('/account')
  }
}
