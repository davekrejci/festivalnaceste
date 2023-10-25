<template>
  <footer class="footer footer-center p-10 bg-base-300 text-neutral-400 rounded">
  <Sponzori></Sponzori>
  <div class="mt-8 flex flex-row flex-wrap gap-4 justify-center">
    <a v-for="item in menuItems" :key="item.link" :href="item.link" class="link link-hover">{{ item.text }}</a>
  </div> 
  <div>
    <div class="grid grid-flow-col gap-4">
      <div class="hover:text-orange-400 p-1 m-0 rounded-lg">
        <a href="https://www.instagram.com/festivalnaceste" target="_blank">
          <Icon size="24" name="fa6-brands:instagram"></Icon>
        </a>
      </div>
      <div class="hover:text-orange-400 p-1 m-0 rounded-lg">
        <a href="https://www.facebook.com/festnaceste" target="_blank">
          <Icon size="24" name="fa6-brands:facebook-f"></Icon>
        </a>
      </div>
    </div>
  </div> 
  <div>
    <p class="text-xs">Copyright © Festival Na Cestě 2023</p>
  </div>
</footer>
  </template>

<script setup>
const menuItems = [
  { link: "/aktuality", text: "Aktuality" },
  { link: "/program", text: "Program" },
  { link: "/galerie/2022", text: "Galerie" },
  { link: '/o-festivalu', text: 'O festivalu' },
  { link: '/pro-media', text: 'Pro média' },
  { link: '/faq', text: 'FAQ' },
  { link: "/kontakt", text: "Kontakt" },
]
</script>