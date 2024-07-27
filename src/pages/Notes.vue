<template>
  <section
    v-if="userId"
    class="py-12 bg-gray-900xx text-gray-600 sm:py-12 lg:py-16"
    style="
      background-image: url('/svg/pattern-white.svg');
      background-position: center center;
    "
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
        <h2
          class="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl xl:text-4xl mb-6"
        >
          {{ userEmail }}'s Notes
        </h2>
        <!-- <p class="mb-4 text-gray-900">Please add url to make a card!</p> -->
      </div>
      <div class="flex mb-1 p-3 justify-center">
        <input
          v-model="newUrl"
          class="w-full md:w-1/2 rounded-tl rounded-bl p-1 border border-gray-400 text-gray-600"
          placeholder="Add your multiple URLs at once!"
          type="text"
          value=""
        /><button
          @click="addNote"
          class="write rounded-tr rounded-br bg-violet-500 text-gray-100 px-2"
        >
          Add
        </button>
        <button
          class="save rounded bg-green-500 text-gray-100 px-2 ml-2"
          @click="saveAllNotes"
        >
          All Save
        </button>
      </div>
      <!-- Card Container-->
      <!-- class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:text-left" -->
      <div
        class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:text-left"
      >
        <!-- Card-->
        <div
          v-for="el in notes"
          :key="el.id"
          class="bg-white border border-gray-300 rounded-md p-2 items-center justify-start"
        >
          <p>id : {{ el.id }}</p>
          <input
            class="border font-bold text-gray-600"
            type="text"
            v-model="el.title"
          />
          <input
            class="mt-3 border text-gray-600"
            type="text"
            v-model="el.desc"
          />
          <input
            class="mt-3 border text-gray-600"
            type="text"
            v-model="el.url"
          />
          <div>
            <button class="bg-red-500 ml-2" @click="deleteNote(el.id)">
              Delete
            </button>
          </div>
        </div>
        <!-- /Card-->
      </div>
      <!-- /Card Container-->
    </div>
  </section>

  <section
    v-if="!userId"
    class="flex justify-center text-xl"
    style="height: 50vh; align-items: center"
  >
    <h1>Please log in and use it.</h1>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../../util/supabase/supabase";

const tableName = "notes"; // DB의 table명

const notes = ref([]);
const user = ref(null);
const userId = ref(null);
const userEmail = ref(null);

const newUrl = ref("");

// 데이터가져오기
async function getTableData() {
  // from('테이블명'), select('column명'), eq('column명', 'column내용')
  const { data } = await supabase
    .from(tableName)
    .select("*")
    .eq("useremail", userEmail.value);
  notes.value = data;
  console.log("notes.value", notes.value);
}

const getUser = async () => {
  const localUser = await supabase.auth.getSession();
  // console.log(localUser.data.session.user);

  user.value = localUser.data.session.user;
  userId.value = localUser.data.session.user.id;
  userEmail.value = localUser.data.session.user.email;

  getTableData(); // getUser에서 userEmail을 가져와야 해당유저의 저장데이터를 가져오게 설계함.
};

// 노트 추가
const addNote = async () => {
  const { error } = await supabase.from(tableName).insert({
    useremail: userEmail.value,
    title: "add title", // 해당 사이트 도메인부분만 추출하기
    desc: "add desc", // 해당 사이트 meta 태그에서 설명가져오기
    url: newUrl.value,
  });
  if (error) {
    console.log("err : ", error);
  }
  newUrl.value = ""; // 입력창 초기화
  getTableData(); // DB로 보낸후 프론트로 다시 가져오기
};

// 노트 전체저장
const saveAllNotes = async () => {
  for (const note of notes.value) {
    // notes.value 배열의 모든 데이터 순회해서 전체저장
    const { id, title, desc, url } = note;
    await supabase.from(tableName).update({ title, desc, url }).eq("id", id);
  }
  alert("All notes have been saved.");
};

// 노트 개별삭제
const deleteNote = async (id) => {
  const { error } = await supabase.from(tableName).delete().eq("id", id);
  if (error) {
    console.error("Error deleting url:", error.message);
  } else {
    notes.value = notes.value.filter((url) => url.id !== id);
  }
};

onMounted(() => {
  getUser();
  // getTableData();
});
</script>

<style scoped lang="scss"></style>
