<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title_class: {
    type: String,
    required: true,
    },
  comment_class: {
    type: String,
    required: true,
  },

})
</script>

<template>
  <div class="my-5 px-10">
    <div>
      <h1 :class="props.title_class" class="text-black">{{ props.title }}</h1>
      <p :class="props.comment_class">{{ props.description }}</p>
    </div>
    <slot></slot>
  </div>

</template>
