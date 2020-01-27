<template>
  <q-page padding>
    <p>QRコード生成</p>
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
    method1 () {
      console.log('>> method1', this.routePath)
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
