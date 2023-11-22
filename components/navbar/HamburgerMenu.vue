<script setup>
const isOpen = ref(false);

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
  <div>
    <UButton @click="isOpen = true" color="black" variant="solid" trailing-icon="i-heroicons-bars-3-solid" />

    <USlideover v-model="isOpen" prevent-close>
      <UCard class="flex flex-col" >
        <template #header>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
        </template>
        <div class="flex-col flex gap-8 m-10">
          <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start'}">
            <UButton variant="solid" color="indigo" label="Discovery"
                     trailing-icon="i-heroicons-chevron-down-20-solid"/>
          </UDropdown>
          <NuxtLink class="text-white px-3 py-2 rounded-md text-base" to="#">About</NuxtLink>
          <NuxtLink class="text-white px-3 py-2 rounded-md text-base" to="#">Contact Us</NuxtLink>
        </div>


      </UCard>
    </USlideover>
  </div>
</template>

