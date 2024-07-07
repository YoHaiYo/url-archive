<template>
  <div>
    <h2>로그인</h2>
    <form @submit.prevent="signIn">
      <label>
        이메일:
        <input type="email" v-model="email" required />
      </label>
      <label>
        비밀번호:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../util/supabase/supabase";

const email = ref("");
const password = ref("");

const signIn = async () => {
  const { user, error } = await supabase.auth.signIn({
    email: email.value,
    password: password.value,
  });
  if (error) {
    alert(error.message);
  } else {
    alert("로그인 성공!");
  }
};
</script>
