import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/HelloWorld.vue";
import ToDolist from "../pages/ToDoList.vue"
const routes: RouteRecordRaw[] = [
  
  {
    path:"/",
    name: "ToDoliat",
    component:ToDolist,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
