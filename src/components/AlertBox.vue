<script setup>
import { inject } from 'vue'
const alertBox = inject('alertBox')
</script>

<template>
   <section class="flex">
      <div class="flex">
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
               d="M15 5 5 15M5 5l10 10"
            />
         </svg>
         <p class="tp4-medium">Changes saved</p>
      </div>

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
            d="M15 5 5 15M5 5l10 10"
         />
      </svg>
   </section>
</template>

<style scoped>
section {
   background-color: var(--neutral-0);
   border-radius: 8px;
   justify-content: space-between;
   position: fixed;
   top: 6rem;
   right: 2rem;
   width: 340px;
   height: 40px;
   padding-inline: 1rem;
   filter: drop-shadow(5px 5px 6px var(--neutral-500));
}

div {
   gap: 1rem;
}

svg {
   stroke: var(--neutral-800);
}

section > svg {
   cursor: pointer;
}
</style>
