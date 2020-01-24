<template>
  <q-page padding>
    <p>ログイン完了</p>
  </q-page>
</template>

<script>
// コンポーネント
// import myComponents from 'components/my-components'

export default {
  components: {
    // 'my-components': myComponents
  },
  data () {
    return {
      // user: this.$g.user,
      env: process.env,
      foo: 'foo',
      routePath: this.$route.path
    }
  },
  watch: {
  },
  methods: {
    logout () {
      this.$firebase.auth.signOut().then(function () {
        console.log('>> logout 完了', this.routePath)
      }).catch(function (error) {
        console.log('>> logout エラー', this.routePath, error)
      })
    }
  },
  mounted () {
    console.log('>> mounted', this.routePath)
  },
  beforeDestroy () {
    console.log('>> beforeDestroy', this.routePath)
  }
}
</script>

<style lang="sass" scoped>
.foo
  background: #998800
  max-width: 100%
</style>
