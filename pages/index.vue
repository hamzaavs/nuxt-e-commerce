<script setup>

import ProductInfo from "/components/ProductInfo.vue";
import NaturalCandle from "/components/NaturalCandle.vue";
import CleanSoywax from "../components/CleanSoywax.vue";
import Testimonials from "~/components/Testimonials.vue";
import WebSiteLayout from "~/layout/WebSiteLayout.vue";
</script>

<template>
  <WebSiteLayout>
    <NaturalCandle/>
    <ProductInfo/>
    <CleanSoywax/>
    <Testimonials/>
  </WebSiteLayout>
</template>
