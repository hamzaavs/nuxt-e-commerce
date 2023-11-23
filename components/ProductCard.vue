<script setup>
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
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
    <div v-for="item in productCardValue" class="w-72 p-4 shadow-lg rounded-2xl justify-center">
      <div class="bg-gray-50 w-full">
        <NuxtImg :src="'/product-' + item.color + '.svg'" height="300" width="300"/>
      </div>
      <div>
        <h2 class="text-black font-bold pb-3">{{ item.name }}</h2>
        <p class="text-gray-700">{{ item.comment }}</p>
        <p class="text-primary text-right mb-2">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>