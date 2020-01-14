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
        <q-toolbar-title>Quasar App</q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
        <q-btn round>
          <q-avatar size="md">
            <img :src="$g.user.photoURL" />
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above elevated content-class="bg-grey-2">
      <q-img class="absolute-top" src="~assets/texture01.svg" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img :src="$g.user.photoURL" />
          </q-avatar>
          <div class="text-weight-bold">{{$g.user.displayName}}</div>
          <div>{{$g.user.email}}</div>
        </div>
      </q-img>
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
        <q-list padding>
          <!-- <q-item-label header>Essential Links</q-item-label> -->
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
                <q-icon name="mdi-chevron-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/dev/quasar">
              <q-item-section avatar>
                <q-icon name="mdi-star" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Quasar</q-item-label>
                <q-item-label caption>$q</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-chevron-right" />
              </q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/dev/globals">
              <q-item-section avatar>
                <q-icon name="mdi-earth" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Grobals</q-item-label>
                <q-item-label caption>$g</q-item-label>
              </q-item-section>
              <q-item-section avatar>
                <q-icon name="mdi-chevron-right" />
              </q-item-section>
            </q-item>
          </q-expansion-item>

          <q-item clickable v-ripple to="/pages/proc01" active-class="my-menu-link">
            <q-item-section avatar>
              <q-icon name="mdi-shield-account" />
            </q-item-section>
            <q-item-section>
              <q-item-label>機能０１</q-item-label>
              <q-item-label caption>Process01</q-item-label>
            </q-item-section>
            <q-item-section avatar>
              <q-icon name="mdi-chevron-right" />
            </q-item-section>
          </q-item>
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
  }
}
</script>

<style lang="sass" scoped>
</style>
