import shop from "./src/pages/Shop.vue";
import Homepage from "./src/pages/Homepage.vue";
import ShopCart from "./src/pages/ShopCart.vue";
import ShopItem from "./src/pages/ShopItem.vue";
import Login from './src/pages/Login.vue';
import Register from './src/pages/Register.vue'
import ForgotPassword from "./src/pages/ForgotPassword.vue"
import Center from "./src/pages/Center.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/shop",
    component: shop,
    meta:{title:"商品頁面"}, 
  }, 
  {
    path: "/shopitem",
    name:"shopitem",
    component: ShopItem,
    meta: { title:"購物頁"},
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
 {
  path: "/login",
  component: Login,
 },
 {
  path: "/register",
  component: Register,
 },
 {
  path: "/forgotPassword",
  component: ForgotPassword,
 },
 {
  path: "/center",
  component: Center,
 },
];

const router = createRouter({
  routes: routes,
  history: createWebHashHistory(),
});
export { router };
