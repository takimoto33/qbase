<template>
  <!-- <div class="flex flex-center"> -->
  <div class="text-center">
    <div class="col-lg-3 col-sm-6 col-sm-10 col-xs-12">
      <div>
        <img alt="アイコン" src="~assets/app-icon.svg" style="width:50vw;max-width:250px;" />
      </div>
      <div>
        ■ process.env
        <pre>
          {{ env }}
        </pre>
      </div>
      <div>
        ■ this.$g
        <pre>
          {{ $g }}
        </pre>
      </div>
      <div>
        ■ this.$q
        <pre>
          {{ $q }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      q: this.$q,
      env: process.env
    }
  }
}
</script>
