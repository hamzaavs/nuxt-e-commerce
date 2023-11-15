<script setup>
import {ref} from 'vue';
import CarbonShoppingCart from "@/public/assets/icon/CarbonShoppingCart.vue";
import Person from "@/public/assets/icon/MaterialSymbolsPersonOutlineRounded.vue";
import Menu from "@/public/assets/icon/PajamasHamburger.vue"

const showDropdown = ref(false);
const showmenu = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
}

const toggleMenu = () => {
  showmenu.value = !showmenu.value;
}
</script>

<template>
  <nav class="fixed bg-white top-0 border-b-2 border-b-gray-200 h-20 p-4 w-screen z-10 shadow-md">

    <!-- Desktop Hi-Fi -->
    <div class="lg:grid lg:grid-cols-3 lg:pl-48 hidden">
      <div>
        <img alt="" src="@/public/image/logo.png">
      </div>
      <div class="grid grid-cols-3 ">
        <div class="relative" @click="toggleDropdown">
          <button class="text-black px-3 py-2 rounded-md text-base font-medium inline">
            <span class="mr-2">Discovery</span>
            <svg class="w-4 h-4 text-right" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div v-if="showDropdown" class="absolute mt-2 w-48 bg-white rounded-md overflow-hidden shadow-lg z-10"
               @click="showDropdown = false">
            <router-link class="block px-4 py-2 text-base hover:bg-gray-200" to="#">New season</router-link>
            <router-link class="block px-4 py-2 text-base hover:bg-gray-200" to="#">Most searched</router-link>
            <router-link class="block px-4 py-2 text-base hover:bg-gray-200" to="#">most selled</router-link>
          </div>
        </div>
        <router-link class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">About</router-link>
        <router-link class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">Contact Us</router-link>
      </div>
      <div class="grid grid-cols-2 pl-43">
        <CarbonShoppingCart/>
        <Person/>
      </div>
    </div>

    <!-- Mobil Hi-Fi -->
    <div class="lg:hidden grid-cols-3 grid">
      <Menu @click="toggleMenu"/>
      <div v-if="showmenu"
           class="grid absolute mt-2 w-48 bg-white rounded-md overflow-hidden shadow-lg z-10 grid-span-3"
           @click="showmenu = false">
        <p class="pb-0" @click="toggleDropdown"> Discovery </p>
        <div v-if="showDropdown" class="grid-rows-3 grid gap-2 my-2 mx-6">
          <router-link class=" text-base" to="#">New season</router-link>
          <router-link class=" text-base" to="#">Most searched</router-link>
          <router-link class=" text-base" to="#">most selled</router-link>
        </div>
        <router-link to="#"> About</router-link>
        <router-link to="#"> Contact Us</router-link>
      </div>
      <img alt="" src="@/assets/image/logo.png">
      <div class="grid grid-cols-3">
          <CarbonShoppingCart/>
          <Person/>
        </div>
    </div>
  </nav>
</template>

