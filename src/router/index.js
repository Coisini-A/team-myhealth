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
      path: '/userSettings',
      name: 'UserSettings',
      component: UserSettings
    },
    {
      path: '/UserInFormation',
      name: 'UserInFormation',
      component: UserInFormation
    },
    {
      path: '/UserCardPackage',
      name: 'UserCardPackage',
      component: UserCardPackage
    },
    {
      path: '/usernews',
      name: 'UserNews',
      component: UserNews
    },
    {
      path: '/userorder',
      name: 'UserOrder',
      component: UserOrder
    },
    {
      path: '/UserAccount',
      name: 'UserAccount',
      component: UserAccount
    },
    {
      path: '/UserConen',
      name: 'UserConen',
      component: UserConen
    },
    {
      path: '/addresslist',
      name: 'AddressList',
      component: AddressList
    },
    {
      path: '/addresseditor',
      name: 'AddressEditor',
      component: AddressEditor
    },
    {
      path: '/appointment',
      name: 'Appointment',
      component: appointment
    },
    {
      path: '/RegisterPage',
      name: 'RegisterPage',
      component: RegisterPage
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/password',
      name: 'password',
      component: Password
    }

  ],


})
// router.beforeEach((to,from,next)=>{
//   //to.path/from.path 根据地址进行条件判断
//   let data = localStorage.getItem('data');
//   next();//先进行调用一次，否则陷入死循环
//   if(data){
//     next("跳转路径")//未登录
//   }else{
//     next("跳转路径")//跳转至主页
//   }
// });
