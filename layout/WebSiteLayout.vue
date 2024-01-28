<script setup lang="ts">

import Testimonials from "~/components/Testimonials.vue";
import CleanSoywax from "~/components/CleanSoywax.vue";
</script>

<template>
  <div class="flex flex-col max-w-screen h-screen bg-white justify-between">
    <div>
      <Navbar/>
      <div class="bg-white">
        <slot></slot>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
