<script setup>
import { onMounted } from "vue";
import getData from "./composables/getData";
import { saveStorage, getStorage } from "./composables/localStorage";

onMounted(() => {
  const bookmarks = getData();
  console.log(bookmarks);
});
</script>

<template>
  <Header />
  <BookmarkHeader label="All Bookmarks" />
  <section class="grid mx-width">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </section>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: var(--spacing-400);
  grid-column-gap: var(--spacing-400);
}

@media (max-width: 1800px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 1150px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 800px) {
  .grid {
    display: block;
  }
}
</style>
