<script setup lang="ts">
import ProductCard from "/components/ProductCard.vue";
import ContainerLayout from "~/layout/ContainerLayout.vue";
</script>

<template>
  <ContainerLayout title="Products" description="Order it for you or for your beloved ones">
    <ProductCard />
  </ContainerLayout>
</template>