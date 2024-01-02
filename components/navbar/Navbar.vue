<script setup>
import {ref} from "vue";
import HamburgerMenu from "~/components/navbar/HamburgerMenu.vue";

const showmenu = ref(false);
const toggleMenu = () => {
  showmenu.value = !showmenu.value;
}

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
  <nav class="sticky bg-white top-0 border-b-2 border-b-gray-200 h-20 p-4 max-w-screen z-10 shadow-md grid grid-cols-3">
    <div class="md:hidden">
      <HamburgerMenu/>
    </div>
    <div class="relative md:left-36 left-0">
      <NuxtImg src="/logo.svg" height="150" width="150"/>
    </div>
    <div class="hidden md:block">
      <UDropdown :items="items" mode="hover" popper="{ placement: 'bottom-start' }">
        <UButton color="black" label="Discovery" trailing-icon="i-heroicons-chevron-down-20-solid" variant="solid"/>
      </UDropdown>
      <NuxtLink class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">About</NuxtLink>
      <NuxtLink class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">Contact Us</NuxtLink>
    </div>
    <div class="flex flex-row-reverse gap-2 ml-auto max-w-xl md:mx-auto md:gap-10 relative right-10">
      <Icon class="text-black" name="ic:baseline-shopping-cart" size="2rem"/>
      <Icon class="text-black" name="material-symbols:person-2-rounded" size="2rem"/>
    </div>
  </nav>
</template>

