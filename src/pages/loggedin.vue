<template>
  <q-page padding>
    <p>ログイン完了</p>
    <div class="text-center">
      <q-btn @click="logout" color="negative" icon="mdi-logout" label="ログアウト" />
      <pre>
        {{ env }}
      </pre>
      <div class="q-gutter-x-sm">
        <q-avatar>
          <img :src="$g.user.photoURL" />
        </q-avatar>
        <q-avatar size="md">
          <img :src="$g.user.photoURL" />
        </q-avatar>
        <q-avatar size="100px">
          <img :src="$g.user.photoURL" />
        </q-avatar>
        <q-btn round>
          <q-avatar size="40px">
            <img :src="$g.user.photoURL" />
          </q-avatar>
        </q-btn>
      </div>
      <!-- <my-components /> -->
    </div>
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
      bar: 'bar'
    }
  },
  watch: {
  },
  methods: {
    logout () {
      this.$firebase.auth.signOut().then(function () {
        console.log('logout 完了')
      }).catch(function (error) {
        console.log('logout エラー', error)
      })
    }
  },
  mounted () {
    console.log('mounted')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  }
}
</script>

<style lang="sass" scoped>
.foo
  background: #998800
  max-width: 100%
</style>
