<template>
  <q-page padding>
    <p>雛形</p>
    <div class="text-center">
      <q-btn @click="proc3" color="negative" icon="mdi-github-circle" label="テスト" />
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
