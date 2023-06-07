import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "./src/components/Home.vue"
import Meal from "./src/components/Meal.vue"
import MealItem from "./src/components/MealItem.vue"
import Calculator from "./src/components/Calculator.vue"
import Map from "./src/components/Map.vue"
import MealSuper from "./src/components/MealSuper.vue"
import MealShare from "./src/components/MealShare.vue"
const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/McDonald",
      component: Home,
    },
    {
        path: "/meal",
        component: Meal,
      }, 
   
      {
        path: "/mealitem",
        component: MealItem,
      },
      {
        path: "/calculator",
        component: Calculator,
      },
      {
        path: "/map",
        component: Map,
      },
      {
        path:"/super",
        component:MealSuper,
      },
      {
        path:"/share",
        component: MealShare,
      }
  ];
  
  const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
  });
  export { router };
  