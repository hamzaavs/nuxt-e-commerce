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
})
</script>

<template>
  <div class="my-5">
    <h1 class="text-center text-black font-medium text-5xl">{{ props.title }}</h1>
    <p class="text-center text-black italic pt-20">{{ props.description }}</p>
    <slot></slot>
  </div>
</template>
