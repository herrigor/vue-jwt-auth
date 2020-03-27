import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
// import authGuard from '../auth/authGuard'
import Home from '../views/Home.vue'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import ForgotPassword from '../components/ForgotPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      onlyAnonUser: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      onlyAnonUser: true
    }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: {
      onlyAnonUser: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const onlyAnonUser = to.matched.some(record => record.meta.onlyAnonUser);

  if (requiresAuth){
    if(!await firebase.getCurrentUser()){
      next('login');
    }else{
      next();
    }
  }
  if (onlyAnonUser){
    if(await firebase.getCurrentUser()){
      next('dashboard')
    }else{
      next()
    }
  }
  
  next();
});

export default router
