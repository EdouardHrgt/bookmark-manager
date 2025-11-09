<script setup></script>

<template>
  <section class="">
    <Logo />
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

h3 {
    padding-left: 7px;
    font-weight: 700;
}

@media (max-width: 1024px) {
  section {
    display: none;
  }
}
</style>
