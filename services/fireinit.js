import * as firebase from 'firebase/app'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyCdpJPt9itTkxpUuQiuW_rMRdok9n5NNug',
  authDomain: 'caramelldansen-dev.firebaseapp.com',
  databaseURL: 'https://caramelldansen-dev.firebaseio.com',
  projectId: 'caramelldansen-dev',
  storageBucket: 'caramelldansen-dev.appspot.com',
  messagingSenderId: '968816654149'
}

if (!firebase.apps.length) firebase.initializeApp(config)
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export default firebase
