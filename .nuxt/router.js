import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3c96387c = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _a5ef595e = () => interopDefault(import('../pages/secret.vue' /* webpackChunkName: "pages/secret" */))
const _40ba7363 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _542295f0 = () => interopDefault(import('../pages/auth/signed-in.vue' /* webpackChunkName: "pages/auth/signed-in" */))
const _5c4e1341 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3c96387c,
    name: "about"
  }, {
    path: "/secret",
    component: _a5ef595e,
    name: "secret"
  }, {
    path: "/auth/login",
    component: _40ba7363,
    name: "auth-login"
  }, {
    path: "/auth/signed-in",
    component: _542295f0,
    name: "auth-signed-in"
  }, {
    path: "/",
    component: _5c4e1341,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
