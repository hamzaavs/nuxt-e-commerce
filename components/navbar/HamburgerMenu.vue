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
  <UPopover id="hamburger-button">
    <UButton id="hamburger-menu" color="white" variant="link" trailing-icon="i-heroicons-bars-3-solid" />
    <template #popover>
      <UDropdown :items="items" mode="hover" popper="{ placement: 'bottom-start' }">
        <UButton variant="solid" color="black" label="Discovery"  trailing-icon="i-heroicons-chevron-down-20-solid"/>
      </UDropdown>
      <div class="flex flex-row-reverse gap-10 pl-auto">
        <Icon size="2rem" name="ic:baseline-shopping-cart" class="text-black"/>
        <Icon size="2rem" name="material-symbols:person-2-rounded" class="text-black"/>
      </div>
    </template>
  </UPopover>
</template>