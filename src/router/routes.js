
const routes = [
  {
    path: '/',
    component: () => import('pages/index.vue')
  },
  {
    path: '/login',
    component: () => import('pages/fireauthui.vue')
    // meta: { requiresSignin: true }
  },
  {
    path: '/regist',
    component: () => import('pages/regist.vue')
    // meta: { requiresSignin: true }
  },
  {
    path: '/home',
    component: () => import('layouts/index.vue'),
    // meta: { requiresShowcase: true },
    children: [
      { path: '', component: () => import('pages/home/index.vue') },
      { path: 'proc01', component: () => import('pages/home/proc01.vue') },
      { path: 'qr-generator', component: () => import('pages/home/qr-generator.vue') },
      { path: 'qr-reader', component: () => import('pages/home/qr-reader.vue') }
    ]
  },
  {
    path: '/dev',
    component: () => import('layouts/index.vue'),
    // meta: { requiresShowcase: true },
    children: [
      { path: 'env', component: () => import('pages/dev/env.vue') },
      { path: 'quasar', component: () => import('pages/dev/quasar.vue') },
      { path: 'globals', component: () => import('pages/dev/globals.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
