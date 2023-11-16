<script setup>
import {ref} from 'vue';
import CarbonShoppingCart from "@/public/assets/icon/CarbonShoppingCart.vue";
import Person from "@/public/assets/icon/MaterialSymbolsPersonOutlineRounded.vue";
import Menu from "@/public/assets/icon/PajamasHamburger.vue"

const items = [
  [{
    label: 'New season',
    click: () => {
      console.log('New season')
    }
  }], [{
    label: 'Most searched',
    click: () => {
      console.log('Most searched')
    }
  }], [{
    label: 'Most selled',
    click: () => {
      console.log('Most selled')
    }
  }]
]
</script>

<template>
  <nav class="fixed bg-white top-0 border-b-2 border-b-gray-200 h-20 p-4 w-screen z-10 shadow-md">

    <!-- Desktop Hi-Fi -->
    <div class="lg:grid lg:grid-cols-3 lg:pl-48 hidden">
      <div>
        <img alt="" src="@/public/assets/image/logo.png">
      </div>
      <div class="grid grid-cols-3 ">

          <UDropdown :items="items" popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Discovery" trailing-icon="i-heroicons-chevron-down-20-solid"/>
          </UDropdown>
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

