<script setup>
import { ref, inject } from 'vue'
const { confirmation, resetConfirmation, setConfirmation } = inject('confirmation')

const options = {
   1: {
      label: 'Archive Bookmark',
      msg: 'Are you sure you want to archive this bookmark?',
      btn: 'Archive',
   },
   2: {
      label: 'Unarchive Bookmark',
      msg: 'Move this bookmark back to your active list?',
      btn: 'Unarchive',
   },
   3: {
      label: 'Delete Bookmark',
      msg: 'Are you sure you want to delete this bookmark?',
      btn: 'Delete permanently',
   },
}
const isToDelete = ref(false)
const cancel = () => {}
const confirm = () => {}
</script>

<template>
   <section>
      <svg
         @click="cancel"
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
      <div class="txt">
         <strong class="tp1"></strong>
         <p class="tp4-medium"></p>
         <p></p>
      </div>
      <div class="buttons flex">
         <button class="btn" data-primary="wh" @click="cancel">
            <p class="tp4-medium">Cancel</p>
         </button>
         <button class="btn" @click="confirm" :class="{ delete: confirmation.id == 3 }">
            <p class="tp4-medium">Archive</p>
         </button>
      </div>
   </section>
</template>

<style scoped>
section {
   border-radius: 12px;
   background-color: var(--neutral-0);
   padding: 1rem;
   width: 420px;
   filter: drop-shadow(-5px 5px 6px var(--neutral-500));
   position: fixed;
   z-index: 75;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
}
svg {
   stroke: var(--neutral-800);
   cursor: pointer;
   display: block;
   margin-left: auto;
}

strong {
   color: var(--neutral-900);
   margin-bottom: 0.5rem;
   display: block;
}

p {
   color: var(--neutral-800);
}

.buttons {
   justify-content: flex-end;
   gap: 1rem;
   margin-top: 2rem;
}

button {
   background-color: var(--teal-700);
   border: 1px solid var(--teal-700);
   cursor: pointer;
   padding: 10px 1.2rem;
}

button p {
   color: var(--base-white);
}

button[data-primary='wh'] {
   background-color: var(--base-white);
   border: 1px solid var(--neutral-400);
}

button[data-primary='wh'] p {
   color: var(--neutral-500);
}

button:hover {
   opacity: 0.8;
}

.delete {
   background-color: var(--red-800);
   border: 1px solid var(--red-800);
}
</style>
