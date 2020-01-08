import Vue from 'vue'

const version = '0.0.0'
const globals = {
  app: {
    name: 'QBase',
    title: 'Quasar テンプレート',
    version: 'Ver. ' + version,
    ver: version
  },
  user: {
    uid: null,
    email: null,
    emailVerified: false,
    displayName: null,
    photoURL: null,
    phoneNumber: null
  },
  location: {
    href: location.href,
    protocol: location.protocol,
    host: location.host,
    hostname: location.hostname,
    port: location.port,
    pathname: location.pathname,
    search: location.search,
    hash: location.hash,
    origin: location.origin
  }
}
Vue.prototype.$g = globals
console.log('>>> GLOBALS 初期化完了 this.$g')
