import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/product-list',
    name: 'productList',
    component: () => import('../views/ProductList.vue')
  },
  {
    path: '/checkout-page',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/administration',
    name: 'administration',
    component: () => import('../views/Administration.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
