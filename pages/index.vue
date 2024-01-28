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
    <ProductInfo :show_all="true"/>
    <CleanSoywax/>
    <Testimonials/>
    <ProductInfo :show_all="false"/>
  </WebSiteLayout>
</template>
