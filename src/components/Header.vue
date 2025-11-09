<script setup>
import { defineProps, ref } from "vue";
import Button from "./Button.vue";

defineProps({
    bookmarks: Array,
});
</script>

<template>
    <header class="flex mx-width">
        <div class="menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
                    d="M2.5 10h15m-15-5h15m-15 10h15" />
            </svg>
        </div>
        <input type="text" id="search" placeholder="Search by title..." />

        <div class="flex wrapper">
            <Button label="+ Add Bookmark" color="var(--neutral-0)" background="var(--teal-700)" />
            <div class="profile">
                <img src="../../public/images/image-avatar.webp" alt="profile picture" />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    justify-content: space-between;
    padding-block: 1.15rem;
    background-color: var(--neutral-0);
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
    background-image: url(../../public/images/icon-search.svg);
    background-repeat: no-repeat;
    background-position: left 0.7rem center;
}

.profile img {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 50%h;
}

@media (max-width: 800px) {
    .menu {
        display: flex;
    }

    header {
        justify-content: start;
    }

    input {
        max-width: 193px;
    }

    .wrapper {
        margin-left: auto;
    }
}
</style>
