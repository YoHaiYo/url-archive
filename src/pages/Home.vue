<template>
  <!--- HEADER -->
  <!-- vue에선 public 경로가 이미지 루트경로라 바로 /이미지.svg 경로로 씀 -->
  <section
    class="relative bg-white overflow-hidden"
    style="
      background-image: url('/pattern-white.svg') !important;
      background-position: center;
    "
  >
    <div class="py-20 md:py-28">
      <div class="container px-4 mx-auto">
        <div class="flex justify-center flex-wrap xl:items-center -mx-4">
          <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
            <span
              class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
            >
              Welcome
            </span>
            <h1
              class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight"
            >
              Simplify Your URL Management Effortlessly.
            </h1>
            <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">
              Our platform makes saving and organizing URLs a breeze! Just paste
              a URL and hit enter to instantly save it, complete with an
              auto-generated favicon. Organize your links into categories and
              choose from various views—simple, grid, or list—to maximize your
              convenience.
            </p>
            <div class="flex flex-wrap justify-center">
              <div class="w-full md:w-auto py-1 md:py-0 md:mr-4">
                <router-link
                  class="inline-block py-3 px-5 w-full text-base md:text-lg leading-4 text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 border border-violet-500 rounded-md shadow-sm"
                  to="/login"
                >
                  Try It Now
                </router-link>
              </div>
              <div class="w-full md:w-auto py-1 md:py-0">
                <router-link
                  class="inline-block py-3 px-5 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm"
                  to="/signup"
                >
                  Sign Up for Free
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--- Features -->
  <section
    class="py-24 md:pb-32 bg-white"
    style="
      background-image: url('/pattern-white.svg') !important;
      background-position: center;
    "
  >
    <div class="container px-4 mx-auto">
      <div class="md:max-w-4xl mb-12 mx-auto text-center">
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
        >
          Our Features
        </span>
        <h1
          class="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter"
        >
          Unlock the Full Potential of Your URLs
        </h1>
        <p class="text-lg md:text-xl text-coolGray-500 font-medium">
          Our platform is designed to enhance your URL management experience
          with intuitive features like advanced categorization, custom tags, and
          insightful analytics, all in one secure space.
        </p>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <font-awesome-icon
                icon="fa-folder-open"
                class="text-white"
                style="font-size: 32"
              />
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Organize with Ease
            </h3>
            <p class="text-coolGray-500 font-medium">
              Categorize your URLs effortlessly and find what you need in
              seconds.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <font-awesome-icon
                icon="fa-chart-line"
                class="text-white"
                style="font-size: 32"
              />
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Analyze Usage Patterns
            </h3>
            <p class="text-coolGray-500 font-medium">
              Gain valuable insights into how your URLs are being utilized to
              optimize your strategy.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            class="h-full p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200"
          >
            <div
              class="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-violet-500 rounded-lg"
            >
              <font-awesome-icon
                icon="fa-user-friends"
                class="text-white"
                style="font-size: 32"
              />
            </div>
            <h3 class="mb-4 text-xl md:text-2xl leading-tight font-bold">
              Collaborate Seamlessly
            </h3>
            <p class="text-coolGray-500 font-medium">
              Share your URLs with team members and collaborate in real-time for
              maximum productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--- How it works -->
  <section
    class="py-24 bg-white overflow-hidden"
    style="
      background-image: url('/pattern-white.svg') !important;
      background-position: center;
    "
  >
    <div class="container px-4 mx-auto">
      <div class="flex justify-center flex-wrap -mx-4">
        <div class="w-full md:w-1/2 px-4">
          <span
            class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-full shadow-sm"
          >
            How It Works
          </span>
          <h2
            class="mb-12 text-4xl md:text-5xl leading-tight font-bold tracking-tighter"
          >
            Seamlessly Manage Your URLs with Our Platform
          </h2>
          <div class="flex flex-wrap -mx-4 text-center md:text-left">
            <div class="w-full md:w-1/2 px-4 mb-8">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                1
              </div>
              <h3 class="mb-2 text-xl font-bold">Intuitive Interface</h3>
              <p class="font-medium text-coolGray-500">
                Easily navigate through your saved URLs and access features with
                a user-friendly design that enhances your workflow.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-4 mb-8">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                2
              </div>
              <h3 class="mb-2 text-xl font-bold">Dynamic Categorization</h3>
              <p class="font-medium text-coolGray-500">
                Sort your links into custom categories, making it simple to find
                and manage your URLs quickly.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-4 mb-8">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                3
              </div>
              <h3 class="mb-2 text-xl font-bold">Smart Favicon Generation</h3>
              <p class="font-medium text-coolGray-500">
                Automatically retrieve favicons for your URLs, giving each link
                a recognizable and professional look.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-4">
              <div
                class="inline-flex items-center justify-center mb-4 w-12 h-12 text-xl text-white bg-violet-500 font-semibold rounded-full"
              >
                4
              </div>
              <h3 class="mb-2 text-xl font-bold">Flexible Viewing Options</h3>
              <p class="font-medium text-coolGray-500">
                Choose from various display formats—grid, list, or simple
                view—to tailor your management experience to your needs.
              </p>
            </div>
          </div>
        </div>
        <!-- Uncomment this section if images are available -->
        <!-- <div class="w-full md:w-1/2 px-4">
        <div class="relative mx-auto md:ml-0 max-w-max">
          <img
            class="absolute z-10 -right-8 -top-8 w-28 md:w-auto"
            src="flex-ui-assets/elements/circle3-green.svg"
            alt=""
          />
          <img
            class="absolute z-10 -left-10 -bottom-8 w-28 md:w-auto"
            src="flex-ui-assets/elements/dots3-yellow.svg"
            alt=""
          />
          <img
            src="flex-ui-assets/images/how-it-works/stock.png"
            alt=""
          />
        </div>
      </div> -->
      </div>
    </div>
  </section>

  <!--- Pricing -->
  <section
    class="py-20 xl:pt-24 xl:pb-28 bg-white"
    style="
      background-image: url('/pattern-white.svg') !important;
      background-position: center;
    "
  >
    <div class="container px-4 mx-auto">
      <div class="md:max-w-4xl mb-12 mx-auto text-center">
        <span
          class="inline-block py-px px-2 mb-4 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl"
        >
          Pricing Plans
        </span>
        <h3
          class="mb-4 text-3xl md:text-5xl text-coolGray-900 font-bold tracking-tighter"
        >
          Tailored Pricing for Every Stage of Your Journey
        </h3>
        <p class="mb-12 text-lg md:text-xl text-coolGray-500 font-medium">
          Choose a plan that adapts as your needs evolve.
        </p>
      </div>
      <div class="flex flex-wrap justify-center -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div
            class="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500"
          >
            <span
              class="inline-block py-px px-2 mb-6 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl"
            >
              Best Value
            </span>
            <h3 class="mb-4 text-lg md:text-xl text-violet-500 font-medium">
              Basic Plan
            </h3>
            <div class="mb-4">
              <span
                class="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium"
              >
                $
              </span>
              <span class="text-5xl text-coolGray-900 font-medium">0 </span>
              <span class="text-3xl text-coolGray-900 font-medium"> /mo </span>
            </div>
            <ul class="self-start mb-8">
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Access to valuable resources and insights</span>
              </li>
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Innovative ideas for seamless setup</span>
              </li>
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Cloud storage options to suit various needs</span>
              </li>
              <li class="flex items-center text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Flexible collaboration with potential team growth</span>
              </li>
            </ul>

            <router-link
              class="inline-block py-3 px-7 w-full text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
              to="/login"
            >
              Start Free Trial
            </router-link>
          </div>
        </div>
        <!-- Add additional pricing plans here with similar structure -->
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div
            class="flex flex-col items-center pt-10 px-8 pb-8 bg-coolGray-50 rounded-md shadow-md hover:scale-105 transition duration-500"
          >
            <span
              class="inline-block py-px px-2 mb-6 text-xs leading-5 text-violet-500 bg-violet-100 font-medium uppercase rounded-9xl"
            >
              Premium Offer
            </span>
            <h3 class="mb-4 text-lg md:text-xl text-violet-500 font-medium">
              Pro Plan
            </h3>
            <div class="mb-4">
              <span
                class="relative -top-6 right-1 text-2xl text-coolGray-900 font-medium"
              >
                $
              </span>
              <span class="text-5xl text-coolGray-900 font-medium">3 </span>
              <span class="text-3xl text-coolGray-900 font-medium"> /mo </span>
            </div>
            <ul class="self-start mb-8">
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Includes all features from the Basic Plan</span>
              </li>
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Priority support access for quick resolutions</span>
              </li>
              <li class="flex items-center mb-3 text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Advanced analytics and reporting features</span>
              </li>
              <li class="flex items-center text-coolGray-500 font-medium">
                <font-awesome-icon
                  class="mr-3"
                  icon="fa-check-circle"
                  width="20"
                />
                <span>Custom branding options to enhance your identity</span>
              </li>
            </ul>

            <router-link
              class="inline-block py-3 px-7 w-full text-violet-50 font-medium text-center bg-violet-500 hover:bg-violet-600 focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 rounded-md shadow-sm"
              to="/login"
            >
              Start Free Trial
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { supabase } from "../../util/supabase/supabase";
import { onMounted } from "vue";

// 사용자 로그인 상태 확인 함수
const checkUserSession = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    // 사용자가 로그인되어 있으면 특정 페이지로 이동
    window.location.href = "/notes"; //
  }
};

// 컴포넌트가 마운트될 때 사용자 세션 확인
onMounted(() => {
  checkUserSession();
});
</script>
