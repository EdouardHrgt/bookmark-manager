<script setup>
import { inject } from "vue";
const { mobileMenu, toggleMobileMenu } = inject("menu");
const datas = inject("datas");
</script>

<template>
  <section :class="['sidebar', { active: mobileMenu }]">
    <div class="flex modal">
      <Logo />
      <svg @click="toggleMobileMenu()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15 5 5 15M5 5l10 10" />
      </svg>
    </div>
    <Navigation />
    <h3 class="tp5">TAGS</h3>
    <Tag />
  </section>
</template>

<style scoped>
.sidebar {
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
  .sidebar {
    display: none;
    position: fixed;
    inset: 3rem 3rem 0.5rem 3rem;
    border-radius: 8px;
    z-index: 99;
    max-width: unset;
  }

  .sidebar.active {
    display: block;
  }

  .modal svg {
    display: block;
  }
}
</style>
