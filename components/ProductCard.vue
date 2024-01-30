<script setup lang="ts">
const props = defineProps({
  required: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: "1",
    required: true
  },
  comment: {
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?",
    required: true
  },
  name: {
    type: String,
    default: "Product Name",
    required: true
  },
  price: {
    type: String,
    required: true,
    default: "9,99$"
  }
})
</script>

<template>
  <div>
    <div class="w-3/4 p-4 m-auto shadow-lg rounded-2xl">
      <div class="bg-gray-100/50 w-full top-0 p-0 max-w-screen m-auto">
        <NuxtImg :src="'/product-' + props.color + '.svg'" height="300"/>
      </div>
      <div>
        <h2 class="text-black font-bold pb-3">{{ props.name }}</h2>
        <p class="text-gray-700">{{ props.comment }}</p>
        <p class=" text-green text-right mb-2">{{ props.price }}</p>
      </div>
    </div>
  </div>
</template>
