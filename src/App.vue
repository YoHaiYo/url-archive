<template>
  <h1>LinkPort Vue</h1>
  <hr />
  <ul>
    <li>title</li>
    <li>url</li>
    <li>desc</li>
  </ul>
  <ul>
    <li v-for="el in notes" :key="el.id">
      <input type="text" v-model="el.title" />
      <input type="text" v-model="el.url" />
      <input type="text" v-model="el.desc" />
    </li>
  </ul>
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
  console.log(supabase.auth.signUp);
});
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}
</style>
