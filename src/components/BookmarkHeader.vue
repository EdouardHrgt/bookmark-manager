<script setup>
import { ref } from "vue";
import { inject } from "vue";
import { vClickOutside } from "@/directives/clickOutside";

const sortOptions = ["Recently added", "Recently visited", "Most visited"]

const isOpen = ref(false)
const { archived, toggleArchived } = inject('archived')
const sortBy = inject('sortBy')

defineProps({
  label: String,
})

const closeDropdown = () => {
  isOpen.value = false
}

const selectOption = (option) => {
  sortBy.value = option
    setTimeout(() => {
    isOpen.value = false
  }, 950)
}

</script>

<template>
  <section class="flex bookmark-header mx-width">
    <h1 class="tp1">{{ label }}</h1>
    <div class="dropdown" v-click-outside="closeDropdown">
      <div class="dropdown-label flex" @click="isOpen = !isOpen">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
          <path stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
            d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334" />
        </svg>
        <p class="tp3">Sort by</p>
        <div class="dropdown-options" v-if="isOpen">
          <p class="tp4 flex" v-for="(el, i) in sortOptions" :key="i" @click.stop="selectOption(el)">
            {{ el }}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"
              v-if="sortBy.toLowerCase() === el.toLowerCase()">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
                d="M16.666 5 7.5 14.167 3.333 10" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bookmark-header {
  justify-content: space-between;
  padding-block: var(--spacing-400) var(--spacing-250);
}

.dropdown {
  border-radius: 8px;
  padding: 10px 1.2rem;
  background-color: var(--neutral-0);
  cursor: pointer;
  position: relative;
}

.dropdown-label svg,
.dropdown-label p {
  stroke: var(--neutral-900);
}

.dropdown-label {
  gap: .7rem;
}

.dropdown-options {
  position: absolute;
  z-index: 5;
  top: 100%;
  right: 0;
  background-color: var(--neutral-0);
  padding-block: 1.2rem;
  width: 13rem;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 1rem var(--neutral-900-o);
}

.dropdown-options p {
  padding: 12px 1rem;
  cursor: pointer;
  transition: all .2s ease-in;
  justify-content: space-between;
}

.dropdown-options p:hover {
  box-shadow: 0 0 0 1px var(--neutral-300);
  border-radius: 8px;
}


@media (max-width: 800px) {
  .dropdown-options {
    transform: translateX(0);
    right: 0;
  }
}
</style>
