<template>
  <section class="py-24 bg-white overflow-hidden" style="min-height: 60vh">
    <div class="container px-4 mx-auto">
      <div class="flex justify-center flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <article
            v-if="!userEmail"
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
            <button
              @click="sendPasswordRecoveryEmail"
              class="bg-violet-500 text-violet-50 rounded-md px-4 py-2 text-foreground mb-2"
            >
              Send Password Recovery Email
            </button>
          </article>
          <article
            v-if="userEmail"
            class="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
          >
            <label class="text-left text-md"> Password to be changed </label>
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
              @click="resetPassword"
              class="bg-violet-500 text-violet-50 rounded-md px-4 py-2 text-foreground mb-2"
            >
              Reset Password
            </button>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../../util/supabase/supabase";
import { useRouter } from "vue-router";

const userEmail = ref(null); // 세션에서 가져옴.

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const name = ref("");

// 세션에서 user 정보 가져오기
const getUser = async () => {
  const localUser = await supabase.auth.getSession();
  userEmail.value = localUser.data.session.user.email;
  console.log("userEmail.value", userEmail.value);
};

const sendPasswordRecoveryEmail = async () => {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email.value);

  if (error) {
    console.error("Error sending password reset email:", error);
    alert(error);
  } else {
    alert("Password reset email sent. Please check your email");
    console.log("Password reset email sent:", data);
  }
};

const resetPassword = async () => {
  console.log("ForgotPW");

  // 비번과 비번확인 다를때 경고
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match. Please check your password.");
  } else {
    const { data, error } = await supabase.auth.updateUser({
      email: email.value,
      password: password.value,
    });

    if (error) {
      console.log(error.message);
      alert(error.message);
    } else {
      alert("You have successfully changed your password !");
      window.location.href = "/notes";
    }
  }
};

onMounted(() => {
  getUser();
});
</script>

<style scoped lang="scss"></style>
