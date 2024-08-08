import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Notes from "../pages/Notes.vue";
import AuthTest from "../pages/AuthTest.vue";
import SignUp from "../pages/SignUp.vue";
import Login from "../pages/Login.vue";
import ForgotPW from "../pages/ForgotPW.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/authtest",
    name: "authtest",
    component: AuthTest,
  },
  // {
  //   path: "/secret",
  //   name: "secret",
  //   component: () => import('"../pages/Secret.vue'),
  //   meta: { requiresAuth: true },
  // },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgotpw",
    name: "ForgotPW",
    component: ForgotPW,
  },
];

// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     console.log("Requires Auth");
//   } else {
//     next();
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
