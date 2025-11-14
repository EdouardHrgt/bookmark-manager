<script setup>
import { inject, computed } from "vue";

const { datas } = inject("datas");
const { selectedTag, setSelectedTag } = inject("tags");
const { archived } = inject("archived");
const { mobileMenu, toggleMobileMenu } = inject("menu");

const tags = computed(() => {
  if (!datas.value) return [];

  const filteredData = archived.value
    ? datas.value.filter((item) => item.isArchived)
    : datas.value.filter((item) => !item.isArchived);

  const tagCount = {};

  filteredData.forEach((item) => {
    item.tags?.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });

  return Object.entries(tagCount)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);
});

const handleTagSelect = (tagLabel) => {
  setSelectedTag(tagLabel);

  if (mobileMenu.value === true) {
    setTimeout(() => {
      toggleMobileMenu(false);
    }, 1300);
  }
};

defineProps({
  label: String,
  value: Number,
});
</script>

<template>
  <div class="tag flex" v-for="(tag, i) in tags" :key="i">
    <input
      type="checkbox"
      :id="tag.label"
      :name="tag.label"
      :checked="selectedTag === tag.label"
      @change="handleTagSelect(tag.label)"
      class="checkbox-input"
    />
    <label class="tp3 checkbox-label" :for="tag.label">
      <span class="check"></span>
      {{ tag.label }}
    </label>
    <div class="value flex">
      <p class="tp5">{{ tag.value }}</p>
    </div>
  </div>
</template>

<style scoped>
.tag {
  padding-block: 9px;
}

input {
  aspect-ratio: 1/1;
  width: 16px;
}

.value {
  background-color: var(--neutral-100);
  border: 1px solid var(--neutral-300);
  border-radius: 50%;
  justify-content: center;
  margin-left: auto;
  width: 24px;
  height: 24px;
}

.value p,
label {
  color: var(--neutral-800);
}

label {
  margin-left: 12px;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
}

.check {
  width: 16px;
  height: 16px;
  aspect-ratio: 1/1;
  border-radius: 4px;
  background: transparent;
  border: 1px solid var(--neutral-400);
  transition: background-color 0.3s ease-in, border-color 0.3s ease-in;
  flex-shrink: 0;
  margin-left: -7px;
}

.checkbox-input:checked + .checkbox-label .check {
  background-color: var(--neutral-500);
  border-color: var(--neutral-500);
}

.checkbox-label:hover .check {
  border-color: var(--neutral-500);
}

.checkbox-input:checked + .checkbox-label .check::after {
  content: "";
  display: block;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) translate(-50%, -50%);
  position: relative;
  top: 6.5px;
  left: 3.35px;
}
</style>
