
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"

import Goods from './components/goods/Goods';
import Ratings from "./components/ratings/Ratings"
import Seller from "./components/seller/Seller"

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {path: "/", redirect: "/goods"},
  {path: "/goods", component: Goods},
  {path: "/ratings", component: Ratings},
  {path: "/seller", component: Seller}
]

const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"active"
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
