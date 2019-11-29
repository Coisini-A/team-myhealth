import Vue from 'vue'
import Router from 'vue-router'
// import Index from '../pages/index'
// import Inquiry from '../pages/inquiry'
// import Mall from '../pages/mall'
// import User from '../pages/user'
// import Forum from '../pages/forum'
// import UserSettings from '../pages/usersettings'
// import UserInFormation from '../pages/userinformation'
// import UserCardPackage from "../pages/usercardpackage"
// import UserNews from '../pages/user-news'
// import UserOrder from '../pages/user-order'
// import UserAccount from '../pages/useraccount'
// import UserConen from '../pages/user-concen'
// import Appointment from "../components/inquiry/appointment"
// import Detail from '../components/mall/detail'
// import Cart from '../components/mall/cart'
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
      component: ()=>import ('../pages/index'),
      children: [
        {
          path: 'questionnaire',
          name: 'Questionnaire',
          component: () => import('../components/index/indexQuestionnaire.vue'),
        }
      ]
    },
    {
      path: '/user',
      name: 'User',
      component: ()=>import ('../pages/user')
    },
    {
      path: '/inquiry',
      name: 'Inquiry',
      component: ()=>import ('../pages/inquiry')
    },
    {
      path: '/detail',
      name: 'Detail',
      component: ()=>import ('../components/mall/detail')
    },
     {
      path: '/cart',
      name: 'Cart',
      component: ()=>import ('../components/mall/cart')
    },
    {
      path: '/mall',
      name: 'Mall',
      component: ()=>import ('../pages/mall'),
    },
    {
      path: '/forum',
      name: 'Forum',
      component: ()=>import ('../pages/forum')
    },

    {
      path: '/userSettings',
      name: 'UserSettings',
      component: ()=>import ('../pages/userSettings')
    },
    {
      path: '/UserInFormation',
      name: 'UserInFormation',
      component: ()=>import ('../pages/UserInFormation')
    },
    {
      path: '/UserCardPackage',
      name: 'UserCardPackage',
      component: ()=>import ('../pages/UserCardPackage')
    },
    {
      path: '/usernews',
      name: 'UserNews',
      component: ()=>import ('../pages/user-news')
    },
    {
      path: '/userorder',
      name: 'UserOrder',
      component: ()=>import ('../pages/user-order')
    },
    {
      path: '/UserAccount',
      name: 'UserAccount',
      component: ()=>import ('../pages/Useraccount')
    },
    {
      path: '/UserConen',
      name: 'UserConen',
      component: ()=>import ('../pages/user-concen')
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: ()=>import ('../components/inquiry/appointment')
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
  let token = localStorage.getItem('token') || sessionStorage.getItem('token')
  if (to.name== 'Index' ||to.name== 'Mall'||to.name== 'Detail' ||to.name== 'Forum'  ) {
    next()
  } else if((to.name!= 'Index' ||to.name!= 'Mall'||to.name!= 'Detail' ||to.name!= 'Forum')&&!token) { 
    next()   //{path:'/longin'}
  } else{
    next();
  }
})
export default router
