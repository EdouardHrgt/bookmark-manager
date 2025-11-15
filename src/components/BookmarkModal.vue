<script setup>
import { ref, inject, computed } from 'vue'
import { urlValidation } from '@/composables/useFormValidation'
import { getBmarks, addBmark, editBmark } from '@/composables/useBookmarks'

const { addOrEdit, toggleAddOrEdit } = inject('addOrEdit')

const form = ref([
   { title: '', err: false },
   { description: '', err: false },
   { url: '', err: false },
   { tags: [], err: false },
])

const text = ref({
   title: ['Add a Bookmark', 'Edit Bookmark'],
   info: [
      'Save a link with details to keep your collection organized. We extract the favicon automatically from the URL.',
      'Update your saved link details — change the title, description, URL, or tags anytime.',
   ],
   btn: ['Add Bookmark', 'Save Bookmark'],
})

const isEdit = ref(false)
const test = ref(false)

const textIndex = computed(() => (isEdit.value ? 1 : 0))

const handleCancel = () => {
   form.value = [
      { title: '', err: false },
      { description: '', err: false },
      { url: '', err: false },
      { tags: [], err: false },
   ]
}

const handleError = () => {
   if (form[0].title.length === 0) {
      form[0].err = true
   } else {
      form[0].err = false
   }
   if (form[1].description.length <= 10) {
      form[1].err = true
   } else {
      form[1].err = false
   }
   if (urlValidation(form[2].url) === false) {
      form[2].err = true
   } else {
      form[2].err = false
   }
   if (form[3].title.length === 0) {
      form[3].err = true
   } else {
      form[3].err = false
   }
   // si tout est ok on appelle submitForm()
}
const submitForm = () => {
   // logique pour soumettre le formulaire
}
</script>

<template>
   <section>
      <div class="title flex">
         <h2 class="tp1">{{ text.title[textIndex] }}</h2>
         <svg
            @click="toggleAddOrEdit()"
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
      <form @submit.prevent="submitForm" novalidate="true">
         <div class="form-group">
            <label for="title">Title *</label>
            <input type="text" name="title" id="title" v-model="form[0].title" />
            <p class="error tp4-medium" v-if="test">enter a title</p>
         </div>
         <div class="form-group">
            <label for="description">Description *</label>
            <input
               type="textarea"
               name="tdescription"
               id="description"
               v-model="form[1].description"
            />
            <p class="error tp4-medium" v-if="test">enter a description</p>
         </div>
         <div class="form-group">
            <label for="url">Website URL *</label>
            <input type="text" name="url" id="url" v-model="form[2].url" />
            <p class="error tp4-medium" v-if="test">enter a valid url</p>
         </div>
         <div class="form-group">
            <label for="tags">Tags *</label>
            <input
               type="text"
               name="tags"
               id="tags"
               v-model="form[3].tags"
               placeholder="e.g design, learning, tools"
            />
         </div>
         <div class="btn-group flex">
            <button type="button" class="btn" @click="handleCancel">
               <p class="tp3">Cancel</p>
            </button>
            <button type="submit" class="btn" @click="handleError">
               <p class="tp3">{{ text.btn[textIndex] }}</p>
            </button>
         </div>
      </form>
   </section>
</template>

<style scoped>
section {
   max-width: 570px;
   width: 100%;
   border-radius: 16px;
   background-color: var(--neutral-0);
   padding: 2rem 1.5rem;
   position: absolute;
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

input {
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
   color: var(--neutral-0);
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
