
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
    path: '/loggedin',
    component: () => import('layouts/index.vue'),
    // meta: { requiresShowcase: true },
    children: [
      { path: '/', component: () => import('pages/loggedin.vue') }
    ]
  }
  // {
  //   path: '/',
  //   component: () => import('layouts/index.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/index.vue') },
  //     { path: '/login', component: () => import('pages/fireauthui.vue') },
  //     { path: '/loggedin', component: () => import('pages/loggedin.vue') }
  //   ]
  // }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
