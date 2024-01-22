<script lang="ts" setup>
import ContainerLayout from "~/layout/ContainerLayout.vue";
import {soyWaxValue} from "~/ulits/soyWaxValues";

const soyWaxValues = soyWaxValue();
</script>

<template>
  <div class="bg-gray-100 grid grid-cols-1 md:grid-cols-2 gap-16 pt-32 mt-20">
    <div class="w-11/12 md:w-3/5 mx-auto py-0 md:py-10">
      <div>
        <h1 class="text-4xl text-center text-black font-normal md:text-start md:text-5xl md:font-900">
          Clean and
        </h1>
        <h1 class="text-4xl text-center text-black font-normal md:text-start md:text-5xl md:font-900">
          fragrant soy wax
        </h1>
        <p class="text-footerColor-green text-base text-center py-6 md:text-start">
          Made for your home and for your wellness
        </p>
      </div>
      <NuxtImg class="inline md:hidden" src="/image.svg" width="595"/>
      <div class="py-5 md:py-12">
        <p v-for="item in soyWaxValues" class="text-black py-1 text-base">
          <Icon name="teenyicons:tick-circle-outline"/>
          <strong class="pl-3">{{ item.name }}</strong>
          {{ item.description }}
        </p>
      </div>
      <div class="mx-auto h-52 w-52">
        <Button :is_visible="true" name="See More"/>
        <Button :is_visible="false" name="Learn More"/>
      </div>
    </div>
    <NuxtImg class="hidden md:inline" src="/image.svg" width="540"/>
  </div>
</template>
