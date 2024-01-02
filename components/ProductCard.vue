<script setup lang="ts">
import MazBtn from "maz-ui/components/MazBtn"

const props = defineProps({
  button_label: {
    type: String,
    required: true
  },
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
    default: "9,99$",
    required: true
  }
})
</script>

<template>
  <div>
    <div class="w-3/4 p-4 m-auto shadow-lg rounded-2xl">
      <div class="bg-gray-100 w-full top-0 p-0 max-w-screen m-auto">
        <NuxtImg :src="'/product-' + props.color + '.svg'" height="300"/>
      </div>
      <div>
        <h2 class="text-black font-bold pb-3">{{ props.name }}</h2>
        <p class="text-gray-700">{{ props.comment }}</p>
        <p class="text-primary text-right mb-2">{{ props.price }}</p>
      </div>
    </div>
  </div>
  <div class="w-1/4 visible m-auto md:invisible">
    <MazBtn color="success" v-if="props.required">{{props.button_label}}</MazBtn>
  </div>
</template>
