<script setup>
import { ref, defineProps } from "vue";

defineProps({
    label: String,
    link: String,
    color: String,
    background: String,
    isMinimized: Boolean,
})

</script>

<template>
  <button class="btn-1 tp3" :style="{ backgroundColor: background, color: color }">
    {{ label }}
  </button>
</template>

<style scoped></style>
