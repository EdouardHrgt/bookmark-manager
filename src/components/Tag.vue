<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  label: String,
  value: Number,
});

// Emmit the state of the checkbox
</script>

<template>
  <div class="tag flex">
    <input type="checkbox" name="tag" />
    <label class="tp3" for="tag">AI</label>
    <div class="value flex"><p class="tp5">8</p></div>
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
