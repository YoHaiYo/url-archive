<template>
  <nav class="text-end">
    <p class="text-4xl font-bold text-blue-500">테일윈드</p>
    <router-link to="/">home</router-link>
    <!-- <router-link to="/authtest">authtest</router-link> -->
    <router-link v-if="!user" to="/login">login</router-link>
    <router-link v-if="!user" to="/signup">signup</router-link>
    <span v-if="user">Hello, {{ user.email }}</span>
    <router-link v-if="user" to="/notes">dashboard</router-link>
    <button v-if="user" @click="logout">LogOut</button>
  </nav>
  <hr />
  <router-view></router-view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../util/supabase/supabase";
import { logout } from "../util/supabase/authUtils";
import { getSessionData } from "../util/supabase/authUtils";

const user = ref(null);

onMounted(async () => {
  user.value = await getSessionData();
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
