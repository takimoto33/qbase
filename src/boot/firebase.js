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

// FirebaseUIの初期化 これはログインページに持って行く
// import * as firebaseui from 'firebaseui-ja'
// const uiConfig = {
//   // signInFlow: 'popup',
//   signInSuccessUrl: location.pathname,
//   signInOptions: [
//     {
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
//     },
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//     firebase.auth.TwitterAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID
//   ]
//   // credentialHelper: firebaseui.auth.CredentialHelper.NONE
// }
// const ui = new firebaseui.auth.AuthUI(firebase.auth())

console.log('>>> Firebase 初期化完了 this.$firebase')
Vue.prototype.$firebase = {
  auth: fireApp.auth(),
  // ui: ui,
  // uiConfig: uiConfig,
  db: fireApp.firestore().collection(process.env.NODE_ENV),
  storage: fireApp.storage()
}
