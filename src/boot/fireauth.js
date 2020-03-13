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
      Vue.prototype.$g.user.auth.level = 100
      Vue.prototype.$g.user.auth.expire = null
      if (location.hash !== '#/home') router.replace('/home')
    } else {
      console.log('>>> 未認証')
      Vue.prototype.$g.user.auth.level = 0
      if (location.hash !== '#/login') router.replace('/login')
    }
    console.log('>> Auth Level = ' + Vue.prototype.$g.user.auth.level)
  })

  // 認証情報に伴うナビゲーションガード設定
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => (record.meta.requiresMode === 'login'))) {
      if (Vue.prototype.$g.user.auth.level === 0 || Vue.prototype.$g.user.auth.level >= 100) {
        next()
      } else {
        next({ path: '/' })
      }
    } else if (to.matched.some(record => (record.meta.requiresMode === 'regist'))) {
      if (Vue.prototype.$g.user.auth.levelel === 1 || Vue.prototype.$g.user.auth.level >= 100) {
        next()
      } else {
        next({ path: '/' })
      }
    } else if (to.matched.some(record => (record.meta.requiresMode === 'user'))) {
      if (Vue.prototype.$g.user.auth.level >= 10) {
        next()
      } else {
        next({ path: '/' })
      }
    } else if (to.matched.some(record => (record.meta.requiresMode === 'admin'))) {
      if (Vue.prototype.$g.user.auth.level >= 100) {
        next()
      } else {
        next({ path: '/home' })
      }
    } else {
      next()
    }
  })
  console.log('>> Firebase 初期化完了 ナビゲーションガード 設定完了')
}
