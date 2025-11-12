<script setup>
import { onMounted, provide, ref } from "vue";
import useFetch from "./composables/useFetch";
import { saveStorage, getStorage } from "./composables/localStorage";
import BookmarkEdit from "./components/BookmarkEdit.vue";

const activeTheme = ref("light");
const bookmarks = ref(null);
const mobileMenu = ref(false);
const addOrEdit = ref(false);

const setTheme = (theme) => {
  activeTheme.value = theme;
  document.documentElement.setAttribute("data-theme", theme);
  saveStorage("theme", theme);
};

const toggleMobileMenu = (bool) => {
  if (typeof bool === 'boolean') {
    mobileMenu.value = bool
  } else {
    mobileMenu.value = !mobileMenu.value
  }
}

const toggleAddOrEdit = (bool) => {
  if (typeof bool === 'boolean') {
    addOrEdit.value = bool
  } else {
    addOrEdit.value = !addOrEdit.value
  }
}

onMounted(async () => {
  const result = await useFetch();
  bookmarks.value = result.bookmarks;
});

provide("theme", {
  activeTheme,
  setTheme,
});

provide("menu", {
  mobileMenu,
  toggleMobileMenu,
})

provide("bookmarks", {
  bookmarks,
})

provide("addOrEdit", {
  addOrEdit,
  toggleAddOrEdit,
})
</script>

<template>
  <Sidebar />
  <div>
    <Header />
    <BookmarkHeader label="All Bookmarks" />
    <BookmarkEdit v-if="addOrEdit" />
    <main class="grid mx-width">
      <Card v-for="data in bookmarks" :key="data.id" :label="data.title" :avatar="data.favicon" :url="data.url"
        :txt="data.description" :tags="data.tags" :metrix="data.metrix" :visits="data.visitCount"
        :created="data.createdAt" :visited="data.lastVisited" />
    </main>
  </div>
  <Shade />
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
