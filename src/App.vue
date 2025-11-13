<script setup>
import { onMounted, provide, ref, computed } from "vue"
import useFetch from "./composables/useFetch"
import { saveStorage, getStorage } from "./composables/localStorage"
import useToggle from "./composables/useToggle"
import BookmarkEdit from "./components/BookmarkModal.vue"

const activeTheme = ref("light")
const datas = ref(null)
const mobileMenu = ref(false)
const addOrEdit = ref(false)
const archived = ref(false);

const initTheme = () => {
  const savedTheme = getStorage("theme")
  if (savedTheme) {
    activeTheme.value = savedTheme
    document.documentElement.setAttribute("data-theme", savedTheme)
  }
}
initTheme()

const setTheme = (theme) => {
  activeTheme.value = theme
  document.documentElement.setAttribute("data-theme", theme);
  saveStorage("theme", theme)
}

onMounted(async () => {
  const result = await useFetch();
  datas.value = result;
});

const toggleMobileMenu = useToggle(mobileMenu)
const toggleAddOrEdit = useToggle(addOrEdit)
const toggleArchived = useToggle(archived)

provide("theme", {
  activeTheme,
  setTheme,
});

provide("menu", {
  mobileMenu,
  toggleMobileMenu,
})

provide("datas", {
  datas,
})

provide("addOrEdit", {
  addOrEdit,
  toggleAddOrEdit,
})

provide("archived", {
  archived,
  toggleArchived,
})

const bookmarks = computed(() => {
  if (!datas.value) return []

  if (archived.value === false) {
    return datas.value
  } else {
    return datas.value.filter((data) => data.isArchived)
  }
})

</script>

<template>
  <Sidebar />
  <div>
    <Header />
    <BookmarkHeader :label="archived ? 'All Archived' : 'All Bookmarks'" />
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
  padding-bottom: 32px;
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
