<script setup>
const options = [
   {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M17.5 7.5v-5m0 0h-5m5 0-6.667 6.667m-2.5-5H6.5c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2.5 6.066 2.5 6.767 2.5 8.167V13.5c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C4.4 17.5 5.1 17.5 6.5 17.5h5.333c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092c.272-.535.272-1.235.272-2.635v-1.833"/></svg>`,
      label: 'Visit',
   },
   {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g clip-path="url(#a)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M4.167 12.5c-.777 0-1.165 0-1.471-.127a1.67 1.67 0 0 1-.902-.902c-.127-.306-.127-.694-.127-1.471V4.333c0-.933 0-1.4.182-1.756.16-.314.414-.569.728-.729.357-.181.823-.181 1.757-.181H10c.777 0 1.165 0 1.472.127.408.169.732.493.902.902.126.306.126.694.126 1.47m-2.333 14.167h5.5c.933 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756v-5.5c0-.934 0-1.4-.182-1.757a1.67 1.67 0 0 0-.728-.728C17.067 7.5 16.6 7.5 15.667 7.5h-5.5c-.933 0-1.4 0-1.757.182-.313.16-.568.414-.728.728-.182.357-.182.823-.182 1.757v5.5c0 .933 0 1.4.182 1.756.16.314.415.569.728.729.357.181.824.181 1.757.181"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>`,
      label: 'Copy URL',
   },
   {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M10 12.5v5.833M6.668 6.09v1.776c0 .173 0 .26-.017.343a.8.8 0 0 1-.074.211c-.039.076-.093.143-.201.279l-1.308 1.635c-.555.693-.832 1.04-.833 1.332 0 .254.115.494.314.652.228.182.672.182 1.56.182h7.785c.888 0 1.332 0 1.56-.182a.83.83 0 0 0 .314-.652c0-.292-.278-.639-.833-1.332l-1.308-1.635a1.8 1.8 0 0 1-.2-.279.8.8 0 0 1-.075-.211c-.017-.083-.017-.17-.017-.343V6.09c0-.096 0-.144.005-.191a1 1 0 0 1 .024-.125c.013-.045.03-.09.066-.18l.84-2.099c.245-.612.368-.919.317-1.165a.83.83 0 0 0-.356-.525c-.21-.138-.54-.138-1.199-.138H6.97c-.66 0-.99 0-1.2.138a.83.83 0 0 0-.355.525c-.05.246.072.553.317 1.165l.84 2.1c.035.089.053.134.066.18q.016.06.024.124c.005.047.005.095.005.191"/></svg>`,
      label: 'Pin',
   },
   {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><g clip-path="url(#a)"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M9.167 3.333h-3.5c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092c-.272.535-.272 1.235-.272 2.635v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.093-1.093c.272-.535.272-1.235.272-2.635v-3.5m-10 2.5h1.395c.408 0 .612 0 .804-.046q.256-.061.481-.2c.169-.102.313-.246.601-.535l7.969-7.969a1.768 1.768 0 0 0-2.5-2.5l-7.969 7.97c-.288.287-.432.432-.535.6q-.139.225-.2.482c-.046.191-.046.395-.046.803z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs></svg>`,
      label: 'Edit',
   },
   {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M3.334 6.664a2 2 0 0 1-.325-.03 1.67 1.67 0 0 1-1.31-1.309c-.032-.16-.032-.354-.032-.742 0-.387 0-.58.032-.741a1.67 1.67 0 0 1 1.31-1.31c.16-.032.354-.032.741-.032h12.5c.387 0 .581 0 .742.032a1.67 1.67 0 0 1 1.31 1.31c.032.16.032.354.032.741 0 .388 0 .581-.032.742a1.67 1.67 0 0 1-1.31 1.31 2 2 0 0 1-.325.029m-8.333 4.17h3.333M3.334 6.666h13.333V13.5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273H7.334c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092c-.272-.535-.272-1.235-.272-2.635z"/></svg>`,
      label: 'Archive',
   },
]
import { ref, inject } from 'vue'
const { addOrEdit, toggleAddOrEdit } = inject('addOrEdit')

const props = defineProps({
   bookmark: {
      type: Object,
      required: true,
   },
})

const editedBmk = inject('editedBmk')

const handleOptionClick = (label) => {
   if (label === 'Edit') {
      editedBmk.value = props.bookmark
      toggleAddOrEdit()
   } else if (label === 'Archive') {
      alert('Archive clicked')
   } else if (label === 'Visit') {
      window.open(props.bookmark.url, '_blank')
   } else if (label === 'Copy URL') {
      navigator.clipboard.writeText(props.bookmark.url).then(() => {
         // affiché le mockup pourle dire
      })
   }
}
</script>

<template>
   <section>
      <div
         class="container flex"
         v-for="el in options"
         :key="el.label"
         @click="handleOptionClick(el.label)"
      >
         <span v-html="el.icon" class="icon-wrapper"></span>
         <p class="tp4">{{ el.label }}</p>
      </div>
   </section>
</template>

<style scoped>
section {
   background-color: var(--neutral-0);
   border-radius: 8px;
   padding: 1.5rem;
   filter: drop-shadow(0px 0px 3px var(--neutral-300));
   z-index: 15;
   position: absolute;
   top: 60px;
   right: 1rem;
   bottom: 7px;
}

.container:hover {
   scale: 1.2;
}

.container {
   padding: 5px 1.5rem;
   cursor: pointer;
   transition: scale 0.2s ease-in;
}

.icon-wrapper {
   color: var(--neutral-800);
}

.icon-wrapper :deep(svg) {
   stroke: currentColor;
}

p {
   color: var(--neutral-800);
   margin-left: 1rem;
}
</style>
