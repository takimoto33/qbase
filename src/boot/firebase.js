import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// import 'firebase/messaging'

// Firebaseの初期化
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
}
const fireApp = firebase.initializeApp(config)

console.log('>>> Firebase 初期化完了 this.$firebase')
Vue.prototype.$firebase = {
  auth: fireApp.auth(),
  // fireauth: firebase.auth,
  db: fireApp.firestore().collection(process.env.NODE_ENV),
  storage: fireApp.storage()
}
