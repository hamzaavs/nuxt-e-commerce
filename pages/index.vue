<script setup>
import Navbar from "/components/navbar/Navbar.vue";
import Footer from "/components/Footer.vue";
import ProductInfo from "/components/ProductInfo.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen bg-white justify-between">
    <div>
      <Navbar/>
      <div class="bg-white">
        <NaturalCandle />
        <ProductInfo />
        <CleanSoywax />
      </div>
    </div>
    <Footer/>
  </div>
</template>
