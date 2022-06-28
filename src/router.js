import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue'),
    },
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: () => import('./views/NewsDetails.vue'),
    }
  ]
})

export default kejianrouter