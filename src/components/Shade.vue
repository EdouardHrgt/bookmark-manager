<script setup>
import { inject } from "vue";

const closeModal = ()=> {
  toggleAddOrEdit(false);
  toggleMobileMenu(false);
}

const { mobileMenu, toggleMobileMenu } = inject("menu");
const { addOrEdit , toggleAddOrEdit} = inject("addOrEdit");
</script>

<template>
  <div v-show="mobileMenu || addOrEdit" @click="closeModal()"></div>
</template>

<style scoped>
div {
  position: fixed;
  z-index: 90;
  inset: 0;
  background-color: var(--very-dark);
  animation: fade 0.1s ease-in forwards;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.7;
  }
}
</style>

