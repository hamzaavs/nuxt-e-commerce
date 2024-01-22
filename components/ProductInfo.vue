<script setup lang="ts">
import ProductCard from "/components/ProductCard.vue";
import ContainerLayout from "~/layout/ContainerLayout.vue";
import { ProductCardValue } from "~/ulits/productCardValue";
const productCardValue = ProductCardValue();
</script>

<template>
  <ContainerLayout
    title="Products"
    description="Order it for you or for your beloved ones"
    title_class="text-center text-4xl font-bold font-sans text-black"
    comment_class="text-center text-black italic py-6 ">
    <div class="w-11/12 grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-4 p-4 m-auto">
      <div v-for="item in productCardValue">
        <ProductCard
          :color="item.color"
          :comment="item.comment"
          :name="item.name"
          :price="item.price"
          required
        />
      </div>
      <Button name="See More" :is_visible="true" />
    </div>
  </ContainerLayout>
</template>