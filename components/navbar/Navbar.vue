<script setup>
import { ref } from "vue";
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
        <div class="flex flex-row-reverse gap-10 pl-auto">
          <Icon size="2rem" name="ic:baseline-shopping-cart" class="text-black"/>
          <Icon size="2rem" name="material-symbols:person-2-rounded" class="text-black"/>
        </div>


    </div>
    <div class="md:hidden">
      <HamburgerMenu />
    </div>
  </nav>
</template>

