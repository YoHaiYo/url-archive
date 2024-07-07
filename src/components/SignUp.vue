<template>
  <div>
    <h2>회원가입</h2>
    <form @submit.prevent="signUp">
      <label>
        이메일:
        <input type="email" v-model="email" required />
      </label>
      <label>
        비밀번호:
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">회원가입</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../util/supabase/supabase";

const email = ref("");
const password = ref("");

const signUp = async () => {
  const { user, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (error) {
    alert(error.message);
  } else {
    alert("회원가입 성공!");
  }
};
</script>
