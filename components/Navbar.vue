<script setup>
import CarbonShoppingCart from "@/public/assets/icon/CarbonShoppingCart.vue";
import Person from "@/public/assets/icon/MaterialSymbolsPersonOutlineRounded.vue";

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
        <NuxtImg src="@/assets/img/logo.png" width="200" height="200"/>
      </div>
      <div>
        <UDropdown :items="items" mode="hover" popper="{ placement: 'bottom-start' }">
          <UButton variant="solid" color="black" label="Discovery"  trailing-icon="i-heroicons-chevron-down-20-solid"/>
        </UDropdown>
        <NuxtLink class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">About</NuxtLink>
        <NuxtLink class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">Contact Us</NuxtLink>
      </div>
      <div class="grid grid-cols-3 pl-43">
        <CarbonShoppingCart/>
        <Person/>
      </div>
    </div>

    <!-- Mobil Hi-Fi -->
    <div class="lg:hidden grid-cols-3 grid">
      <UDropdown :items="items" mode="hover" popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Discovery" trailing-icon="i-heroicons-chevron-down-20-solid"/>
      </UDropdown>
      <router-link to="#"> About</router-link>
      <router-link to="#"> Contact Us</router-link>

      <NuxtImg alt="" src="@/assets/image/logo.png" />
      <div class="grid grid-cols-3">
        <CarbonShoppingCart/>
        <Person/>
      </div>
    </div>
  </nav>
</template>

