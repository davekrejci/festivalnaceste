<template>
    <div id="default-carousel" class="relative w-full max-w-5xl" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative h-60 overflow-hidden rounded-lg md:h-[36rem]">
            <!-- Item 1 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <nuxt-img src="/images/artists/barmanky1.jpg" format="webp" fit="cover"
                    class="" />
                <div class="bg-gradient-to-t from-black absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                <div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Inscenace</p>
                    <h2 class="text-white font-bold text-2xl">Barmanky</h2>
                </div>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <nuxt-img src="/images/artists/teller.jpg" format="webp" fit="cover"
                    class=""  />
                <div class="bg-gradient-to-t from-black absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                <div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Stand up</p>
                    <h2 class="text-white font-bold text-2xl">Fillip Teller</h2>
                </div>
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <nuxt-img src="/images/artists/fredy-krasty.jpeg" format="webp" fit="cover"
                    class=""  />
                <div class="bg-gradient-to-t from-black absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                <div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Fredy & Krasty</h2>
                </div>
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <nuxt-img src="/images/artists/vpasti.jpg" format="webp" fit="cover"
                    class=""  />
                <div class="bg-gradient-to-t from-black absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                <div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Inscenace</p>
                    <h2 class="text-white font-bold text-2xl">V pasti</h2>
                </div>
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                <nuxt-img src="/images/artists/3testry.jpg" format="webp" fit="cover"
                    class=""  />
                <div class="bg-gradient-to-t from-black absolute top-0 left-0 w-full h-full pointer-events-none"></div>
                <div class="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Inscenace</p>
                    <h2 class="text-white font-bold text-2xl">3testry</h2>
                </div>
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" class="w-2 h-2 bg-neutral-300 rounded-full" aria-current="true" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button type="button" class="w-2 h-2 bg-neutral-300 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
            <button type="button" class="w-2 h-2 bg-neutral-300 rounded-full" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
            <button type="button" class="w-2 h-2 bg-neutral-300 rounded-full" aria-current="false" aria-label="Slide 4"
                data-carousel-slide-to="3"></button>
            <button type="button" class="w-2 h-2 bg-neutral-300 rounded-full" aria-current="false" aria-label="Slide 5"
                data-carousel-slide-to="4"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<style scoped>
[aria-current="true"] {
    background: orange;
}
</style>

<script setup>
import { onMounted } from 'vue'
import { initCarousels } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initCarousels();
})
</script>