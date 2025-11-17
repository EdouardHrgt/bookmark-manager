<script setup>
import { inject, computed } from 'vue'
const items = {
   1: {
      txt: 'Bookmark added successfully.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16.666 5 7.5 14.167 3.333 10"/></svg>`,
   },
   2: {
      txt: 'Changes saved.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g clip-path="url(#a)"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9.167 3.333h-3.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092c-.272.535-.272 1.235-.272 2.635v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.093-1.093c.272-.535.272-1.235.272-2.635v-3.5m-10 2.5h1.395c.408 0 .612 0 .804-.046q.256-.061.481-.2c.169-.102.313-.246.601-.535l7.969-7.969a1.768 1.768 0 0 0-2.5-2.5l-7.969 7.97c-.288.287-.432.432-.535.6q-.139.225-.2.482c-.046.191-.046.395-.046.803z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>`,
   },
   3: {
      txt: 'Link copied to clipboard.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g clip-path="url(#a)"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.167 12.5c-.777 0-1.165 0-1.471-.127a1.67 1.67 0 0 1-.902-.902c-.127-.306-.127-.694-.127-1.471V4.333c0-.933 0-1.4.182-1.756.16-.314.414-.569.728-.729.357-.181.823-.181 1.757-.181H10c.777 0 1.165 0 1.472.127.408.169.732.493.902.902.126.306.126.694.126 1.47m-2.333 14.167h5.5c.933 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756v-5.5c0-.934 0-1.4-.182-1.757a1.67 1.67 0 0 0-.728-.728C17.067 7.5 16.6 7.5 15.667 7.5h-5.5c-.933 0-1.4 0-1.757.182-.313.16-.568.414-.728.728-.182.357-.182.823-.182 1.757v5.5c0 .933 0 1.4.182 1.756.16.314.415.569.728.729.357.181.824.181 1.757.181"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>`,
   },
   4: {
      txt: 'Bookmark pinned to top.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M10 12.5v5.833M6.668 6.09v1.776c0 .173 0 .26-.017.343a.8.8 0 0 1-.074.211c-.039.076-.093.143-.201.279l-1.308 1.635c-.555.693-.832 1.04-.833 1.332 0 .254.115.494.314.652.228.182.672.182 1.56.182h7.785c.888 0 1.332 0 1.56-.182a.83.83 0 0 0 .314-.652c0-.292-.278-.639-.833-1.332l-1.308-1.635a1.8 1.8 0 0 1-.2-.279.8.8 0 0 1-.075-.211c-.017-.083-.017-.17-.017-.343V6.09c0-.096 0-.144.005-.191a1 1 0 0 1 .024-.125c.013-.045.03-.09.066-.18l.84-2.099c.245-.612.368-.919.317-1.165a.83.83 0 0 0-.356-.525c-.21-.138-.54-.138-1.199-.138H6.97c-.66 0-.99 0-1.2.138a.83.83 0 0 0-.355.525c-.05.246.072.553.317 1.165l.84 2.1c.035.089.053.134.066.18q.016.06.024.124c.005.047.005.095.005.191"/></svg>`,
   },
   5: {
      txt: 'Bookmark archived.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M3.334 6.664a2 2 0 0 1-.325-.03 1.67 1.67 0 0 1-1.31-1.309c-.032-.16-.032-.354-.032-.742 0-.387 0-.58.032-.741a1.67 1.67 0 0 1 1.31-1.31c.16-.032.354-.032.741-.032h12.5c.387 0 .581 0 .742.032a1.67 1.67 0 0 1 1.31 1.31c.032.16.032.354.032.741 0 .388 0 .581-.032.742a1.67 1.67 0 0 1-1.31 1.31 2 2 0 0 1-.325.029m-8.333 4.17h3.333M3.334 6.666h13.333V13.5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273H7.334c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092c-.272-.535-.272-1.235-.272-2.635z"/></svg>`,
   },
   6: {
      txt: 'Bookmark restored.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M16.666 5 7.5 14.167 3.333 10"/></svg>`,
   },
   7: {
      txt: 'Bookmark deleted.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#051513" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M7.5 2.5h5M2.5 5h15m-1.667 0-.584 8.766c-.088 1.315-.132 1.973-.416 2.472a2.5 2.5 0 0 1-1.082 1.012c-.516.25-1.175.25-2.493.25H8.742c-1.318 0-1.977 0-2.493-.25a2.5 2.5 0 0 1-1.082-1.012c-.284-.5-.328-1.157-.416-2.472L4.167 5m4.166 3.75v4.167m3.334-4.167v4.167"/></svg>`,
   },
}

const { alertBox, resetAlertBox } = inject('alertBox')
const message = computed(() => {
   return items[alertBox.value.id] || { txt: '', icon: '' }
})
</script>

<template>
   <section class="flex" v-show="alertBox.state">
      <div class="flex">
         <span v-html="message.icon" class="icon-wrapper"></span>
         <p class="tp4-medium">{{ message.txt }}</p>
      </div>

      <svg
         @click="resetAlertBox"
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
   animation: slide 0.2s ease-in forwards;
}

section.closing {
   animation: slideOut 0.2s ease-out forwards;
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

@keyframes slide {
   from {
      transform: scale(0);
   }
   to {
      transform: scale(1);
   }
}

@keyframes slideOut {
   from {
      transform: scale(1);
      opacity: 1;
   }

   to {
      transform: scale(0);
      opacity: 0;
   }
}
</style>
