<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  is_visible: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: true,
  },
})
</script>

<template>
  <div class="w-1/2 mx-auto my-3" :class="props.is_visible ? 'inline md:hidden': 'hidden md:inline'">
    <button class="bg-footerColor-green px-10 py-3 rounded">{{ props.name }}</button>
  </div>
</template>

<style scoped>

</style>