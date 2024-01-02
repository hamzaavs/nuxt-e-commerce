<script setup lang="ts">
import ProductCard from "/components/ProductCard.vue";
import ContainerLayout from "~/layout/ContainerLayout.vue";
const productCardValue = [
  {
    color: "1",
    name: "Spiced Mint",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "2",
    name: "Sweet Strawberry",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "3",
    name: "Cool Blueberries",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "4",
    name: "Juicy Lemon",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "5",
    name: "Product Name",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "6",
    name: "Fragrant Cinnamon",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "7",
    name: "Summer Cherries",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  },
  {
    color: "8",
    name: "Clean Lavander",
    price: "9,99$",
    comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore doloribus harum hic iure neque nobis perferendis reprehenderit? Eos, facere, odio?"
  }
];

</script>

<template>
  <ContainerLayout title="Products" description="Order it for you or for your beloved ones" >
    <div class="w-11/12 grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2 gap-4 p-4 m-auto">
      <div v-for="item in productCardValue">
        <ProductCard
          button_label="See More"
          :color="item.color" :comment="item.comment" :name="item.name"
          :price="item.price"
          required
        />
      </div>
    </div>
  </ContainerLayout>
</template>