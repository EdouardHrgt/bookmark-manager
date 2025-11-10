<script setup>
import { ref } from 'vue';
const toggleMenu = ref(true);
</script>

<template>
  <section class="" v-if="toggleMenu">
    <div class="flex modal">
    <Logo />
    <svg @click="toggleMenu = !toggleMenu" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15 5 5 15M5 5l10 10"/></svg>
    </div>
    <Navigation />
    <h3 class="tp5">TAGS</h3>
    <Tag />
  </section>
</template>

<style scoped>
section {
  background-color: var(--neutral-0);
  max-width: 300px;
  padding-block: 1.15rem;
  padding-inline: 1rem;
  border-right: 1px solid var(--neutral-300);
}

.modal {
  justify-content: space-between;
}

.modal svg {
  cursor: pointer;
  stroke: var(--neutral-900);
  display: none;
}

h3 {
  padding-left: 7px;
  font-weight: 700;
}

@media (max-width: 1024px) {
  section {
    display: none;
    position: absolute;
    inset: 5.5rem 3rem 0rem 3rem;
    border-radius: 8px;
    z-index: 99;
    max-width: unset;
  }
  .modal svg {
    display: block;
  }
}
</style>
