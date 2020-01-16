export default ({ app, router, Vue }) => {
  // Firebase Authentication を確保
  const auth = Vue.prototype.$firebase.auth
  // 認証情報を取得
  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log('>>> 認証済', user)
      Vue.prototype.$g.user.uid = user.uid
      Vue.prototype.$g.user.email = user.email
      Vue.prototype.$g.user.emailVerified = user.emailVerified
      Vue.prototype.$g.user.displayName = user.displayName
      Vue.prototype.$g.user.photoURL = user.photoURL
      Vue.prototype.$g.user.phoneNumber = user.phoneNumber
      Vue.prototype.$g.user.providerData = user.providerData
      if (location.hash !== '#/loggedin') router.replace('/loggedin')
    } else {
      console.log('>>> 未認証')
      if (location.hash !== '#/login') router.replace('/login')
    }
  })
}
