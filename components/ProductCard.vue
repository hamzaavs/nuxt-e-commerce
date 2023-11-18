<script setup>
import { defineProps } from "vue";
import image from "/assets/img/logo.png";
const props = defineProps({
  color: String,
  price: String,
  comment: String,
});

</script>


<template>
  <div class="p-4">
    <div>
      <NuxtImg :src="image" />
      <h2 class="text-xl mb-2">{{ props.price }}</h2>
      <p class="text-gray-700">{{ props.comment }}</p>
    </div>
  </div>
</template>


