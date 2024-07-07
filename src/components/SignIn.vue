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
      <button @click="signIn">로그인</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../util/supabase/supabase";

const email = ref("");
const password = ref("");

const signIn = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log("error ", error);
  } else {
    console.log("data : ", data);
    console.log(data.user);
  }
};

const seeCurrentUser = async () => {
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
};

const singOut = async () => {
  const { error } = await supabase.auth.singOut();
  if (error) {
    console.log(error);
  } else {
    console.log("singOut sucessed ! ");
  }
};

// const signIn = async () => {
//   const { user, error } = await supabase.auth.signIn({
//     email: email.value,
//     password: password.value,
//   });
//   if (error) {
//     alert(error.message);
//   } else {
//     alert("로그인 성공!");
//   }
// };
</script>
