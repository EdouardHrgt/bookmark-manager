<script setup>
import { onMounted } from "vue";
import getData from "./composables/getData";
import { saveStorage, getStorage } from "./composables/localStorage";
import Button from "./components/Button.vue";
import BookmarkHeader from "./components/BookmarkHeader.vue";
import Header from "./components/Header.vue";

onMounted(() => {
  const bookmarks = getData();
  console.log(bookmarks);
});
</script>

<template>
  <Header />
  <BookmarkHeader label="All Bookmarks" />
  <section class="grid mx-width">
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: var(--spacing-400);
  grid-column-gap: var(--spacing-400);
  
}
</style>
