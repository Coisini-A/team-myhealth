import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Inquiry from '../pages/inquiry'
import Mall from '../pages/mall'
import User from '../pages/user'
import Forum from '../pages/forum'
import Detail from '../components/mall/detail'
import Cart from '../components/mall/cart'
Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'focus',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Index'
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/inquiry',
      name: 'Inquiry',
      component: Inquiry
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum
    },
		 {
		  path: '/detail',
		  name: 'Detail',
		  component: Detail
		},
		 {
		  path: '/cart',
		  name: 'Cart',
		  component: Cart
		}
  ]
})
