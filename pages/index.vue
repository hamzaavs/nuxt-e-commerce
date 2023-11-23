<script setup>
import Navbar from "/components/navbar/Navbar.vue";
import Footer from "/components/Footer.vue";
import ProductCard from "/components/ProductCard.vue";


</script>

<template>
  <div class="flex flex-col w-screen h-screen justify-between">
    <div>
      <Navbar/>
      <div class="bg-white">
        <ProductCard />
      </div>
    </div>
    <Footer/>
  </div>
</template>
