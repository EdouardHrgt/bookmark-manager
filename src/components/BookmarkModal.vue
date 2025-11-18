<script setup>
import { ref, inject, computed, watch } from 'vue'
import { urlValidation } from '@/composables/useFormValidation'
import { getBmarks, addBmark, editBmark } from '@/composables/useBookmarks'
import useResetObject from '@/composables/useResetObject'

const { addOrEdit, toggleAddOrEdit } = inject('addOrEdit')
const { datas } = inject('datas')
const editedBmk = inject('editedBmk')
const { stopEditingBookmark } = inject('editing')
const { setAlertBox } = inject('alertBox')

const isEdit = ref(false)
const textIndex = computed(() => (isEdit.value ? 1 : 0))
const currentBookmark = ref(null)

const text = ref({
   title: ['Add a Bookmark', 'Edit Bookmark'],
   info: [
      'Save a link with details to keep your collection organized. We extract the favicon automatically from the URL.',
      'Update your saved link details — change the title, description, URL, or tags anytime.',
   ],
   btn: ['Add Bookmark', 'Save Bookmark'],
})

const form = ref({
   title: '',
   description: '',
   url: '',
   tags: '',
})

const errors = ref({
   title: false,
   description: false,
   url: false,
   tags: false,
})

const resetForm = () => {
   form.value = useResetObject(form.value, '')
   errors.value = useResetObject(errors.value, false)
}

const resetAll = () => {
   resetForm()
   isEdit.value = false
   currentBookmark.value = null
   editedBmk.value = null
}

const validateForm = () => {
   let isValid = true

   if (!form.value.title.trim() || form.value.title.length > 25) {
      errors.value.title = true
      isValid = false
   } else {
      errors.value.title = false
   }

   if (form.value.description.trim().length < 10) {
      errors.value.description = true
      isValid = false
   } else {
      errors.value.description = false
   }

   if (!urlValidation(form.value.url)) {
      errors.value.url = true
      isValid = false
   } else {
      errors.value.url = false
   }

   if (!form.value.tags.trim()) {
      errors.value.tags = true
      isValid = false
   } else {
      errors.value.tags = false
   }

   return isValid
}

const handleCancel = () => {
   resetAll()
   toggleAddOrEdit()
}

const getNextId = () => {
   if (datas.value.length === 0) return '01'

   const maxId = Math.max(...datas.value.map((b) => parseInt(b.id)))
   return String(maxId + 1).padStart(2, '0')
}

const submitForm = () => {
   if (!validateForm()) {
      return
   }

   const bookmark = {
      id: isEdit.value ? currentBookmark.value.id : getNextId(),
      title: form.value.title.trim(),
      description: form.value.description.trim(),
      url: form.value.url.trim(),
      favicon: isEdit.value ? currentBookmark.value.favicon : '',
      tags: form.value.tags
         .split(',')
         .map((tag) => tag.trim())
         .filter(Boolean),
      createdAt: isEdit.value
         ? currentBookmark.value.createdAt
         : new Date().toISOString(),
      lastVisited: isEdit.value
         ? currentBookmark.value.lastVisited
         : new Date().toISOString(),
      pinned: isEdit.value ? currentBookmark.value.pinned : false,
      visitCount: isEdit.value ? currentBookmark.value.visitCount : 0,
      isArchived: isEdit.value ? currentBookmark.value.isArchived : false,
   }

   if (isEdit.value) {
      editBmark(bookmark, datas)
      stopEditingBookmark()
      setAlertBox(2)
   } else {
      addBmark(bookmark, datas)
      setAlertBox(1)
   }

   resetAll()
   toggleAddOrEdit()
}

watch(
   editedBmk,
   (bookmark) => {
      if (bookmark) {
         isEdit.value = true
         currentBookmark.value = bookmark

         form.value = {
            title: bookmark.title,
            description: bookmark.description,
            url: bookmark.url,
            tags: bookmark.tags.join(', '),
         }
      }
   },
   { immediate: true }
)
</script>

<template>
   <section>
      <div class="title flex">
         <h2 class="tp1">{{ text.title[textIndex] }}</h2>
         <svg
            @click="handleCancel"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
      </div>
      <p class="tp4-medium infos">{{ text.info[textIndex] }}</p>

      <form @submit.prevent="submitForm" novalidate>
         <div class="form-group">
            <label for="title">Title *</label>
            <input
               type="text"
               name="title"
               id="title"
               v-model="form.title"
               :class="{ 'input-error': errors.title }"
            />
            <p class="error tp4-medium" v-if="errors.title">
               Please enter a title smaller than 25 characters
            </p>
         </div>

         <div class="form-group">
            <label for="description">Description *</label>
            <textarea
               name="description"
               id="description"
               v-model="form.description"
               :class="{ 'input-error': errors.description }"
               rows="4"
            ></textarea>
            <p class="error tp4-medium" v-if="errors.description">
               Description must be at least 10 characters
            </p>
         </div>

         <div class="form-group">
            <label for="url">Website URL *</label>
            <input
               type="url"
               name="url"
               id="url"
               v-model="form.url"
               :class="{ 'input-error': errors.url }"
               placeholder="https://example.com"
            />
            <p class="error tp4-medium" v-if="errors.url">Please enter a valid URL</p>
         </div>

         <div class="form-group">
            <label for="tags">Tags *</label>
            <input
               type="text"
               name="tags"
               id="tags"
               v-model="form.tags"
               :class="{ 'input-error': errors.tags }"
               placeholder="e.g design, learning, tools"
            />
            <p class="error tp4-medium" v-if="errors.tags">
               Please enter at least one tag
            </p>
         </div>

         <div class="btn-group flex">
            <button type="button" class="btn btn-secondary" @click="handleCancel">
               <p class="tp3">Cancel</p>
            </button>
            <button type="submit" class="btn btn-primary">
               <p class="tp3">{{ text.btn[textIndex] }}</p>
            </button>
         </div>
      </form>
   </section>
</template>

<style scoped>
.input-error {
   border-color: var(--red-600);
}

section {
   max-width: 570px;
   width: 100%;
   border-radius: 16px;
   background-color: var(--neutral-0);
   padding: 2rem 1.5rem;
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 99;
}

section > * {
   width: 100%;
}

.title {
   justify-content: space-between;
}

.infos {
   margin-block: 1rem;
   color: var(--neutral-800);
}

svg {
   stroke: var(--neutral-900);
}

.title svg {
   border: 1px solid var(--neutral-100);
   border-radius: 8px;
   cursor: pointer;
   padding: 3px;
}

h2 {
   color: var(--neutral-900);
}

.form-group {
   margin-block: 2rem;
   position: relative;
}

form .form-group:first-child {
   margin-top: 0;
}

label {
   color: var(--neutral-900);
   display: block;
   margin-bottom: 2px;
}

input,
textarea {
   border-radius: 8px;
   border: 1px solid var(--neutral-800);
   padding: 12px 1rem;
   display: block;
   width: 100%;
}

.btn-group {
   justify-content: flex-end;
   gap: 1.5rem;
}

.btn-group button {
   padding: 1rem 12px;
   transition: all 0.2s ease-in;
}

.btn-group button:first-child {
   background-color: var(--neutral-0);
   border: 1px solid var(--neutral-100);
}

.btn-group button:first-child:hover {
   background-color: var(--teal-700);
   border: 1px solid var(--neutral-300);
}

.btn-group button:first-child:hover p {
   color: var(--neutral-0);
}

.btn-group button:first-child p {
   color: var(--neutral-900);
   padding-inline: 1rem;
}

.btn-group button {
   background-color: var(--teal-700);
   border: 1px solid var(--teal-700);
}

.btn-group button:hover {
   background-color: var(--neutral-0);
}

.btn-group button:hover p {
   color: var(--neutral-900);
}

.btn-group button p {
   color: var(--base-white);
}

.error {
   color: var(--red-600);
   position: absolute;
}

@media (max-width: 1024px) {
}

@media (max-width: 800px) {
   section {
      max-width: calc(100% - 1.5rem);
      width: 100%;
      padding: 2rem 1rem;
      position: absolute;
   }

   .btn-group {
      justify-content: space-between;
      gap: 1rem;
   }

   .btn-group button {
      width: 100%;
   }
}
</style>
