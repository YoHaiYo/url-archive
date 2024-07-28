<!-- 사용예시 : <IconListView title="Grid View" className="mr-2" /> -->

<template>
  <!-- div로 감싸줘야 title 속성쓸수있음. -->
  <div :class="className">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 16 16"
      :fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <path
        d="M4 4H0V0H4V4ZM10 0H6V4H10V0ZM16 0H12V4H16V0ZM4 6H0V10H4V6ZM10 6H6V10H10V6ZM16 6H12V10H16V6ZM4 12H0V16H4V12ZM10 12H6V16H10V12ZM16 12H12V16H16V12Z"
        :fill="currentColor"
      />
    </svg>
    <!-- <svg
      :width="size"
      :height="size"
      viewBox="0 0 23 14"
      :fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <path
        d="M5 2.875V0.125H22.5V2.875H5ZM5 8.375V5.625H22.5V8.375H5ZM5 13.875V11.125H22.5V13.875H5ZM1.25 2.875C0.895838 2.875 0.599171 2.743 0.360004 2.479C0.120838 2.215 0.000837644 1.88867 4.31034e-06 1.5C-0.000829023 1.11133 0.119171 0.785 0.360004 0.521C0.600838 0.257 0.897504 0.125 1.25 0.125C1.6025 0.125 1.89959 0.257 2.14125 0.521C2.38292 0.785 2.5025 1.11133 2.5 1.5C2.4975 1.88867 2.3775 2.21546 2.14 2.48038C1.9025 2.74529 1.60584 2.87683 1.25 2.875ZM1.25 8.375C0.895838 8.375 0.599171 8.243 0.360004 7.979C0.120838 7.715 0.000837644 7.38867 4.31034e-06 7C-0.000829023 6.61133 0.119171 6.285 0.360004 6.021C0.600838 5.757 0.897504 5.625 1.25 5.625C1.6025 5.625 1.89959 5.757 2.14125 6.021C2.38292 6.285 2.5025 6.61133 2.5 7C2.4975 7.38867 2.3775 7.71546 2.14 7.98038C1.9025 8.24529 1.60584 8.37683 1.25 8.375ZM1.25 13.875C0.895838 13.875 0.599171 13.743 0.360004 13.479C0.120838 13.215 0.000837644 12.8887 4.31034e-06 12.5C-0.000829023 12.1113 0.119171 11.785 0.360004 11.521C0.600838 11.257 0.897504 11.125 1.25 11.125C1.6025 11.125 1.89959 11.257 2.14125 11.521C2.38292 11.785 2.5025 12.1113 2.5 12.5C2.4975 12.8887 2.3775 13.2155 2.14 13.4804C1.9025 13.7453 1.60584 13.8768 1.25 13.875Z"
        :fill="currentColor"
      />
    </svg> -->
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from "vue";

const props = defineProps({
  color: {
    type: String,
    default: "#B3B3B3",
  },
  className: {
    type: String,
    default: "",
  },
  hoverColor: {
    type: String,
    default: "rgb(139 92 246)",
  },
  size: {
    type: Number,
    default: 16,
  },
});

const isHovered = ref(false);
const currentColor = computed(() =>
  isHovered.value ? props.hoverColor : props.color
);
</script>

<style scoped>
/* 필요한 경우 스타일 추가 */
</style>
