<!-- 사용예시 : <IconGirdView title="Grid View" className="mr-2" /> -->

<template>
  <!-- div로 감싸줘야 title 속성쓸수있음. -->
  <div :class="className">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <rect width="7" height="4" :fill="currentColor" />
      <rect y="6" width="7" height="4" :fill="currentColor" />
      <rect y="12" width="7" height="4" :fill="currentColor" />
      <rect x="9" width="7" height="4" :fill="currentColor" />
      <rect x="9" y="6" width="7" height="4" :fill="currentColor" />
      <rect x="9" y="12" width="7" height="4" :fill="currentColor" />
    </svg>
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
