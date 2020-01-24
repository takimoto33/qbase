
<template>
  <div>
    <q-layout view="lHh lpr lFf">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-toolbar-title class="text-center">
            <q-avatar square>
              <img alt="AppIcon" src="~assets/app-icon.svg" />
            </q-avatar>
            {{$g.app.name}} ユーザー登録
          </q-toolbar-title>
          <!-- <div>{{ $g.app.version }}</div> -->
        </q-toolbar>
      </q-header>

      <q-footer elevated class="bg-grey-10" style="height: 32px">
        <div class="text-center">{{$g.app.copy}}</div>
      </q-footer>

      <q-page-container>
        <q-page padding class="text-center">
          <div class="text-subtitle1">下記の項目に記入してユーザー登録をしてください。</div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 q-px-lg q-py-md">
              <div class="q-gutter-md">
                <q-avatar size="72px">
                  <img :src="$g.user.photoURL" />
                </q-avatar>
                <q-btn @click="proc" color="primary" label="アイコン変更" icon-right="mdi-account-edit" />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6 q-px-lg q-py-md">
              <q-input v-model="regist.displayName" label="おなまえ" :dense="dense" />
              <q-input v-model="regist.displayName" label="ハンドル名" :dense="dense" />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 q-px-lg q-py-md">
              <q-input v-model="regist.email" label="メールアドレス" :dense="dense" />
              <q-input v-model="regist.email" label="メールアドレス２" :dense="dense" />
            </div>
            <div class="col-xs-12 col-sm-6 q-px-lg q-py-md">
              <q-input v-model="regist.phoneNumber" label="電話番号" :dense="dense" />
              <q-input v-model="regist.phoneNumber" label="電話番号２" :dense="dense" />
              <q-input v-model="regist.phoneNumber" label="電話番号３" :dense="dense" />
              <q-input v-model="regist.phoneNumber" label="電話番号４" :dense="dense" />
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
// FirebaseUIの初期化
// コンポーネント
// import myComponents from 'components/my-components'

export default {
  components: {
    // 'my-components': myComponents
  },
  data () {
    return {
      regist: {
        displayName: this.$g.user.displayName,
        email: this.$g.user.email,
        phoneNumber: this.$g.user.phoneNumber
      },
      dense: false,
      routePath: this.$route.path

    }
  },
  watch: {
  },
  methods: {
    proc () {
      console.log('++ proc', this.routePath)
    }
  },
  mounted () {
    console.log('>> mounted', this.routePath)
    // FirebaseUIの開始
  },
  beforeDestroy () {
    console.log('>> beforeDestroy', this.routePath)
  }
}
</script>

<style>
</style>
