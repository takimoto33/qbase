<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="mdi-menu"
          aria-label="Menu"
        />
        <q-toolbar-title>{{$g.app.title}}</q-toolbar-title>
        <div>{{ $g.app.version }}</div>
        <q-btn dence flat round icon="mdi-theme-light-dark" @click="$q.dark.toggle()" />
        <q-btn dence flat round icon="mdi-account">
          <!-- <q-avatar square size="md">
            <img :src="$g.user.photoURL" />
          </q-avatar>-->
          <q-menu>
            <div>
              <div class="row no-wrap q-pa-md">
                <div class="column">
                  <div class="text-h6 q-mb-md">ログイン情報</div>
                  <div>Quasar：{{$q.version}}</div>
                  <div>言語：{{$q.lang.getLocale()}}</div>
                  <div>環境：{{$q.platform.is.platform}} {{$q.platform.is.name}} {{$q.platform.is.versionNumber}}</div>
                </div>
                <q-separator vertical inset color="grey-5" class="q-mx-md" />
                <div class="column items-center">
                  <q-avatar square size="72px">
                    <img :src="$g.user.photoURL" />
                  </q-avatar>
                  <div class="text-subtitle1 q-mt-md q-mb-xs">{{$g.user.displayName}}</div>
                </div>
              </div>
              <div class="q-px-md">
                <div>UID：{{$g.user.uid}}</div>
                <div>メール：{{$g.user.email}}</div>
                <div>電話：{{$g.user.phoneNumber}}</div>
                <div>アイコン：{{$g.user.photoURL}}</div>
              </div>
              <div class="q-pa-md text-center">
                <q-btn @click="logout" color="negative" label="ログアウト" icon-right="mdi-logout" />
              </div>
            </div>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above elevated>
      <div class="bg-grey-9 text-grey-2 absolute-top shadow-3" style="height: 130px">
        <div class="row no-wrap q-pa-md">
          <div class="column text-caption">
            <div class="text-subtitle1">{{$g.user.displayName}}</div>
            <div>{{$g.user.email}}</div>
            <div>Quasar：{{$q.version}}</div>
            <div>言語：{{$q.lang.getLocale()}}</div>
            <div>環境：{{$q.platform.is.platform}} {{$q.platform.is.name}} {{$q.platform.is.versionNumber}}</div>
          </div>
          <q-separator vertical inset color="grey-6" class="q-mx-md" />
          <div class="column items-center q-ma-sm">
            <q-avatar square size="72px">
              <img :src="$g.user.photoURL" />
            </q-avatar>
            <!-- <div class="text-subtitle1 q-mt-md q-mb-xs">{{$g.user.displayName}}</div> -->
          </div>
        </div>
      </div>
      <q-scroll-area style="height: calc(100% - 130px); margin-top: 130px">
        <q-list padding>
          <!-- <q-item-label header>Essential Links</q-item-label> -->
          <q-expansion-item
            v-if="DEV"
            expand-separator
            icon="mdi-android-debug-bridge"
            label="開発メニュー"
            caption="Developers Only"
            :content-inset-level="insetLevel"
          >
            <q-item clickable v-ripple to="/" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-home" />
              </q-item-section>
              <q-item-section>
                <q-item-label>ルート</q-item-label>
                <q-item-label caption>プライマリページ</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/login" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-login" />
              </q-item-section>
              <q-item-section>
                <q-item-label>ログイン</q-item-label>
                <q-item-label caption>ログインページ</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/regist" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-account-plus" />
              </q-item-section>
              <q-item-section>
                <q-item-label>ユーザー登録</q-item-label>
                <q-item-label caption>レジストページ</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/home" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-home-account" />
              </q-item-section>
              <q-item-section>
                <q-item-label>ユーザーホーム</q-item-label>
                <q-item-label caption>ユーザートップページ</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple to="/home/proc01" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-shield-account" />
            </q-item-section>
            <q-item-section>
              <q-item-label>機能０１</q-item-label>
              <q-item-label caption>Process01</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-icon name="mdi-menu-right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/home/qr-generator" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-qrcode" />
            </q-item-section>
            <q-item-section>
              <q-item-label>QRコード生成</q-item-label>
              <q-item-label caption>QR code generator</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-icon name="mdi-menu-right" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/home/qr-reader" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-qrcode-scan" />
            </q-item-section>
            <q-item-section>
              <q-item-label>QRコード読込</q-item-label>
              <q-item-label caption>QR code reader</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-icon name="mdi-menu-right" />
            </q-item-section>
          </q-item>

          <q-expansion-item
            v-if="DEV"
            expand-separator
            icon="mdi-dev-to"
            label="開発者メニュー"
            caption="Developers Only"
            :content-inset-level="insetLevel"
          >
            <q-item clickable v-ripple to="/dev/env" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-run" />
              </q-item-section>
              <q-item-section>
                <q-item-label>実行環境</q-item-label>
                <q-item-label caption>prccess.env</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/dev/quasar" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-star" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Quasar</q-item-label>
                <q-item-label caption>$q</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/dev/globals" active-class="my-menu-link">
              <q-item-section avatar>
                <q-icon name="mdi-earth" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Grobals</q-item-label>
                <q-item-label caption>$g</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-menu-right" />
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-expansion-item
            v-if="DEV"
            expand-separator
            icon="mdi-star"
            label="Quasarメニュー"
            caption="Developers Only"
            :content-inset-level="insetLevel"
          >
            <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
              <q-item-section avatar>
                <q-icon name="mdi-school" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Docs</q-item-label>
                <q-item-label caption>quasar.dev</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
              <q-item-section avatar>
                <q-icon name="mdi-github-circle" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Github</q-item-label>
                <q-item-label caption>github.com/quasarframework</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
              <q-item-section avatar>
                <q-icon name="mdi-chat" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Discord Chat Channel</q-item-label>
                <q-item-label caption>chat.quasar.dev</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
              <q-item-section avatar>
                <q-icon name="mdi-forum" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Forum</q-item-label>
                <q-item-label caption>forum.quasar.dev</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
              <q-item-section avatar>
                <q-icon name="mdi-twitter" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Twitter</q-item-label>
                <q-item-label caption>@quasarframework</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
              <q-item-section avatar>
                <q-icon name="mdi-facebook" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Facebook</q-item-label>
                <q-item-label caption>@QuasarFramework</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      DEV: process.env.DEV,
      insetLevel: 0.5
    }
  },
  methods: {
    logout () {
      this.$firebase.auth.signOut().then(function () {
        console.log('>>> logout 完了')
      }).catch(function (error) {
        console.log('>>> logout エラー', error)
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.my-menu-linkx
  color: black
  background: #aaaaaa
</style>
