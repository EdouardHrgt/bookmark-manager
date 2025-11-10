<script setup>
import { onMounted, provide, ref } from "vue";
import getData from "./composables/getData";
import { saveStorage, getStorage } from "./composables/localStorage";

const activeTheme = ref("light");
const datas = ref(null);

const setTheme = (theme) => {
  activeTheme.value = theme;
  document.documentElement.setAttribute("data-theme", theme);
};

onMounted(async () => {
  const result = await getData();
  datas.value = result.bookmarks;
  saveStorage("bookmarks", result.bookmarks);
});

provide("theme", {
  activeTheme,
  setTheme,
});
</script>

<template>
  <Sidebar />
  <div>
    <Header />
    <BookmarkHeader label="All Bookmarks" />
    <main class="grid mx-width">
      <Card
        v-for="(data, i) in datas"
        :key="i"
        :label="data.title"
        :avatar="data.favicon"
        :url="data.url"
        :txt="data.description"
        :tags="data.tags"
        :metrix="data.metrix"
      />
    </main>
  </div>
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

@media (max-width: 1440px) {
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
