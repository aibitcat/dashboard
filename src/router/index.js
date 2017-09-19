import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router)


import Layout from '../views/layout/Layout';



export default new Router({
  //  scrollBehavior: () => ({ y: 0 }),
   routes: constantRouterMap
})


export const constantRouterMap = [
    // { path: '/login', component: _import('login/index'), hidden: true },
    // { path: '/authredirect', component: _import('login/authredirect'), hidden: true },
    // { path: '/404', component: _import('error/404'), hidden: true },
    // { path: '/401', component: _import('error/401'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  }
]
