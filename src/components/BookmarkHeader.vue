<script setup>
import { ref } from "vue";
import { defineProps } from "vue";

defineProps({
  label: String,
});

const sortOptions = ref(["Recently added", "Recntly visited", "Most visited"]);
</script>

<template>
  <section class="flex bookmark-header mx-width">
    <h1 class="tp1">{{ label }}</h1>
    <div class="dropdown">
      <div class="dropdown-label flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke=""
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.6"
            d="M14.167 3.333v13.334m0 0-3.334-3.334m3.334 3.334 3.333-3.334M5.833 16.667V3.333m0 0L2.5 6.667m3.333-3.334 3.334 3.334"
          />
        </svg>
        <p class="tp3">Sort by</p>
        <div class="dropdown-options">
          <p class="tp4">Recently added</p>
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
  padding: 10px .7rem;
  background-color: var(--neutral-0);
  border: 1px solid avr(var(--neutral-400));
  cursor: pointer;
  position: relative;
}

.dropdown:hover .dropdown-options {
  display: block;
}

.dropdown-label svg,
.dropdown-label p {
  stroke: var(--neutral-900);
}

.dropdown-label {
  gap: .7rem;
}

.dropdown-options {
  display: none;
  position: absolute;
  z-index: 5;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  background-color: var(--neutral-0);
  padding: 1rem;
  width: 8.7rem;
  text-align: center;
}

@media (max-width: 800px) {
  .dropdown-options {
    transform: translateX(0);
    right: 0;
  }
}

</style>
