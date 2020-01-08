# Quasar Base (qbase)

Quasar で Webアプリ(spa, pwa)を開発する時のお勧め初期状態。
## 日本語化の設定
/quasar.conf.js
```javascript:/quasar.conf.js
module.exports = function (ctx) {
  return {
    boot: [
      'i18n',
      'axios'
    ],
    css: [
      'app.sass'
    ],
    extras: [
      // 'ionicons-v4',
      'mdi-v4', // アイコンフォントをmdi-v4にする
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!
      // 'material-icons', // optional, you are not bound to it
      'roboto-font' // optional, you are not bound to it
    ],
    framework: {
      iconSet: 'mdi-v4', // アイコンセットをmdi-v4にする
      lang: 'ja', // 言語パックを日本語にする
      all: 'auto',
      components: [],
      directives: [],
      plugins: []
    }
  }
}
```
## icon-genieの導入
```bash
$ quasar ext add @quasar/icon-genie
```
ルートディレクトリに

- /app-icon.png (1240x1240)
- /app-splashscreen.png (2436x2436)

を追加します。
## Firebaseの導入
```bash
$ npm install --save firebase
```
## .envの導入
```bash
$ quasar ext add @quasar/dotenv
```
/.env
```bash
# Firebase 接続設定例
apiKey="api-key"
authDomain="project-id.firebaseapp.com"
databaseURL="https://project-id.firebaseio.com"
projectId="project-id",
storageBucket="project-id.appspot.com"
messagingSenderId="sender-id"
appID="app-id"
```
## アイコンフォントの設定
## PWA(Sevice-worker)の設定

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
