import Vue from 'vue'
import Router from 'vue-router'
import Home from './../components/home/home.vue'
import Shopping from './../components/Shopping/Shopping.vue'
import Mine from './../components/mine/mine.vue'
import Search from './../components/Pages/Search/search.vue'
import AllOrders from './../components/AllOrders/AllOrders.vue'
import TabBarVue from  './../components/Pages/TabBar.vue'
import Login from  './../components/Pages/Login/login.vue'
import Page from  './../components/Pages/page/page.vue'
import Baby from './../components/Shop/baby.vue'
import Dengyi from './../components/Shop/dengyi.vue'
import Fuzz from './../components/FuzzySearch/fuzzysearch.vue'
import Hone from './../components/Shop/dengyi.vue'
import Libiao from './../components/libiao/libiao.vue'
import Settlement from './../components/Settlement/settlement.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/allOrders',
      component: AllOrders
    }, {
      path: '/tabBarVue',
      component: TabBarVue
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/page',
      component: Page
    },
    {
      path:'/baby',
      component:Baby
    },
    {
      path:'/dengyi',
      component: Dengyi
    },
    {
      path:'/search-one',
      component:Fuzz
    },
    {
      path:'/home-one',
      component:Hone
    },
    {
      path:'/liebiao',
      component: Libiao
    },
    {
      path:'/settlement',
      component: Settlement
    }
  ]

})
