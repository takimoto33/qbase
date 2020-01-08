import Vue from 'vue'

const version = '0.0.0'
const globals = {
  app: {
    name: 'QBase',
    title: 'Quasar テンプレート',
    version: 'Ver. ' + version,
    ver: version
  },
  auth: {
    signedIn: false,
    checkedIn: false,
    mode: null,
    admin: false,
    user: {
      uid: null,
      email: null,
      name: null,
      room: null
    }
  },
  user: {
    uid: null,
    email: null,
    emailVerified: false,
    displayName: null,
    photoURL: null,
    phoneNumber: null
  }
}
Vue.prototype.$g = globals
console.log('>>> GLOBALS 初期化完了 this.$g')
