
<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar square>
              <img alt="AppIcon" src="~assets/app-icon.svg" />
            </q-avatar>
            {{$g.app.name}} ログイン
          </q-toolbar-title>
          <!-- <div>{{ $g.app.version }}</div> -->
        </q-toolbar>
      </q-header>

      <q-footer elevated class="bg-grey-10" style="height: 32px">
        <div class="text-center">{{$g.app.copy}}</div>
      </q-footer>

      <q-page-container>
        <q-page class="text-center">
          <div class="row">
            <div class="col-12 col-sm-5 bg-blue-grey-1 shadow-3">
              <div class="q-pt-md">下記のいずれかの方法でログインしてください。</div>
              <div id="firebaseui-auth-container"></div>
            </div>
            <div class="col-12 col-sm-7 window-height q-pa-md">
              <div>下記のいずれかの方法でログインしてください。</div>
              <div>下記のいずれかの方法でログインしてください。</div>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
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
      routePath: this.$route.path
    }
  },
  watch: {
  },
  methods: {
    proc () {
      console.log('>> proc', this.routePath)
    }
  },
  mounted () {
    console.log('>> mounted', this.routePath)
    // FirebaseUIの開始
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  beforeDestroy () {
    console.log('>> beforeDestroy', this.routePath)
  }
}
</script>

<style src="../../node_modules/firebaseui-ja/dist/firebaseui.css">
</style>
