<script setup></script>

<template>
    <aside>
        <p class="title">
            <strong class="tp1">Archive bookmark</strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M15 5 5 15M5 5l10 10" />
            </svg>
        </p>
        <p class="tp4-medium">Are you sure you want to archive this bookmark?</p>
        <div class="flex">
            <button>
                <p class="tp3">Cancel</p>
            </button>
            <button>
                <p class="tp3">Archive</p>
            </button>
        </div>
    </aside>
</template>

<style scoped>
aside {
    background-color: var(--neutral-0);
    border-radius: 12px;
    padding: 1.5rem;
    max-width: 450px;
}

.title {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
}

.title svg {
    stroke: car(var(--neutral-900));
    cursor: pointer;
}

div {
    gap: 1rem;
    justify-content: flex-end;
}

div button:first-child {
    background-color: var(--neutral-0);
    border: 1px solid var(--neutral-100);
}

div button:first-child p {
    color: var(--neutral-900);
}

button {
    padding: 1rem;
    background-color: var(--teal-700);
    border: 1px solid var(--teal-700);
}

button p {
    color: var(--neutral-0);
}

@media (max-width: 800px) {
    aside {
        padding: 11rem;
    }

    div {
        justify-content: center;
    }

    button {
        width: 100%;
    }
}
</style>
