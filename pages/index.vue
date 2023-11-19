<script setup>
import Navbar from "/components/navbar/Navbar.vue";
import Footer from "/components/Footer.vue";
import ProductCard from "/components/ProductCard.vue";
</script>

<template>


    <div class="flex flex-col w-screen h-screen justify-between">
      <div>
        <Navbar />
        <ProductCard comment="lorem ipsum da itsum" price="9.99"/>
      </div>

      <Footer/>
    </div>
</template>
