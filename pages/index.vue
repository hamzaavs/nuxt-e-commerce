<script setup>
import Navbar from "/components/navbar/Navbar.vue";
import Footer from "/components/Footer.vue";
import ProductCard from "/components/ProductCard.vue";
</script>

<template>
  <div class="flex flex-col w-screen h-screen justify-between">
    <div>
      <Navbar/>
      <div>
        <ProductCard
          name="Brown Candle"
          comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
          price="9,99$"
        />
      </div>
    </div>
    <Footer/>
  </div>
</template>
