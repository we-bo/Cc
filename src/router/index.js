import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

//解决路由导航重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/artile/:id',
    component: () => import(/* webpackChunkName: "artile" */ '../views/Artile.vue')
  },
  {
    path: '/comments/:id',
    component: () => import(/* webpackChunkName: "comments" */ '../views/Comments.vue')
  },
  {
    path: '/commentary/:lid',
    component: () => import(/* webpackChunkName: "commentary" */ '../views/Commentary.vue')
  },
  {
    path: '/bookshelf',
    component: () => import(/* webpackChunkName: "bookshelf" */ '../views/Bookshelf.vue')
  },
  {
    path: '/me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/products/:query',
    component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue')
  },
  {
    path: '/content/:id',
    component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
  },
  {
    path: '/chapters/:sourceid',
    component: () => import(/* webpackChunkName: "chapters" */ '../views/Chapters.vue')
  },
  {
    path: '/carousel',
    component: () => import(/* webpackChunkName: "carousel" */ '../components/Carousel.vue')
  },
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
