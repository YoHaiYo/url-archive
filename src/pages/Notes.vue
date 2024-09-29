<template>
  <section
    v-if="userId"
    class="py-12 bg-gray-900xx text-gray-600 sm:py-12 lg:py-16"
    style="
      background-image: url('/svg/pattern-white.svg');
      background-position: center center;
      min-height: 100vh;
    "
  >
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-xl mx-auto text-center xl:max-w-2xl">
        <h2
          class="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl xl:text-4xl mb-6"
        >
          {{ userEmail }}'s URLs
        </h2>
        <!-- <p class="mb-4 text-gray-900">Please add url to make a card!</p> -->
      </div>
      <div class="flex p-3 justify-center">
        <input
          @keydown.enter="addNote"
          v-model="newUrl"
          class="placeholder-center w-full md:w-1/2 rounded-tl rounded-bl p-1 border border-gray-400 text-gray-600"
          placeholder="Just copy and paste url and press Enter!"
          type="text"
        /><button
          @click="addNote"
          class="write rounded-tr rounded-br bg-violet-500 text-gray-100 px-2"
          title="Add URL"
        >
          <font-awesome-icon
            icon="fa-plus"
            class="text-white"
            style="font-size: 17px"
          />
          <!-- Add -->
        </button>
      </div>
      <div class="flex justify-between flex-wrap">
        <div
          class="h-10 mb-2 px-2.5 py-2 bg-violet-200 border-t border-b border-violet-500 justify-center items-center gap-2.5 inline-flex"
        >
          <p class="text-center text-violet-500 font-normal">
            This page is not shared.
          </p>
        </div>
        <div class="flex items-center flex-wrap">
          <!-- View Menus -->
          <div :class="btnContainer" class="border-2 border-violet-500 mb-2">
            <IconSimpleView
              title="Simple View"
              @click="
                tabViewType('simple');
                updateViewType('simple');
              "
              :color="viewType === 'simple' ? 'rgb(139 92 246)' : '#B3B3B3'"
              className="cursor-pointer"
            />
            <IconGirdView
              title="Grid View"
              @click="
                tabViewType('grid');
                updateViewType('grid');
              "
              :color="viewType === 'grid' ? 'rgb(139 92 246)' : '#B3B3B3'"
              className="ml-2 cursor-pointer"
            />
            <IconListView
              title="List View"
              @click="
                tabViewType('list');
                updateViewType('list');
              "
              :color="viewType === 'list' ? 'rgb(139 92 246)' : '#B3B3B3'"
              size="22"
              className="ml-2 cursor-pointer"
            />
            <!-- 카테고리 드롭다운-->
            <Menu as="div" class="relative inline-block text-left ml-2">
              <div>
                <MenuButton
                  class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-violet-50"
                >
                  {{ categoryNowSelected }}
                  <font-awesome-icon
                    icon="fa-chevron-down"
                    class="text-gray-400 mt-1"
                    style="font-size: 16"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  style="min-width: 150px"
                  class="absolute right-0 w-auto z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="">
                    <MenuItem v-slot="{ active }">
                      <a
                        @click="
                          categoryNowSelected = 'all';
                          filterCategory(categoryNowSelected);
                        "
                        href="#"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >all</a
                      >
                    </MenuItem>
                    <MenuItem
                      v-slot="{ active }"
                      v-for="(el, idx) in categoryList"
                      :key="idx"
                    >
                      <a
                        @click="
                          categoryNowSelected = el.category;
                          filterCategory(categoryNowSelected);
                        "
                        href="#"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >{{ el.category }}</a
                      >
                    </MenuItem>

                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        @click="openCategoryModal"
                        class="border-t border-grey-300 bg-gray-200 hover:bg-violet-300"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        <font-awesome-icon
                          icon="fa-edit"
                          class="text-gray-500"
                          style="font-size: 15"
                        />
                        Edit Category
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <!-- sortType 드롭다운 (recent, popular) -->
            <Menu
              as="div"
              class="relative inline-block text-left ml-2"
              title="filter type"
            >
              <div>
                <MenuButton
                  class="text-black-500 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-violet-50"
                >
                  {{ sortType }}
                  <font-awesome-icon
                    icon="fa-chevron-down"
                    class="text-gray-400 mt-1"
                    style="font-size: 16"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div class="py-1">
                    <MenuItem v-slot="{ active }">
                      <a
                        @click="
                          tabSortType('Most Popular');
                          updateSortType('Most Popular');
                        "
                        href="#"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Most Popular</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        @click="
                          tabSortType('Least Popular');
                          updateSortType('Least Popular');
                        "
                        href="#"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Least Popular</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        @click="
                          tabSortType('Most Recent');
                          updateSortType('Most Recent');
                        "
                        href="#"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Most Recent</a
                      >
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        @click="
                          tabSortType('Least Recent');
                          updateSortType('Least Recent');
                        "
                        href="#"
                        :class="[
                          active
                            ? 'bg-violet-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Least Recent</a
                      >
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
          <!-- Btns : Edit / Share / Setting  -->
          <div :class="btnContainer" class="ml-2 border-2 border-violet-500">
            <font-awesome-icon
              v-if="!editMode"
              @click="() => {}"
              icon="fa-gear"
              title="Setting"
              class="text-gray-400 cursor-pointer hover:text-violet-500"
              style="font-size: 20"
            />
            <font-awesome-icon
              v-if="!editMode"
              @click="() => {}"
              title="Share"
              icon="fa-share-nodes"
              class="ml-3 text-gray-400 cursor-pointer hover:text-violet-500"
              style="font-size: 20"
            />
            <font-awesome-icon
              v-if="!editMode"
              @click="toggleEditMode"
              title="Edit"
              icon="fa-pen-to-square"
              class="ml-3 text-gray-400 cursor-pointer hover:text-violet-500"
              style="font-size: 20"
            />
            <!-- 저장 / 취소 버튼 -->
            <font-awesome-icon
              v-if="editMode"
              @click="saveallNotes"
              title="Save"
              icon="fa-floppy-disk"
              class="text-gray-400 cursor-pointer hover:text-green-500"
              style="font-size: 20"
            />
            <font-awesome-icon
              v-if="editMode"
              @click="toggleEditMode"
              title="Cancle"
              icon="fa-xmark"
              class="ml-3 text-gray-400 cursor-pointer hover:text-red-500"
              style="font-size: 24"
            />
          </div>
        </div>
      </div>
      <!-- Card Container-->
      <!-- class="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-4xl lg:max-w-6xl mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:text-left" -->
      <div :class="selectViewType">
        <!-- Card-->
        <div
          @click="
            openLink(el.url);
            updateClickNum(el, idx);
          "
          v-for="(el, idx) in notes"
          :key="el.id"
          class="bg-white border border-gray-300 rounded-md p-2 items-center justify-start"
          :class="cardViewType"
          :style="editMode ? null : { cursor: 'pointer' }"
          :title="
            el.url +
            '\n' +
            el.clicknum +
            ' times cliked' +
            '\n' +
            el.writetime.slice(0, 10)
          "
        >
          <!-- 평상시 -->
          <!-- simple view -->
          <div
            v-if="viewType === 'simple' && !editMode"
            class="flex items-center"
          >
            <img
              class="favicon"
              :src="
                'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
                el.url
              "
              alt="favicon"
            />
            <p class="ml-1">
              {{ el.title }}
            </p>
            <!-- <p class="ml-1">| {{ el.category }}</p> -->
          </div>
          <!-- grid view -->
          <div
            v-if="viewType === 'grid' && !editMode"
            class="flexxx items-centerxx"
          >
            <div class="flex items-center">
              <img
                class="favicon"
                :src="
                  'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
                  el.url
                "
                alt="favicon"
              />
              <p class="ml-1 font-bold truncate">
                {{ el.title }}
              </p>
            </div>
            <p class="ml-1 truncate">
              {{ el.desc }}
            </p>
            <p class="ml-1 truncate">
              {{ el.category }}
            </p>
          </div>
          <!-- list view -->
          <div
            v-if="viewType === 'list' && !editMode"
            class="flex items-center"
          >
            <img
              class="favicon"
              :src="
                'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
                el.url
              "
              alt="favicon"
            />
            <p
              class="ml-1 pr-2 border-r-2 border-grey font-bold truncate"
              style="width: 20%"
            >
              {{ el.title }}
            </p>
            <p
              class="ml-1 pr-2 border-r-2 border-grey truncate"
              style="width: 30%"
            >
              {{ el.desc }}
            </p>
            <p
              class="ml-1 pr-2 border-r-2 border-grey truncate"
              style="width: 30%"
            >
              {{ el.url }}
            </p>
            <p class="ml-1 truncate" style="width: auto">
              {{ el.category }}
            </p>
          </div>
          <!-- 편집모드일때 -->
          <div
            v-if="editMode"
            :class="viewType === 'list' ? 'flex items-center' : ''"
          >
            <div class="flex justify-between items-center">
              <img
                class="favicon"
                :class="viewType === 'list' ? 'mr-4' : ''"
                :src="
                  'https://s2.googleusercontent.com/s2/favicons?domain_url=' +
                  el.url
                "
                alt="favicon"
              />
              <font-awesome-icon
                v-if="viewType !== 'list'"
                @click="deleteNote(el.id)"
                title="Delete"
                icon="fa-trash"
                class="ml-3 text-gray-400 cursor-pointer hover:text-red-500"
                style="font-size: 20"
              />
            </div>
            <input
              class="w-full border text-gray-600"
              :class="viewType !== 'list' ? 'mt-2' : 'ml-2'"
              v-model="el.title"
              placeholder="Title"
            />
            <input
              :class="viewType !== 'list' ? 'mt-2' : 'ml-2'"
              class="w-full border text-gray-600"
              v-model="el.desc"
              placeholder="Description"
            />
            <input
              :class="viewType !== 'list' ? 'mt-2' : 'ml-2'"
              class="w-full border text-gray-600"
              v-model="el.url"
              placeholder="URL"
            />
            <!-- <input
              :class="viewType !== 'list' ? 'mt-2' : 'ml-2'"
              class="w-full border text-gray-600"
              v-model="el.category"
              placeholder="Category"
            /> -->
            <!-- @change="updateCategory" -->
            <select
              v-model="el.category"
              :class="viewType !== 'list' ? 'mt-2' : 'ml-2'"
              class="border border-gray-300 w-full"
            >
              <option value="" disabled>Select a category</option>
              <!-- <option value="all">all</option> -->
              <option
                v-for="category in categoryList"
                :key="category.id"
                :value="category.category"
              >
                {{ category.category }}
              </option>
            </select>
            <font-awesome-icon
              v-if="viewType === 'list'"
              @click="deleteNote(el.id)"
              title="Delete"
              icon="fa-trash"
              class="ml-3 text-gray-400 cursor-pointer hover:text-red-500"
              style="font-size: 20"
            />
          </div>
        </div>
        <!-- /Card-->
      </div>
      <!-- /Card Container-->
    </div>
  </section>

  <!-- 카테고리 모달 -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-6 w-80 relative">
      <font-awesome-icon
        @click="closeCategoryModal"
        icon="fa-solid fa-xmark"
        class="my-cancle-btn text-gray-700 cusor-pointer"
        style="font-size: 16"
      />
      <h2 class="text-lg font-bold mb-4">Manage Categories</h2>

      <ul>
        <li
          v-for="(el, idx) in categoryList"
          :key="idx"
          class="flex justify-between items-center border-b border-gray-300 mb-2"
        >
          <!-- 입력값이 변경될 때마다 업데이트 -->
          <input
            class="w-full"
            type="text"
            v-model="el.category"
            @input="updateCategory(el.id, el.category)"
            :placeholder="el.category"
          />
          <font-awesome-icon
            @click="deleteCategory(el.id)"
            icon="fa-solid fa-trash-can"
            class="text-gray-500 cusor-pointer hover:text-red-500"
            style="font-size: 16"
            title="Delete this category immediately upon click."
          />
        </li>
      </ul>

      <div class="flex items-center">
        <input
          v-model="categoryText"
          type="text"
          placeholder="Add new category"
          class="border border-gray-300 rounded w-full py-1 mr-1"
        />
        <button
          @click="addCategory"
          class="bg-violet-500 py-1 px-2 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  </div>
  <!-- //카테고리 모달 -->

  <section
    v-if="!userId"
    class="flex justify-center text-xl"
    style="height: 50vh; align-items: center"
  >
    <h1>Please log in and use it.</h1>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { supabase } from "../../util/supabase/supabase";
import { btnContainer, viewTypes } from "../../util/style/classNames";
import IconGirdView from "../assets/svg/IconGirdView.vue";
import IconListView from "../assets/svg/IconListView.vue";
import IconSimpleView from "../assets/svg/IconSimpleView.vue";
// -------------------------- 변수 선언부 --------------------------
// DB변수
const NoteTableName = "notes"; // 노트 저장DB 테이블명
const UITableName = "userui"; // ui관련 저장DB 테이블명
const CategoryTableName = "usercategory"; // ui관련 저장DB 테이블명
// 백엔드변수
const notes = ref([]);
const uiInfo = ref([]);
const user = ref(null);
const userId = ref(null);
const userEmail = ref(null);
// 프론트변수
const newUrl = ref("");
const editMode = ref(false);
const viewType = ref("");
const sortType = ref("");
const categoryList = ref([]);
const categoryText = ref("");
const categoryNowSelected = ref("all");
const isModalOpen = ref(false);

// -------------------------- 함수 선언부 --------------------------

/// 백엔드 함수
// 세션에서 user 정보 가져오기
const getUser = async () => {
  const localUser = await supabase.auth.getSession();
  user.value = localUser.data.session.user;
  userId.value = localUser.data.session.user.id;
  userEmail.value = localUser.data.session.user.email;

  getNoteData(); // getUser에서 userEmail을 가져와야 해당유저의 저장데이터를 가져오게 설계함.
  addUIdata(); // 유저ui정보 없을때 초기값 추가
  getUIData(); // 유저ui정보 가져오기
  getCategoryData();
};

// Read : ★노트 데이터가져오기 / 콜백함수로 가장 많이사용함.
async function getNoteData() {
  // from('테이블명'), select('column명'), eq('column명', 'column내용')
  const { data } = await supabase
    .from(NoteTableName)
    .select("*")
    .eq("useremail", userEmail.value);

  // 필터링 구분
  switch (sortType.value) {
    case "Most Recent":
      // writetime 기준으로 최신 순으로 정렬
      notes.value = data.sort(
        (a, b) => new Date(b.writetime) - new Date(a.writetime)
      );
      categoryNowSelected.value = "all";
      break;
    case "Least Recent":
      // writetime 기준으로 오래된 순으로 정렬
      notes.value = data.sort(
        (a, b) => new Date(a.writetime) - new Date(b.writetime)
      );
      categoryNowSelected.value = "all";
      break;
    case "Most Popular":
      // 많이 클릭된 순으로 정렬
      notes.value = data.sort((a, b) => b.clicknum - a.clicknum);
      categoryNowSelected.value = "all";
      break;
    case "Least Popular":
      // 적게 클릭된 순으로 정렬
      notes.value = data.sort((a, b) => a.clicknum - b.clicknum);
      categoryNowSelected.value = "all";
      break;
    default:
      // 기본정렬 : 기본적으로 supabase는 DB수정된걸 나중으로 보여줌.
      notes.value = data;
      categoryNowSelected.value = "all";
      break;
  }
  console.log("notes.value", notes.value);
}

// Read : UI 데이터가져오기
async function getUIData() {
  const { data } = await supabase
    .from(UITableName)
    .select("*")
    .eq("useremail", userEmail.value);
  uiInfo.value = data;
  console.log("uiInfo : ", uiInfo.value);

  viewType.value = uiInfo.value[0].viewtype; // 저장된 viewtype가져오기
  sortType.value = uiInfo.value[0].sorttype; // 저장된 sorttype가져오기
}
// Read : 유저카테고리 데이터가져오기
async function getCategoryData() {
  const { data } = await supabase
    .from(CategoryTableName)
    .select("*")
    .eq("useremail", userEmail.value);
  categoryList.value = data;
  console.log("usercategory : ", categoryList.value);
}

// Create : 노트 추가
const addNote = async () => {
  const now = new Date().toISOString(); // timestamp용
  const { error } = await supabase.from(NoteTableName).insert({
    useremail: userEmail.value,
    title: extractDomain(newUrl.value), // 해당 사이트 도메인부분만 추출하기
    desc: "add desc", // 해당 사이트 meta 태그에서 설명가져오기
    url: newUrl.value,
    writetime: now, // timestamptz
    category: "all",
  });
  if (error) {
    console.log("err : ", error);
  }
  newUrl.value = ""; // 입력창 초기화
  getNoteData(); // DB로 보낸후 프론트로 다시 가져오기
};

// Create : 카테고리 추가
const addCategory = async () => {
  const { error } = await supabase.from(CategoryTableName).insert({
    useremail: userEmail.value,
    category: categoryText.value,
  });
  if (error) {
    console.log("err : ", error);
  }
  categoryText.value = ""; // 입력창 초기화
  getCategoryData();
};

// Create : 유저 UI 정보 없을때만 초기값 추가
const addUIdata = async () => {
  const { data, error } = await supabase
    .from(UITableName)
    .select("*")
    .eq("useremail", userEmail.value);

  if (error) {
    console.log("Error fetching data: ", error);
    return;
  }

  if (data.length > 0) {
    console.log(
      `해당 유저의 UI 데이터가 있습니다. 해당유저 이메일: ${data[0].useremail}`
    );
  } else {
    console.log(
      "해당 유저의 UI 데이터가 없습니다. 초기값을 추가하고 페이지를 새로 로드합니다."
    );
    const { error: insertError } = await supabase.from(UITableName).insert({
      useremail: userEmail.value,
      viewtype: "grid",
    });
    window.location.reload();
    if (insertError) {
      console.log("Error inserting data: ", insertError);
    }
  }
};

// Update : 노트 전체저장
const saveallNotes = async () => {
  const updates = notes.value.map((note) => ({
    id: note.id,
    title: note.title,
    desc: note.desc,
    url: note.url,
    category: note.category,
  }));

  // upsert로 필요한 부분만 저장
  const { error } = await supabase
    .from(NoteTableName)
    .upsert(updates, { onConflict: ["id"] }); // upsert 사용시 기준이 되는 필드임.

  if (error) {
    console.error("Error saving all notes:", error.message);
  } else {
    toggleEditMode();
    console.log("all notes have been saved.");
  }
};

// Update : 클릭시 조회수 증가
const updateClickNum = async (el, idx) => {
  const now = new Date().toISOString(); // timestamp용

  // 편집모드가 꺼져 있을 때만 조회수업데이트되게하기
  if (!editMode.value) {
    const { data, error } = await supabase
      .from(NoteTableName)
      // idx로 클릭한 카드 찾아서 해당 해당의 clicknum 증가시키기
      .update({
        clicknum: notes.value[idx].clicknum + 1,
        writetime: now,
      })
      .eq("id", el.id);
  }

  if (error) {
    console.log("err : ", error);
  } else {
    getNoteData(); // 재정렬
  }
};

// Update : UI데이터:ViewType 저장
const updateViewType = async (type) => {
  const { error } = await supabase
    .from(UITableName)
    .update({ viewtype: type })
    .eq("useremail", userEmail.value);
  if (error) {
    console.log("err : ", error);
  }
};
// Update : UI데이터:SortType 저장
const updateSortType = async (type) => {
  const { error } = await supabase
    .from(UITableName)
    .update({ sorttype: type })
    .eq("useremail", userEmail.value);
  if (error) {
    console.log("err : ", error);
  }
};
// Update : 카테고리 업데이트
const updateCategory = async (id, newCategory) => {
  const { error } = await supabase
    .from(CategoryTableName)
    .update({ category: newCategory })
    .eq("id", id);
  if (error) {
    console.error("Error updating category:", error.message);
  } else {
    getCategoryData(); // ui상에 재표기
  }
};

// Delete : 노트 개별삭제
const deleteNote = async (id) => {
  const { error } = await supabase.from(NoteTableName).delete().eq("id", id);
  if (error) {
    console.error("Error deleting url:", error.message);
  } else {
    notes.value = notes.value.filter((url) => url.id !== id);
  }
};
// Delete : 카테고리 개별삭제
const deleteCategory = async (id) => {
  const { error } = await supabase
    .from(CategoryTableName)
    .delete()
    .eq("id", id);
  if (error) {
    console.error("Error deleting :", error.message);
  } else {
    categoryList.value = categoryList.value.filter((el) => el.id !== id);
  }
  getCategoryData();
};

/// 프론트 함수
// 편집모드 on/off
const toggleEditMode = () => {
  editMode.value = !editMode.value;
  console.log("editMode.value", editMode.value);
};

// 페이지 이동 함수 (a태그 대용)
const openLink = (url) => {
  // URL이 http:// 또는 https://로 시작하지 않으면 https://를 추가
  const formattedUrl =
    url && !url.startsWith("http://") && !url.startsWith("https://")
      ? "https://" + url
      : url;
  // 편집모드가 꺼져 있을 때만 링크 이동 허용
  if (!editMode.value && formattedUrl) {
    window.open(formattedUrl, "_blank");
  }
};

// url 도메인 부분 추출
const extractDomain = (url) => {
  // //부터.까지 추출
  let match = url.match(/\/\/([^\.]+)/);
  if (match && match[1]) {
    return match[1];
  }
  // www.부터.까지 추출
  match = url.match(/www\.([^\.]+)/);
  if (match && match[1]) {
    return match[1];
  }
  // 처음부터 .까지 추출
  match = url.match(/([^\.]+)/);
  if (match && match[1]) {
    return match[1];
  }
  // 이것도 저것도 안걸릴때
  return "invalid url";
};

// viewtype 변경
const tabViewType = (type) => {
  viewType.value = type;
  console.log(viewType.value);
};

// sorttype 변경
const tabSortType = (type) => {
  sortType.value = type;
  console.log(sortType.value);

  getNoteData(); // 타입변경 후 재정렬
};

const selectViewType = computed(() => {
  return viewTypes[viewType.value] || "";
});

const cardViewType = computed(() => {
  let baseClass = "";
  if (viewType.value === "simple") {
    baseClass = "simple-card m-1";
  } else if (viewType.value === "grid") {
    baseClass = "grid-card m-1";
  } else if (viewType.value === "list") {
    baseClass = "list-card mt-3";
  }
  // if (viewType.value === "grid") baseClass = "m-1";
  // if (viewType.value === "list") baseClass = "mt-3";
  // const baseClass = viewType.value === "list" ? "mt-3" : "m-1";
  const hoverClass = "hover:bg-violet-100 hover:border-violet-300";
  return !editMode.value ? `${baseClass} ${hoverClass}` : baseClass;
});
// 카테고리 모달
const openCategoryModal = () => {
  isModalOpen.value = true;
};
const closeCategoryModal = () => {
  isModalOpen.value = false;
};
// 카테고리 필터링
async function filterCategory(categoryNowSelected) {
  const { data } = await supabase
    .from(NoteTableName)
    .select("*")
    .eq("useremail", userEmail.value);
  // 필터링 전 전체 노트가져와야됨.
  notes.value = data;

  if (categoryNowSelected === "all") {
    notes.value = data;
  } else {
    const filteredNotes = notes.value.filter(
      (note) => note.category === categoryNowSelected
    );
    notes.value = filteredNotes;
  }
  // console.log("filteredNotes", filteredNotes);
}
onMounted(() => {
  getUser();
});
</script>

<style scoped lang="scss">
input {
  outline: none; /* 포커스 시 외곽선 제거 */
}
.favicon {
  width: 16px;
  height: 16px;
}
.editMode-off {
  cursor: pointer;
}
/* 뷰 종류별 카드 스타일 줄때 쓰기 */
.simple-card {
  max-width: 292px;
}
.grid-card {
}
.list-card {
}
// 카테고리 편집
.my-cancle-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
