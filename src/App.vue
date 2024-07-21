<template>
  <nav class="text-end">
    <router-link to="/">home</router-link>
    <router-link to="/authtest">authtest</router-link>
    <router-link to="/notes">notes</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/signup">signup</router-link>
    <!-- <router-link to="/signup">signup</router-link>
    <router-link to="/signIn">signIn</router-link> -->
    <span>user : {{ useremail ? useremail : "need login" }}</span>
  </nav>
  <hr />
  <router-view></router-view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../util/supabase/supabase";

const useremail = ref(null);

const getSessionData = async () => {
  const sessionData = await supabase.auth.getSession();
  // console.log("getSessionData", sessionData.data.session.user);
  useremail.value = sessionData.data.session?.user.email;
};

onMounted(() => {
  getSessionData();
});
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}
nav {
  a {
    margin: 0 10px;
  }
}
/* common */
.bold {
  font-weight: bold;
}
.text-end {
  text-align: end;
}
</style>
