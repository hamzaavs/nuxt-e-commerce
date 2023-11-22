<script setup>
import {defineProps} from "vue";

const props = defineProps({
  name: String,
  color: String,
  price: String,
  comment: String,
});
const imageSrc = computed(() => `/public/product_${props.color}.png`);

</script>


<template>
  <div class="w-60 p-4">
    <NuxtImg src="imageSrc()"/>
    <div>
      <h2 class="text-black font-bold text-center text-2xl pb-3">{{ props.name }}</h2>
      <p class="text-gray-700">{{ props.comment }}</p>
      <p class="text-primary text-right text-xl mb-2">{{ props.price }}</p>
    </div>
  </div>
</template>