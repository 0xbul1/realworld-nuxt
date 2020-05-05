import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3e5bb94d = () => interopDefault(import('../pages/edit.vue' /* webpackChunkName: "pages/edit" */))
const _cf0a6594 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0e409034 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7e838566 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "pages/settings" */))
const _e6dd4c04 = () => interopDefault(import('../pages/article/_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _221346c8 = () => interopDefault(import('../pages/profile/_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _6259abc2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/edit",
    component: _3e5bb94d,
    name: "edit"
  }, {
    path: "/login",
    component: _cf0a6594,
    name: "login"
  }, {
    path: "/register",
    component: _0e409034,
    name: "register"
  }, {
    path: "/settings",
    component: _7e838566,
    name: "settings"
  }, {
    path: "/article/:slug?",
    component: _e6dd4c04,
    name: "article-slug"
  }, {
    path: "/profile/:username?",
    component: _221346c8,
    name: "profile-username"
  }, {
    path: "/",
    component: _6259abc2,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
