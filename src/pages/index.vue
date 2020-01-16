<template>
  <!-- <div class="flex flex-center"> -->
  <!-- <div class="text-center"> -->
  <div class="fixed-center text-center">
    AAAAAAAAAAA
    <div class="col-lg-3 col-sm-6 col-sm-10 col-xs-12">BBBBBBBBBBB</div>EEEEEEEEEEEEE
    <div class="col-lg-3 col-sm-6 col-sm-10 col-xs-12">
      <div>
        <img alt="アイコン" src="~assets/app-icon.svg" style="width:50vw;max-width:250px;" />
      </div>
    </div>
    <div class="col-lg-3 col-sm-6 col-sm-10 col-xs-12">CCCCCCCCCCCCC</div>DDDDDDDDDDDD
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      location: location.pathname,
      q: this.$q,
      env: process.env
    }
  }
}
</script>
