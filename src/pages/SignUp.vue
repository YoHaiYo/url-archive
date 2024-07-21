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
            <label class="text-left text-md"> Confirm Password </label>
            <input
              v-model="confirmPassword"
              class="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••"
              required
            />
            <button
              @click="createAccount"
              class="bg-violet-500 text-violet-50 rounded-md px-4 py-2 text-foreground mb-2"
            >
              Create Account
            </button>
            <p
              class="text-center text-sm font-light text-gray-500 dark:text-gray-400"
            >
              Already have an account?
              <router-link
                to="/login"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </router-link>
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <hr />
  <article>
    <h1>SignUp</h1>

    <div>
      <label for="email">Email : </label>
      <input type="email" id="email" v-model="email" />
    </div>

    <div>
      <label for="password">Password : </label>
      <input type="password" id="password" v-model="password" />
    </div>

    <div>
      <label for="password">Confirm Password: </label>
      <input type="password" id="confirmPassword" v-model="confirmPassword" />
    </div>

    <!-- <div>
      <label for="name">First Name : </label>
      <input type="name" id="name" v-model="name" />
    </div> -->

    <div class="btns">
      <button @click="createAccount">Create</button>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../util/supabase/supabase";
import { useRouter } from "vue-router";
import { login } from "../../util/supabase/authUtils";
import { logout } from "../../util/supabase/authUtils";

const router = useRouter();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const name = ref("");

const createAccount = async () => {
  console.log("createAccount");

  if (password.value !== confirmPassword.value) {
    alert("비밀번호가 일치하지않습니다.");
  } else {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      // user.user_metadata 객체 아래로 자유롭게 데이터추가 가능
      options: {
        data: {
          first_name: name.value,
        },
      },
    });
    if (error) {
      console.log(error.message);
      alert(error.message);
    } else {
      // 보낸이 : noreply@mail.app.supabase.io
      alert("회원가입 성공! 이메일을 확인하세요.");
      console.log(data);
    }
  }
};
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
