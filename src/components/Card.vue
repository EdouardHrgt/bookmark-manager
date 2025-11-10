<script setup>
import { ref, defineProps } from "vue";
defineProps({
  label: String,
  avatar: String,
  url: String,
  txt: String,
  tags: Array,
  metrix: Array,
});
const icons = [
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
           d="M2.017 10.594c-.114-.18-.17-.27-.202-.408a1 1 0 0 1 0-.372c.032-.139.088-.229.202-.408.938-1.485 3.73-5.24 7.983-5.24 4.255 0 7.046 3.755 7.984 5.24.113.18.17.27.202.408a1 1 0 0 1 0 .372c-.032.139-.089.229-.202.408-.938 1.485-3.73 5.24-7.984 5.24s-7.045-3.755-7.983-5.24"/>
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
           d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
   </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
     <g clip-path="url(#a)">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
             d="M10 5v5l3.334 1.667m5-1.667a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"/>
     </g>
     <defs><clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
   </svg>`,
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
           d="M17.5 8.333h-15m10.833-6.666V5M6.667 1.667V5M6.5 18.333h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273h-7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C2.5 5.233 2.5 5.933 2.5 7.333v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272"/>
   </svg>`,
];
</script>

<template>
  <article>
    <div class="label-container flex">
      <img :src="avatar || '/images/default.png'" :alt="label" />
      <div class="label">
        <h2 class="tp2">{{ label }}</h2>
        <p class="tp5">{{ url }}</p>
      </div>
      <div class="flex label-edit">
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
            d="M10 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666M10 5a.833.833 0 1 0 0-1.667A.833.833 0 0 0 10 5M10 16.667A.833.833 0 1 0 10 15a.833.833 0 0 0 0 1.667"
          />
        </svg>
      </div>
    </div>
    <div class="text">
      <p class="tp4-medium">
        {{ txt }}
      </p>
      <div class="tags flex">
        <p v-for="(tag, i) in tags" key="i">
          <strong class="tp-5 tag">{{ tag }}</strong>
        </p>
      </div>
    </div>
    <div class="metrix-container flex">
      <div class="metrix flex">
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
            d="M2.017 10.594c-.114-.18-.17-.27-.202-.408a1 1 0 0 1 0-.372c.032-.139.088-.229.202-.408.938-1.485 3.73-5.24 7.983-5.24 4.255 0 7.046 3.755 7.984 5.24.113.18.17.27.202.408a1 1 0 0 1 0 .372c-.032.139-.089.229-.202.408-.938 1.485-3.73 5.24-7.984 5.24s-7.045-3.755-7.983-5.24"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.6"
            d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
          />
        </svg>
        <p class="tp-5">150</p>
      </div>
      <div class="metrix flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 20 20"
        >
          <g clip-path="url(#a)">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
              d="M10 5v5l3.334 1.667m5-1.667a8.333 8.333 0 1 1-16.667 0 8.333 8.333 0 0 1 16.667 0"
            />
          </g>
          <defs>
            <clipPath id="a"><path fill="#fff" d="M0 0h20v20H0z" /></clipPath>
          </defs>
        </svg>
        <p class="tp-5">23 Sep</p>
      </div>
      <div class="metrix flex">
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
            d="M17.5 8.333h-15m10.833-6.666V5M6.667 1.667V5M6.5 18.333h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.535.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273h-7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C2.5 5.233 2.5 5.933 2.5 7.333v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272"
          />
        </svg>
        <p class="tp-5">15 Jan</p>
      </div>
      <p><strong class="tp-5 tag">Practice</strong></p>
    </div>
  </article>
</template>

<style scoped>
article {
  padding: 1rem;
  border-radius: 12px;
  background-color: var(--neutral-0);
  max-width: 100%;
  min-width: 338px;
}

article p,
article strong {
  color: var(--neutral-800);
}

article strong {
  font-weight: 500;
  display: block;
  border-radius: 4px;
  background-color: var(--neutral-100);
  padding: 2px 8px;
}

.label-container img {
  width: 44px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid var(--neutral-100);
}

.label-container {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--neutral-300);
}

.label {
  width: 100%;
  margin-inline: 12px;
}

.label-edit svg {
  stroke: var(--neutral-900);
}

.label-edit {
  width: 32px;
  height: 32px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  border: 1px solid var(--neutral-400);
  justify-content: center;
  cursor: pointer;
}

.text {
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--neutral-300);
}

.tags {
  gap: 0.5rem;
  margin-top: 1rem;
}

.metrix-container {
  padding-top: 12px;
  gap: 8px;
  justify-content: space-between;
}

.metrix {
  gap: 3px;
}

.metrix p {
  color: var(--neutral-800);
}

.metrix svg {
  stroke: var(--neutral-800);
}

@media (max-width: 800px) {
  article {
    max-width: unset;
    width: 100%;
    margin-block: 32px;
  }
}
</style>
