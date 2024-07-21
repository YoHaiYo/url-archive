<template>
  <article>
    <h1>Login</h1>

    <div>
      <label for="email">Email : </label>
      <input type="email" id="email" v-model="email" />
    </div>

    <div>
      <label for="password">Password : </label>
      <input type="password" id="password" v-model="password" />
    </div>

    <div class="btns">
      <button @click="login">LogIn</button>
    </div>
    <router-link to="/signup"
      >Don't you have an account yet? Sign Up here</router-link
    >
  </article>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../util/supabase/supabase";
import { useRouter } from "vue-router";
import { login } from "../../util/supabase/authUtils";
import { logout } from "../../util/supabase/authUtils";

const router = useRouter();
let email = ref("");
let password = ref("");
</script>

<style scoped lang="scss">
article {
  text-align: end;
  .btns {
    button {
      margin: 0 5px;
    }
  }
}
</style>
