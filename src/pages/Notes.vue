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
        <p class="mb-4 text-gray-900">Please add url to make a card!</p>
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
      <div class="flex flex-wrap">
        <!-- Card-->
        <div v-for="el in notes" :key="el.id">
          <div v-if="el.useremail === userEmail" class="relative m-1">
            <div class="absolute -inset-1">
              <div
                class="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"
              ></div>
            </div>
            <div
              class="relative overflow-hidden bg-white shadow-md rounded-xl h-full p-3"
            >
              <div class="flex justify-between text-gray-100">
                <font-awesome-icon
                  icon="fa-star"
                  class="text-gray-400"
                  style="font-size: 16"
                />
                <!-- <h3 class="font-bold text-gray-600">github</h3> -->
                <input
                  class="font-bold text-gray-600"
                  type="text"
                  v-model="el.title"
                />
                <font-awesome-icon
                  icon="fa-edit"
                  class="text-gray-400"
                  style="font-size: 16"
                />
              </div>
              <div>
                <input
                  class="mt-3 text-gray-600"
                  type="text"
                  v-model="el.url"
                />
              </div>
              <div>
                <input
                  class="mt-3 text-gray-600"
                  type="text"
                  v-model="el.desc"
                />
              </div>
            </div>
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
  const { data } = await supabase.from("notes").select(); // 테이블명
  notes.value = data;
  console.log(notes.value);
}

const getUser = async () => {
  const localUser = await supabase.auth.getSession();
  // console.log("getUser");
  // console.log(localUser.data.session.user);

  user.value = localUser.data.session.user;
  userId.value = localUser.data.session.user.id;
  userEmail.value = localUser.data.session.user.email;
};

onMounted(() => {
  getTableData();
  getUser();
});
</script>

<style scoped lang="scss"></style>
