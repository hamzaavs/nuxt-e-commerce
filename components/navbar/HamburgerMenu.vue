<script setup lang="ts">
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
  <UPopover >
    <UButton color="black" trailing-icon="i-heroicons-bars-3-solid" />
    <template #panel>
      <div class="flex flex-col bg-white">
        <UDropdown :items="items" mode="hover" :popper="{ placement: 'right-start'}">
          <UButton variant="solid" color="black" label="Discovery"  trailing-icon="i-heroicons-chevron-right-20-solid"/>
        </UDropdown>
        <NuxtLink class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">About</NuxtLink>
        <NuxtLink class="text-black px-3 py-2 rounded-md text-base font-medium" to="#">Contact Us</NuxtLink>
      </div>
    </template>
  </UPopover>
</template>