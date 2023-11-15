<script setup>
import Navbar from "/src/components/Navbar.vue";
import Footer from "/src/components/Footer.vue";
import ProductCard from "/src/components/ProductCard.vue";
</script>

<template>

  <div class="flex">
    <div class="flex flex-col w-screen h-screen justify-between">
      <div>
        <Navbar/>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard comment="lorem ipsum da itsum" price="9.99"/>
      </div>

      <Footer/>
    </div>
  </div>

</template>
