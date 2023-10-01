<template>
  <header class="bg-base-300 text-neutral-200">

    <!-- NAVBAR -->
    <nav class="nav flex items-center justify-between px-4 py-2 lg:px-4" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/">
          <nuxt-img height="64" width="64" src="/images/logo.svg" alt="logo-image" />
        </NuxtLink>
      </div>
      <div class="flex md:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          @click="mobileMenuOpen = true">
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden md:flex md:gap-x-6 font-semibold text-md leading-6 mr-2">
        <div v-for="item in menuItems" :key="item.link">
          <div v-if="item.children">
            <div class="dropdown dropdown-end">
              <label tabindex="0"
                class="-mx-5 py-2 px-6 flex cursor-pointer items-center gap-x-1 text-md font-semibold leading-7 hover:text-orange-400">
                {{ item.text }}
                <Icon size="16" name="ph:caret-down-bold" />
              </label>
              <ul tabindex="0" class="dropdown-content bg-base-300 p-2 shadow rounded-md w-52 mt-5">
                <li v-for="subitem in item.children" :key="subitem.link">
                  <NuxtLink :to="subitem.link" @click="mobileMenuOpen = false">
                    <div class="p-4 cursor-pointer hover:text-orange-400">
                      {{ subitem.text }}
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <NuxtLink v-else :to="item.link" @click="mobileMenuOpen = false">
            <div class="-mx-3 py-2 px-6 font-semibold leading-7 hover:text-orange-400">
              {{ item.text }}
            </div>
          </NuxtLink>
        </div>

      </PopoverGroup>
      <div class="hidden md:flex items-center ml-8 justify-between gap-1 md:place-self-center md:justify-self-end">
        <div class="hover:text-orange-600 p-1 m-0 rounded-lg">
          <a href="https://www.instagram.com/festivalnaceste" target="_blank">
            <Icon size="24" name="fa6-brands:instagram"></Icon>
          </a>
        </div>
        <div class="hover:text-orange-600 p-1 m-0 rounded-lg">
          <a href="https://www.facebook.com/festnaceste" target="_blank">
            <Icon size="24" name="fa6-brands:facebook-f"></Icon>
          </a>
        </div>
      </div>
    </nav>

    <!-- MOBILE MENU -->
    <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <DialogPanel class="bg-base-300 fixed flex flex-col inset-y-0 right-0 z-10 w-full overflow-y-auto px-4 py-2">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" @click="mobileMenuOpen = false">
            <nuxt-img height="64" width="64" src="/images/logo.svg" alt="logo-image" />
          </NuxtLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5" @click="mobileMenuOpen = false">
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="flow-root">
          <div class="nav -my-6 mt-4 mb-4">
            <div v-for="item in menuItems" :key="item.link">
              <div v-if="item.children">
                <div v-for="subitem in item.children" :key="subitem.link">
                  <NuxtLink :to="subitem.link"
                    @click="mobileMenuOpen = false">
                    <div
                      class="block rounded-lg py-4 px-3 text-base font-semibold leading-7 hover:text-orange-400">
                      {{ subitem.text }}
                    </div>
                  </NuxtLink>
                  <!-- <hr v-if="index != Object.keys(item).length + 1" class="border-amber-100"> -->
                </div>
              </div>
              <NuxtLink v-else :to="item.link" @click="mobileMenuOpen = false">
                <div
                  class="block rounded-lg py-4 px-3 text-base font-semibold leading-7 hover:text-orange-400">
                  {{ item.text }}
                </div>
              </NuxtLink>
              <!-- <hr class="border-amber-100"> -->
            </div>
          </div>
        </div>
        <div class="flex gap-8 self-center mt-auto mb-4">
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

      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
.router-link-active {
  color: #fb923c;
}

.nav {
  font-family: 'Source Sans Pro', sans-serif;

}
</style>
  
<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const menuItems = [
  { link: "/aktuality", text: "Aktuality" },
  { link: "/program", text: "Program" },
  { link: "/ucinkujici", text: "Účinkující" },
  { link: "/galerie/2022", text: "Galerie" },
  {
    link: "#", text: "Info", children:
      [
        { link: '/o-festivalu', text: 'O festivalu' },
        { link: '/pro-media', text: 'Pro média' },
        { link: '/faq', text: 'FAQ' },
      ]
  },
  { link: "/kontakt", text: "Kontakt" },
]

const mobileMenuOpen = ref(false)
</script>