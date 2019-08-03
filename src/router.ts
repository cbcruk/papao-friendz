import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('./views/Product.vue'),
    },
    {
      path: '/event/:id',
      name: 'event',
      meta: {
        header: false,
        footer: false,
      },
      component: () => import('./views/Event.vue'),
    },
    {
      path: '/collection',
      name: 'collection',
      meta: {
        title: 'MY LIST',
      },
      component: () => import('./views/Collection.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      meta: {
        title: 'CHECK OUT',
      },
      component: () => import('./views/Checkout.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        header: false,
        footer: false,
      },
      component: () => import('./views/Auth.vue'),
      children: [
        {
          path: 'signin',
          name: 'signin',
          meta: {
            title: 'Sign in to your account',
          },
          component: () => import('./views/Auth/SignIn.vue'),
        },
        {
          path: 'signup',
          name: 'signup',
          meta: {
            title: 'Create an account',
          },
          component: () => import('./views/Auth/SignUp.vue'),
        },
        {
          path: 'forgot-password',
          name: 'forgot-password',
          meta: {
            title: 'Reset your password',
          },
          component: () => import('./views/Auth/ForgotPassword.vue'),
        },
        {
          path: 'guest-order-inquiry',
          name: 'guest-order-inquiry',
          meta: {
            title: 'Guest order inquiry',
          },
          component: () => import('./views/Auth/GuestOrderInquiry.vue'),
        },
      ],
    },
    {
      path: '/account',
      name: 'account',
      meta: {
        requiresAuth: true,
        title: 'ACCOUNT',
      },
      component: () => import('./views/Account.vue'),
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('./views/Help.vue'),
      children: [
        {
          path: 'faq',
          name: 'faq',
          meta: {
            title: 'FAQ',
          },
          component: () => import('./views/Help/Faq.vue'),
        },
        {
          path: 'privacy-policy',
          name: 'privacy-policy',
          meta: {
            title: 'Privacy Policy',
          },
          component: () => import('./views/Help/PrivacyPolicy.vue'),
        },
        {
          path: 'conditions-of-use',
          name: 'conditions-of-use',
          meta: {
            title: 'Conditions of Use',
          },
          component: () => import('./views/Help/Conditions.vue'),
        },
      ],
    },
    {
      path: '*',
      name: 'notfound',
      meta: {
        header: false,
        footer: false,
      },
      component: () => import('./views/NotFound.vue'),
    },
    {
      path: '/error',
      name: 'error',
      meta: {
        header: false,
        footer: false,
      },
      component: () => import('./views/Error.vue'),
    },
  ],
})

router.beforeEach(async (to, _from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const response = await store.dispatch('customer/getInfo')

    if (response) {
      next()
    } else {
      next('/auth/signin')
    }
  } else {
    next()
  }
})

export default router
