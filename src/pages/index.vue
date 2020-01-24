<template>
  <!-- <div class="flex flex-center"> -->
  <!-- <div class="text-center"> -->
  <div>
    <div class="fixed-center text-center">
      <img alt="アイコン" src="~assets/app-icon.svg" style="width:50vw;max-width:250px;" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      location: location.pathname,
      q: this.$q,
      env: process.env,
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
