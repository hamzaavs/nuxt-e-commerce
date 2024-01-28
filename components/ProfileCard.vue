<script setup lang="ts">

const props = defineProps({
  stars_img: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="bg-white w-3/4 h-4/5 px-10 mx-auto my-10 md:w-full">
    <div class="w-1/2 mx-auto pt-10">
      <NuxtImg :src="'/comment/profile_foto/profile-' + props.stars_img + '.svg'" alt="stars" />
      <NuxtImg :src="'/comment/stars/star-' + props.profile_img + '.svg'" alt="stars" />
    </div>
    <div class="pt-5">
      <p class="text-black text-center text-lg">{{props.comment}}
        <p class="text-center text-gray-500 text-lg pb-5">{{props.name}}</p>
      </p>
    </div>
  </div>
</template>
