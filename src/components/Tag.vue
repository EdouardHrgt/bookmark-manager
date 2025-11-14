<script setup>
import { inject, computed } from 'vue'

const { datas } = inject('datas')
const { selectedTag, setSelectedTag } = inject('tags')

const tags = computed(() => {
  if (!datas.value) return [];

  const tagCount = {};

  datas.value.forEach(item => {
    item.tags?.forEach(tag => {
      tagCount[tag] = (tagCount[tag] || 0) + 1
    })
  })

  return Object.entries(tagCount)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)
});

defineProps({
  label: String,
  value: Number,
})

</script>

<template>
  <div class="tag flex" v-for="(tag, i) in tags" :key="i">
    <input type="checkbox" :id="tag.label" :name="tag.label" :checked="selectedTag === tag.label"
      @change="setSelectedTag(tag.label)" />
    <label class="tp3" :for="tag.label">{{ tag.label }}</label>
    <div class="value flex">
      <p class="tp5">{{ tag.value }}</p>
    </div>
  </div>
</template>

<style scoped>
.tag {
  padding-block: 9.7px;
  padding-inline: 8px;
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
</style>
