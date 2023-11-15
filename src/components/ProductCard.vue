<script setup>
import {defineProps} from "vue";

const props = defineProps({
  color: String,
  price: String,
  comment: String,
});
const getImageSrc = (color) => {
  return require(`@/assets/product/product_${color}.png`)
};
</script>


<template>
  <div class="p-4">
    <img :src="getImageSrc(props.color)" alt="Product Image" class="w-full h-48 object-cover mb-4">
    <div>
      <h2 class="text-xl mb-2">{{ props.price }}</h2>
      <p class="text-gray-700">{{ props.comment }}</p>
    </div>
  </div>
</template>


