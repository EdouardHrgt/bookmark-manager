<script setup>
defineProps({
  label: String,
  link: String,
  color: String,
  background: String,
  isMinimized: Boolean,
});
</script>

<template>
  <button
    :class="{ minimized: isMinimized }"
    :style="{ backgroundColor: background, color: color }"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.6"
        d="M10 4.167v11.666M4.167 10h11.667"
      />
    </svg>
    <p class="tp3">{{ label }}</p>
  </button>
</template>

<style scoped>
button {
  width: 163px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-in;
  cursor: pointer;
}

button:hover {
  opacity: 0.7;
}

button svg {
  stroke: var(--base-white);
}

button p {
  margin-left: 5px;
  color: var(--base-white);
}

@media (max-width: 800px) {
  .minimized {
    width: 40px;
    height: 40px;
  }

  .minimized p {
    display: none;
  }

  .minimized svg {
    margin-right: 0;
  }
}
</style>
