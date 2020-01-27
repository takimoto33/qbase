import { register } from 'register-service-worker'
import { Notify } from 'quasar'

// The ready(), registered(), cached(), updatefound() and updated()
// events passes a ServiceWorkerRegistration instance in their arguments.
// ServiceWorkerRegistration: https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration

register(process.env.SERVICE_WORKER_FILE, {
  // The registrationOptions object will be passed as the second argument
  // to ServiceWorkerContainer.register()
  // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

  // registrationOptions: { scope: './' },

  ready () {
    if (process.env.DEV) {
      console.log('>>> PWA : App is being served from cache by a service worker.')
    }
  },

  registered (/* registration */) {
    if (process.env.DEV) {
      console.log('>>> PWA : Service worker has been registered.')
    }
  },

  cached (/* registration */) {
    if (process.env.DEV) {
      console.log('>>> PWA : Content has been cached for offline use.')
    }
  },

  updatefound (/* registration */) {
    if (process.env.DEV) {
      console.log('>>> PWA : New content is downloading.')
    }
  },

  updated (/* registration */) {
    if (process.env.DEV) {
      console.log('>>> PWA : 新しいバージョンが見つかりました。')
    }
    Notify.create({
      message: '新しいバージョンが見つかりました。',
      icon: 'mdi-cloud-download',
      closeBtn: '更新する',
      timeout: 10000,
      onDismiss () {
        location.reload(true)
      }
    })
  },
  /*
    import { Notify } from 'quasar'
    quasar.conf.js pwa に下記の記述が必要！！
    workboxOptions: { skipWaiting: true },
  */

  offline () {
    if (process.env.DEV) {
      console.log('>>> PWA : No internet connection found. App is running in offline mode.')
    }
  },

  error (err) {
    if (process.env.DEV) {
      console.error('>>> PWA : Error during service worker registration:', err)
    }
  }
})
