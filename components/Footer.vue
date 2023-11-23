<template>
  <footer class="top-full w-full bg-footerColor-dark">
    <div class=" px-5 grid grid-cols-1 md:grid-cols-2 gap-5 py-20 justify-center max-w-screen-xl mx-auto">
      <div>
        <NuxtImg src="/footer.svg" width="100" height="100"/>
        <p class="text-white my-3 w-70 md:w-60">Your natural candle made for your home and for your wellness.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-5">
        <div v-for="item in footerLinks">
          <h3 class="text-footerColor-green font-bold">{{ item.title }}</h3>
          <ul class="my-5">
            <li v-for="link in item.links" class="my-2">
              <NuxtLink class="text-white" :to="link.link">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>

const footerLinks = [
  {
    title: "Discovery",
    links: [
      {
        name: "New season",
        link: "#"
      },
      {
        name: "Most searched",
        link: "#"
      },
      {
        name: "Most selled",
        link: "#"
      }
    ]
  },
  {
    title: "About",
    links: [
      {
        name: "Help",
        link: "#"
      },
      {
        name: "Shipping",
        link: "#"
      },
      {
        name: "Affiliate",
        link: "#"
      }
    ]
  },
  {
    title: "Info",
    links: [
      {
        name: "Contact us",
        link: "#"
      },
      {
        name: "Privacy Policy",
        link: "#"
      },
      {
        name: "Terms & Conditions",
        link: "#"
      }
    ]
  }
];
</script>
