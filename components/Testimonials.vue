<script lang="ts" setup>
import ContainerLayout from "~/layout/ContainerLayout.vue";
import {Profile} from "~/ulits/values/card/profile";
import SliderMobile from "~/components/SliderMobile.vue";
import ProfileCard from "~/components/ProfileCard.vue";

const values = Profile();
</script>

<template>
  <ContainerLayout
    class="bg-green/20 max-w-screen py-16"
    comment_class="text-center text-gray-500 py-6"
    description="Some quotes from our happy customers"
    title="Testimonials"
    title_class="text-black text-center text-4xl text-center"
  >
    <div class="inline md:hidden">
      <SliderMobile :items="Profile" />
    </div>
    <div class="hidden md:grid md:grid-cols-3 md:w-7/12 md:mx-auto md:gap-10">
        <ProfileCard
          v-for="item in values"
          :comment="item.description"
          :name="item.name"
          :profile_img="item.profile_foto"
          :stars_img="item.star_foto"
        />
    </div>
  </ContainerLayout>
</template>

