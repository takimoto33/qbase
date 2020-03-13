<template>
  <q-page padding>
    <q-btn @click="proc2" color="negative" icon="mdi-github-circle" label="テスト" />
    <p>Quasar($q)</p>
    <pre>
      {{ JSON.stringify($q, null, 4) }}
    </pre>
    <!-- <my-components /> -->
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
      q: this.$q,
      foo: 'foo',
      routePath: this.$route.path
    }
  },
  watch: {
  },
  methods: {
    proc1: function () {
      console.log('>> proc1', this.routePath)
    },
    proc2 () { // 基本はコレ
      console.log('>> proc2', this.routePath)
      this.$q.dark.toggle()
    },
    proc3: () => {
      console.log('>> proc3', this.routePath)
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
  background: #998800;
  max-width: 100%
</style>
