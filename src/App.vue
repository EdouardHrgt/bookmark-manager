<script setup>
import { onMounted, provide, ref, computed } from "vue"
import useFetch from "./composables/useFetch"
import { saveStorage, getStorage } from "./composables/localStorage"
import useToggle from "./composables/useToggle"
import BookmarkEdit from "./components/BookmarkModal.vue"
import { watch } from "vue"
import useSortByList from "./composables/useSortByList"

const activeTheme = ref(getStorage("theme") || "light")
const datas = ref(null)
const mobileMenu = ref(false)
const addOrEdit = ref(false)
const archived = ref(false);
const sortBy = ref('most visited')
const selectedTag = ref(null)
const searchQuery = ref('')

const setTheme = (theme) => {
  activeTheme.value = theme
  document.documentElement.setAttribute("data-theme", theme);
  saveStorage("theme", theme)
}

onMounted(async () => {
  const storage = getStorage('bookmarks') || undefined
  if (storage && storage.length > 0) {
    datas.value = storage
    return
  }
  const result = await useFetch();
  datas.value = result;
  saveStorage('bookmarks', result)
});

watch(datas, (newVal) => {
  saveStorage('bookmarks', newVal)
}, { deep: true })

const toggleMobileMenu = useToggle(mobileMenu)
const toggleAddOrEdit = useToggle(addOrEdit)
const toggleArchived = useToggle(archived)

const setSelectedTag = (tag) => {
  selectedTag.value = selectedTag.value === tag ? null : tag
}

const setSearchQuery = (query) => {
  searchQuery.value = query
}

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

provide('sortBy', sortBy)

provide('tags', {
  selectedTag,
  setSelectedTag
})

provide('search', {
  searchQuery,
  setSearchQuery
})

const bookmarks = computed(() => {
  if (!datas.value) return []

  let filtered
  if (archived.value === false) {
    filtered = datas.value.filter((data) => !data.isArchived)
  } else {
    filtered = datas.value.filter((data) => data.isArchived)
  }

  if (selectedTag.value) {
    filtered = filtered.filter(data => data.tags.includes(selectedTag.value))
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(data =>
      data.title.toLowerCase().includes(query)
    )
  }

  return useSortByList(sortBy.value, filtered)
})

</script>

<template>
  <Sidebar />
  <div>
    <Header />
    <BookmarkHeader :label="archived ? 'All Archived' : 'All Bookmarks'" />
    <BookmarkEdit v-if="addOrEdit" />
    <TransitionGroup name="card-list" tag="main" class="grid mx-width">
      <Card v-for="(data, index) in bookmarks" :key="`${data.id}-${sortBy}-${archived}`" :style="{ '--index': index }"
        :label="data.title" :avatar="data.favicon" :url="data.url" :txt="data.description" :tags="data.tags"
        :metrix="data.metrix" :visits="data.visitCount" :created="data.createdAt" :visited="data.lastVisited" />
    </TransitionGroup>
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

.card-list-enter-active {
  animation: cardFadeIn .5s ease backwards;
  animation-delay: calc(var(--index) * 0.08s);
}


@keyframes cardFadeIn {
  from {
    opacity: 0;
    filter: blur(4px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
}

.card-list-leave-active {
  display: none;
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
