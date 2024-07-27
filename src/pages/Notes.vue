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
          id="add-url"
          class="w-full md:w-1/2 rounded-tl rounded-bl p-1 border border-gray-400 text-gray-600"
          placeholder="Add your multiple URLs at once!"
          type="text"
          value=""
          name="url"
        /><button
          class="write rounded-tr rounded-br bg-violet-500 text-gray-100 px-2"
        >
          Add
        </button>
      </div>
      <!-- Card Container-->
      <!-- class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:text-left" -->
      <div
        class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:text-left"
      >
        <!-- Card-->
        <div
          v-for="(el, idx) in notes"
          :key="el.id"
          class="bg-white border border-gray-300 rounded-md p-2 items-center justify-start"
        >
          <p>id : {{ el.id }}</p>
          <p>idx : {{ idx }}</p>
          <input
            class="border font-bold text-gray-600"
            type="text"
            v-model="el.title"
            @input="updateNote(el)"
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
            <button
              class="bg-blue-500"
              @click="updateURL(el.id, el.title, el.url, el.desc)"
            >
              Save
            </button>
            <button class="bg-red-500 ml-2" @click="deleteURL(el.id)">
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

const notes = ref([]);
const user = ref(null);
const userId = ref(null);
const userEmail = ref(null);

async function getTableData() {
  // from('테이블명'), select('column명'), eq('column명', 'column내용')
  const { data } = await supabase
    .from("notes")
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

const updateNote = async (note) => {
  const { id, title, desc, url } = note;
  await supabase.from("notes").update({ title, desc, url }).eq("id", id);
};

// URL을 업데이트하는 함수
async function updateURL(id, newTitle, newUrl, newDesc) {
  const { data, error } = await supabase
    .from("notes")
    .update({ title: newTitle, url: newUrl, desc: newDesc })
    .eq("id", id);
  if (error) {
    console.error("Error updating url:", error.message);
  } else {
    const index = notes.value.findIndex((notes) => notes.id === id);
    if (index !== -1) {
      notes.value[index].title = newTitle;
      notes.value[index].url = newUrl;
      notes.value[index].desc = newDesc;
      notes.value[index].tempTitle = newTitle;
      notes.value[index].tempUrl = newUrl;
      notes.value[index].tempdesc = newDesc;
    }
  }
}

// URL을 삭제하는 함수
async function deleteURL(id) {
  const { error } = await supabase.from("notes").delete().eq("id", id);
  if (error) {
    console.error("Error deleting url:", error.message);
  } else {
    notes.value = notes.value.filter((url) => url.id !== id);
  }
}

// 새로운 URL을 추가하는 함수
async function addURL() {
  const { data, error } = await supabase.from("notes").insert([
    {
      title: newTitle.value,
      url: newUrl.value,
      desc: newDesc.value,
    },
  ]);
  console.log("data1", data);
  if (error) {
    console.error("Error adding url:", error.message);
  } else {
    if (data && data.length > 0) {
      // const newURL = { ...data[0], tempTitle: data[0].title, tempUrl: data[0].url, tempdesc: data[0].desc }
      // urls.value.push(newURL) // 새로운 URL을 배열에 추가
      newTitle.value = "";
      newUrl.value = "";
      newDesc.value = "";
      console.log("data2", data);
    }
  }
  getTableData(); // 추가 후 다시 읽어서 화면 그리기
}

onMounted(() => {
  getUser();
  // getTableData();
});
</script>

<style scoped lang="scss"></style>
