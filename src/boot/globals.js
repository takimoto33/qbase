import Vue from 'vue'

const version = '0.0.1'
const globals = {
  app: {
    name: 'QRcode',
    title: 'QRコード',
    version: 'Ver. ' + version,
    ver: version,
    copy: 'Copyright \u00A9 2020 Digital Bremens'
  },
  user: {
    uid: null,
    email: null,
    emailVerified: false,
    displayName: null,
    photoURL: null,
    phoneNumber: null,
    providerData: []
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
