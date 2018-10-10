import * as firebase from 'firebase/app'
import 'firebase/auth'

// Caramelldansen-dev
var config = {
  apiKey: 'AIzaSyCdpJPt9itTkxpUuQiuW_rMRdok9n5NNug',
  authDomain: 'caramelldansen-dev.firebaseapp.com',
  databaseURL: 'https://caramelldansen-dev.firebaseio.com',
  projectId: 'caramelldansen-dev',
  storageBucket: 'caramelldansen-dev.appspot.com',
  messagingSenderId: '968816654149'
}

// Erena
// var config = {
//   apiKey: 'AIzaSyCiV20HEMEKEm86g87M3GrDaxH6JoPk-UU',
//   authDomain: 'erena-staging-212604.firebaseapp.com',
//   databaseURL: 'https://erena-staging-212604.firebaseio.com',
//   projectId: 'erena-staging-212604',
//   storageBucket: 'erena-staging-212604.appspot.com',
//   messagingSenderId: '362927228276'
// }

if (!firebase.apps.length) firebase.initializeApp(config)
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const FacebookProvider = new firebase.auth.FacebookAuthProvider()
export const auth = firebase.auth()
export default firebase
