<template>
  <section class="py-24 bg-white overflow-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex justify-center flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <article
            class="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          >
            <label class="text-left text-md"> Email </label>
            <input
              v-model="email"
              class="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label class="text-left text-md"> Password </label>
            <input
              v-model="password"
              class="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••"
              required
            />
            <button
              @click="login"
              class="bg-violet-500 text-violet-50 rounded-md px-4 py-2 text-foreground mb-2"
            >
              Login
            </button>
            <p
              class="text-center text-sm font-light text-gray-500 dark:text-gray-400"
            >
              Don't you have an account yet?
              <router-link
                to="/signup"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign Up here
              </router-link>
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
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
