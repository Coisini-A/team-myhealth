import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Inquiry from '../pages/inquiry'
import Mall from '../pages/mall'
import User from '../pages/user'
import UserRouterView from '../pages/user-router-view'
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
import AddressModify from '../pages/addressmodify'
import UserNewPassword from '../pages/usernewpassword'
import UserPersonalDetails from '../pages/userpersonaldetails'
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import Password from "../components/login/storageChgPassword"
import Detail from '../components/mall/detail'
import Cart from '../components/mall/cart'
import Appointment from '../components/inquiry/appointment'
import Quest from '../components/index/indexQuestionnaire.vue'
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
      path: '/appointment',
      name: 'Appointment',
      component: Appointment
    }, ,
    {
      path: '/password',
      name: 'Password',
      component: Password
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      meta: {
        isTabBar: true
      },
      children: [
        {
          path: 'questionnaire',
          name: 'Questionnaire',
          component: Quest
        },
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: UserRouterView,
      meta: {
        isTabBar: true
      },
      children: [
        {
          path: '/user',
          name: 'User',
          component: User
        },
        {
          path: 'userSettings',
          name: 'UserSettings',
          component: UserSettings,
          meta:{
            isTabBar:false
          },
        },
        {
          path: 'UserInFormation',
          name: 'UserInFormation',
          component: UserInFormation,
          meta:{
            isTabBar:false
          },
        },
        {
          path: 'UserCardPackage',
          name: 'UserCardPackage',
          component: UserCardPackage,
          meta:{
            isTabBar:false
          },
        },
        {
          path: 'usernews',
          name: 'UserNews',
          component: UserNews,
          meta:{
            isTabBar:false
          },
        },
        {
          path: 'userorder',
          name: 'UserOrder',
          component: UserOrder,
          meta:{
            isTabBar:false
          },
        },
        {
          path: 'UserAccount',
          name: 'UserAccount',
          component: UserAccount,
          meta:{
            isTabBar:false
          },
        },
        {
          path: 'UserConen',
          name: 'UserConen',
          component: UserConen,
          meta:{
            isTabBar:false
          },
        },
      ]
    },
    {
      path: '/inquiry',
      name: 'Inquiry',
      component: Inquiry,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: () => import('../components/mall/detail')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../components/mall/cart')
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/addresslist',
      name: 'AddressList',
      component: AddressList,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/addresseditor',
      name: 'AddressEditor',
      component: AddressEditor,
      meta: {
        isTabBar: true
      }
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage,
      meta: {
        isTabBar: false
      }
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage,
      meta: {
        isTabBar: false
      }
    },
    {
      path: '/addresseditor',
      name: 'AddressEditor',
      component: AddressEditor,
      meta:{
        isTabBar:false
      },
    },
    {
      path: '/addressmodify',
      name: 'AddressModify',
      component: AddressModify,
      meta:{
        isTabBar:false
      },
    },
    {
      path: '/usernewpassword',
      name: 'UserNewPassword',
      component: UserNewPassword,
      meta:{
        isTabBar:false
      },
    },
    {
      path: '/UserPersonalDetails',
      name: 'UserPersonalDetails',
      component: UserPersonalDetails,
      meta:{
        isTabBar:false
      },
    }


  ]
})
router.beforeEach((to, from, next) => {
  if (to.path == '/user' || to.path == '/inquiry' || to.path == '/mall' || to.path == '/index') {
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
