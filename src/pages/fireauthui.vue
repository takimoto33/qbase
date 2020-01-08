<template>
  <div class="xfixed-center text-center">
    <h5>ログイン</h5>
    <!-- <q-btn @click="proc" color="negative" icon="mdi-github-circle" label="テスト" /> -->
    <!-- <img alt="Quasar logo" src="~assets/app-icon.svg" style="width:50vw;max-width:200px;" /> -->
    <div id="firebaseui-auth-container"></div>
    <!-- <my-components /> -->
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import * as firebaseui from 'firebaseui-ja'
const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    // firebase.auth.YahooAuthProvider.PROVIDER_ID,
    'apple.com'

  ]
  // credentialHelper: firebaseui.auth.CredentialHelper.NONE
}
const ui = new firebaseui.auth.AuthUI(firebase.auth())
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
    console.log('mounted')
    ui.start('#firebaseui-auth-container', uiConfig)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  }
}
</script>

<style lang="sass" scoped>
.foo
  background: #998800;
  max-width: 100%
</style>
