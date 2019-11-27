import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Inquiry from '../pages/inquiry'
import Mall from '../pages/mall'
import User from '../pages/user'
import Forum from '../pages/forum'
import UserSettings from '../pages/usersettings'
import UserInFormation from '../pages/userinformation'
import UserCardPackage from "../pages/usercardpackage"
import UserNews from '../pages/user-news'
import UserOrder from '../pages/user-order'
import UserAccount from '../pages/useraccount'
import UserConen from '../pages/user-concen'
import AddressList from '../pages/addresslist'
import AddressEditor from '../pages/addresseditor'
import appointment from "../components/inquiry/appointment"
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import Password from "../components/login/storageChgPassword"
Vue.use(Router)

let router = new Router({
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
      component: Index,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/inquiry',
      name: 'Inquiry',
      component: Inquiry,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum,
      meta:{
        isTabBar:true
      }
    },




    {
      path: '/userSettings',
      name: 'UserSettings',
      component: UserSettings,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/UserInFormation',
      name: 'UserInFormation',
      component: UserInFormation,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/UserCardPackage',
      name: 'UserCardPackage',
      component: UserCardPackage,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/usernews',
      name: 'UserNews',
      component: UserNews,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/userorder',
      name: 'UserOrder',
      component: UserOrder,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/UserAccount',
      name: 'UserAccount',
      component: UserAccount,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/UserConen',
      name: 'UserConen',
      component: UserConen,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/addresslist',
      name: 'AddressList',
      component: AddressList,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/addresseditor',
      name: 'AddressEditor',
      component: AddressEditor,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: appointment,
      meta:{
        isTabBar:true
      }
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage,
      meta:{
        isTabBar:false
      }
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage,
      meta:{
        isTabBar:false
      }
    },
    {
      path: '/password',
      name: 'password',
      component: Password,
      meta:{
        isTabBar:false
      }
    }

  ],


})
router.beforeEach((to, from, next) => {
  if (to.path == '/user'||to.path == '/inquiry'||to.path == '/mall'||to.path == '/index') {
    let data = localStorage.getItem('token');
    if (data) {
      next()
    } else {
      next("/LoginPage")
    }
  } else {
    next()
  }
});
export default router