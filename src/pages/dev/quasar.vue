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
      bar: 'bar'
    }
  },
  watch: {
  },
  methods: {
    proc1: function () {
      console.log('proc1', this.foo)
    },
    proc2 () { // 基本はコレ
      console.log('proc2', this.foo)
    },
    proc3: () => {
      console.log('proc3', 'foo')
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
  background: #998800;
  max-width: 100%
</style>
