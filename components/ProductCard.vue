<script setup>
import { defineProps } from "vue";
const props = defineProps({
  color: String,
  price: String,
  comment: String,
});

</script>


<template>
  <div class="p-4">

    <div>
      <h2 class="text-xl mb-2">{{ props.price }}</h2>
      <p class="text-gray-700">{{ props.comment }}</p>
    </div>
  </div>
</template>


