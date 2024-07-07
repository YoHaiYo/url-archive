<template>
  <nav class="text-end">
    <router-link to="/">home</router-link>
    <router-link to="/authtest">authtest</router-link>
    <router-link to="/notes">notes</router-link>
    <!-- <router-link to="/signup">signup</router-link>
    <router-link to="/signIn">signIn</router-link> -->
  </nav>
  <hr />
  <router-view></router-view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../util/supabase/supabase";
const notes = ref([]);

async function getURL() {
  const { data } = await supabase.from("notes").select();
  notes.value = data;
  // console.log(notes.value);
}

onMounted(() => {
  getURL();
  // console.log(supabase.auth.signUp);
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
