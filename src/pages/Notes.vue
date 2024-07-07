<template>
  <article v-if="userId">
    <h1>Notes</h1>
    <p>
      your email : <b> {{ userEmail }}</b>
    </p>
    <ul>
      <li v-for="el in notes" :key="el.id">
        <input
          v-if="el.useremail === userEmail"
          v-model="el.useremail"
          type="text"
        />
        <input
          v-if="el.useremail == userEmail"
          type="text"
          v-model="el.title"
        />
        <input v-if="el.useremail == userEmail" type="text" v-model="el.url" />
        <input v-if="el.useremail == userEmail" type="text" v-model="el.desc" />
      </li>
    </ul>
  </article>
  <article v-if="!userId">
    <h1>로그인 후 이용하세요</h1>
  </article>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../../util/supabase/supabase";

const notes = ref([]);
const userId = ref(null);
const userEmail = ref(null);

async function getURL() {
  const { data } = await supabase.from("notes").select();
  notes.value = data;
  console.log(notes.value);
}

const seecurrentuser = async () => {
  console.log("SeeCurrentUser");
  const localUser = await supabase.auth.getSession();
  console.log(localUser.data.session.user);
  userId.value = localUser.data.session.user.id;
  userEmail.value = localUser.data.session.user.email;
};

onMounted(() => {
  getURL();
  seecurrentuser();
});
</script>

<style scoped lang="scss">
ul {
  list-style: none;
  li {
    margin: 0 10px;
  }
}
nav {
  a {
    margin: 0 10px;
  }
}
/* common */
.flex {
  display: flex;
}
</style>
