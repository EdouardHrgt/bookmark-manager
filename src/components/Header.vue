<script setup>
import { defineProps, ref, inject } from "vue";
import Button from "./Button.vue";

const profile = ref(false);
const isDark = ref(false);
const { activeTheme, setTheme } = inject("theme");

defineProps({
  bookmarks: Array,
});

const closeProfile = ()=> {
  setTimeout(() => {
  profile.value = false
}, "1500");
}
</script>

<template>
  <header class="flex mx-width">
    <div class="menu">
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
          d="M2.5 10h15m-15-5h15m-15 10h15"
        />
      </svg>
    </div>
    <input type="text" id="search" placeholder="Search by title..." />

    <div class="flex wrapper">
      <Button
        label="Add Bookmark"
        color="var(--neutral-0)"
        background="var(--teal-700)"
        :isMinimized="true"
      />
      <div class="profile" @click="profile = !profile">
        <img src="/images/image-avatar.webp" alt="profile picture" />
      </div>
      <div class="profile-menu" v-if="profile">
        <div class="theme flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
          >
            <g
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
              clip-path="url(#a)"
            >
              <path
                d="M1.667 10A8.333 8.333 0 0 0 10 18.333a2.5 2.5 0 0 0 2.5-2.5v-.416c0-.387 0-.58.022-.743a2.5 2.5 0 0 1 2.152-2.153c.162-.021.356-.021.743-.021h.417a2.5 2.5 0 0 0 2.5-2.5 8.333 8.333 0 0 0-16.667 0"
              />
              <path
                d="M5.834 10.833a.833.833 0 1 0 0-1.666.833.833 0 0 0 0 1.666M13.334 7.5a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667M8.334 6.667a.833.833 0 1 0 0-1.667.833.833 0 0 0 0 1.667"
              />
            </g>
            <defs>
              <clipPath id="a"><path d="M0 0h20v20H0z" /></clipPath>
            </defs>
          </svg>
          <p class="tp4">Theme</p>
          <div class="theme-btns flex">
            <button
              class="btn-2"
              data-theme="light"
              :class="{ active: activeTheme === 'light' }"
              @click="setTheme('light'); closeProfile()"
            >
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
                    d="M10 1.667v1.666m0 13.334v1.666M3.334 10H1.667m3.595-4.738L4.084 4.083m10.655 1.179 1.178-1.179M5.262 14.742 4.084 15.92m10.655-1.178 1.178 1.178M18.334 10h-1.667m-2.5 0a4.167 4.167 0 1 1-8.333 0 4.167 4.167 0 0 1 8.333 0"
                  />
                </g>
                <defs>
                  <clipPath id="a"><path d="M0 0h20v20H0z" /></clipPath>
                </defs>
              </svg>
            </button>
            <button
              class="btn-2"
              data-theme="dark"
              :class="{ active: activeTheme === 'dark' }"
              @click="setTheme('dark'); closeProfile()"
            >
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
                    stroke-width="1.667"
                    d="M18.296 10.797a6.667 6.667 0 1 1-9.092-9.093 8.334 8.334 0 1 0 9.092 9.093"
                  />
                </g>
                <defs>
                  <clipPath id="a"><path d="M0 0h20v20H0z" /></clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  justify-content: space-between;
  padding-block: 1.15rem;
  background-color: var(--neutral-0);
  position: relative;
}

.menu {
  border-radius: 8px;
  border: 1px solid var(--neutral-300);
  width: 44px;
  aspect-ratio: 1;
  cursor: pointer;
  margin-right: 1rem;
  align-items: center;
  justify-content: center;
  display: none;
}

.menu svg {
  stroke: var(--neutral-900);
}

.wrapper {
  gap: 1rem;
}

input {
  max-width: 320px;
  width: 100%;
  padding: 10px 1rem 10px 2.5rem;
  border-radius: 8px;
  border: 1px solid var(--neutral-300);
  background-image: url(/images/icon-search.svg);
  background-repeat: no-repeat;
  background-position: left 0.7rem center;
}

.profile img {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%h;
  cursor: pointer;
}

.theme svg,
.theme-btns svg {
  stroke: var(--neutral-900);
}

.theme p {
  color: var(--neutral-800);
  margin-right: 2rem;
  margin-left: 5px;
}

.profile-menu {
  position: absolute;
  top: 100%;
  right: 32px;
  z-index: 5;
}

.theme {
  background-color: var(--neutral-0);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--neutral-100);
}

.theme-btns {
  background-color: var(--neutral-300);
  border-radius: 4px;
  padding: 3px 5px;
  gap: 5px;
}

.theme-btns button.active {
  background-color: var(--neutral-0);
}

@media (max-width: 1024px) {
  .menu {
    display: flex;
  }
}

@media (max-width: 800px) {
  header {
    justify-content: start;
  }

  input {
    max-width: 193px;
  }

  .wrapper {
    margin-left: auto;
    gap: 10px;
  }

  .profile-menu {
  right: 1rem;

}
}
</style>
