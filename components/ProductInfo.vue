<script setup lang="ts">
import ProductCard from "/components/ProductCard.vue";
import ContainerLayout from "~/layout/ContainerLayout.vue";
import { ProductCardValue } from "~/ulits/productCardValue";

const productCardValue = ProductCardValue();

const props = defineProps({
  show_all: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <ContainerLayout
    :title="show_all ? 'Products' : 'Popular'"
    :description="show_all? 'Order it for you or for your beloved ones' : 'Our top selling product that you may like'"
    title_class="text-center text-4xl font-bold font-sans text-black"
    comment_class="text-center text-black italic py-6"
    class="py-20">
    <div class="w-11/12 grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-4 p-4 m-auto" v-if="show_all">
        <ProductCard
          v-for="item in productCardValue"
          :color="item.color"
          :comment="item.comment"
          :name="item.name"
          :price="item.price"
          required
        />
      <Button name="See More" :is_visible="true" />
    </div>
    <div v-else class="w-11/12 grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-4 p-4 m-auto">
      <ProductCard
        v-for="item in productCardValue.slice(0, 4)"
        :color="item.color"
        :comment="item.comment"
        :name="item.name"
        :price="item.price"
        required
      />
    </div>
  </ContainerLayout>
</template>
