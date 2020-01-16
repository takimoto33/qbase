<template>
  <div>
    <q-toolbar class="text-center bg-primary text-white shadow-5">
      <q-avatar>
        <img alt="AppIcon" src="~assets/app-icon.svg" />
      </q-avatar>
      <q-toolbar-title>{{$g.app.title}}ログイン</q-toolbar-title>
      <div>{{ $g.app.version }}</div>
    </q-toolbar>
    <div class="q-mt-xl text-center">
      <!-- <h5>ログイン</h5> -->
      <!-- <q-btn @click="proc" color="negative" icon="mdi-github-circle" label="テスト" /> -->
      <!-- <img alt="Quasar logo" src="~assets/app-icon.svg" style="width:50vw;max-width:200px;" /> -->
      <!-- <div class="q-pt-lg">上記のいずれかの方法でログインしてください。</div> -->
      <div>下記のいずれかの方法でログインしてください。</div>
      <div id="firebaseui-auth-container"></div>
      <!-- <div>上記のいずれかの方法でログインしてください。</div> -->
      <div>Copyright &copy; 2020 Digital Bremens</div>
      <!-- <my-components /> -->
    </div>
  </div>
</template>

<script>
// FirebaseUIの初期化
import * as firebase from 'firebase/app'
import * as firebaseui from 'firebaseui-ja'
const ui = new firebaseui.auth.AuthUI(firebase.auth())
const uiConfig = {
  // signInFlow: 'popup',
  signInSuccessUrl: location.pathname,
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID
  ]
  // credentialHelper: firebaseui.auth.CredentialHelper.NONE
}
// コンポーネント
// import myComponents from 'components/my-components'

export default {
  components: {
    // 'my-components': myComponents
  },
  data () {
    return {
      foo: 'foo',
      bar: 'bar'
    }
  },
  watch: {
  },
  methods: {
    proc () {
      console.log('proc', this.foo)
    }
  },
  mounted () {
    // console.log('mounted', ui, uiConfig)
    // FirebaseUIの開始
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  }
}
</script>

<style src="../../node_modules/firebaseui-ja/dist/firebaseui.css">
</style>
