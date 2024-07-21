<template>
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

    <div>
      <!-- <label for="name">First Name : </label> -->
      <input type="name" id="name" v-model="name" />
    </div>

    <div class="btns">
      <button
        @click="
          () => {
            createAccount();
            confirmPasswordFunc();
          }
        "
      >
        Create
      </button>
      <button @click="seecurrentuser">See User</button>
    </div>
  </article>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../../util/supabase/supabase";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const name = ref("");

const createAccount = async () => {
  console.log("createAccount");
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
  } else {
    // 보낸이 : noreply@mail.app.supabase.io
    alert("회원가입 성공! 이메일을 확인하세요.");
    console.log(data);
  }
};

const login = async () => {
  console.log("LogIn");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (error) {
    console.log(error.message);
  } else {
    // console.log(data.session);
    console.log("Login Successed ! ");
    // router.push("/notes");
    window.location.href = "/notes"; // 새로고침되면서 페이지 이동 되어야 네비바에 유저정보도 바뀌게 보임 !
  }
};

const seecurrentuser = async () => {
  console.log("SeeCurrentUser");
  const localUser = await supabase.auth.getSession();
  console.log(localUser);
};

const logout = async () => {
  console.log("LogOut");
  const { data, error } = await supabase.auth.signOut();
  if (error) {
    console.log(error.message);
  } else {
    console.log("LogOut Successed !");
    // router.push("/");
    window.location.href = "/";
  }
};

const confirmPasswordFunc = () => {
  if (password.value !== confirmPassword.value)
    alert("비밀번호가 일치하지않습니다.");
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
