<script setup lang="ts">
import {ProfileCardValues} from "~/ulits/profileCardValues";
import ProfileCard from "~/components/ProfileCard.vue";

const profileCardValues = ProfileCardValues();

</script>

<template>
  <Swiper
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="item in profileCardValues" :key="item">
      <div class="px-10 grid grid-cols-1">
        <ProfileCard
          :comment= "item.description"
          :name= "item.name"
          :profile_img= "item.profile_foto"
          :stars_img="item.star_foto" />
      </div>
    </SwiperSlide>
  </Swiper>

</template>

<style scoped>

</style>
