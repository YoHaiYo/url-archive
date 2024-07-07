import { createRouter, createWebHistory } from "vue-router";
import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
import Home from "../pages/Home.vue";
import Notes from "../pages/Notes.vue";
import AuthTest from "../pages/AuthTest.vue";

import { supabase } from "../../util/supabase/supabase";

let localUser;

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
    path: "/signIn",
    name: "SignIn",
    component: SignIn,
  },
];

async function getUser() {
  localUser = await supabase.auth.getSession();
  console.log("localUser");
  console.log(localUser.session);
}
getUser();

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
