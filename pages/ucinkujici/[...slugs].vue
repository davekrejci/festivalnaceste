<template>
    <div v-if="data">
        <!-- Intro section -->
        <section class="relative mx-auto xl:max-w-7xl xl:mt-8 h-96 bg-cover bg-no-repeat cover"
            :style="{ backgroundImage: 'url(' + data.cover + ')' }">
            <div class="absolute inset-0 bg-gradient-to-tr from-neutral-900 via-transparent"></div>
            <div class="backdrop-brightness-50 text-center w-full h-full m-0 p-8 flex items-end justify-start">
                <div @click="$router.back()"
                    class="absolute top-5 left-5 btn btn-primary rounded btn-sm hover:text-white px-4">
                    <Icon size="16" name="ph:caret-left"></Icon>
                    <span>Zpět</span>
                </div>
                <div>
                    <div class="flex flex-col items-start text-left">
                        <p class="text-white font-semibold uppercase mb-1">{{ data.type }}</p>
                        <h2 class="text-white text-4xl font-bold text-2xl">{{ data.title }}</h2>
                        <p class="text-neutral-300 pt-2 lg:w-3/4">{{ data.description }}</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Description section -->
        <section class="p-8 py-8 bg-base-300 xl:max-w-7xl mx-auto">
            <div v-if="data.offprogram" class="-mt-3">
                <span class="badge badge-sm badge-neutral text-neutral-200 -ml-1 rounded-md mb-1 text-md font-semibold">Off program</span>
                <span class="text-neutral-400 text-sm mb-4 block">Tento účinkující není součástí hlavního programu a může se krýt s dalšími účinkujícími!</span>
            </div>
            <div class="mb-8 p-4 card bg-[#341819] rounded-sm shadow-xl">
                <span class="m-0 p-0 mb-2 text-white text-lg font-bold block">{{ data.date }}</span>
                <span class="m-0 p-0 mb-0 text-white block"><Icon size="16" class="mr-1 my-0" name="mingcute:time-line"></Icon> {{ data.time }}</span>
                <span class="m-0 p-0 pt-2 text-white font-semibold block"><Icon size="16" class="mr-1 my-0" name="tdesign:location"></Icon> <a class="hover:text-primary" :href="data.locationLink">{{ data.location }}</a></span>
            </div>
            <div v-html="data.info"></div>
            <div v-if="data.links" class="w-32 mt-8">
                <ul>
                    <li v-for="(link, index) in data.links" :key="index" class="hover:text-primary p-1 m-0 rounded-lg">
                        <a :href="link.url" target="_blank">
                            <Icon size="24" :name="link.icon"></Icon>
                            <span class="ml-3">{{ link.text }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <!-- Media section -->
        <section class="xl:max-w-7xl xl:mb-8 mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
                <div v-for="(image, index) in data.images" :key="index" class="relative overflow-hidden aspect-square"
                    @click.prevent="openLightbox(index)">
                    <nuxt-img :src="image" format="webp" fit="cover" height="300" width="300"
                        class="w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110"
                        />
                </div>
                <div v-for="(video, index) in data.videos" :key="index" class="relative overflow-hidden aspect-square"
                    @click.prevent="openLightbox(index)">
                    <iframe height="100%" width="100%" :src="video.src" :title="video.title" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <NotFound></NotFound>
    </div>
    <lightbox :images="data.images" :visible="lightboxVisible" :index="lightboxIndex" @closeLightbox="closeLightbox"
        @indexIncrement="lightboxIndex++" @indexDecrement="lightboxIndex--">
    </lightbox>
</template>

<style scoped>
p {
    margin-bottom: 1rem;
}

.cover {
    background-position: 0 40% !important;
}
</style>
  
<script setup>
import { ref } from 'vue'
let lightboxIndex = ref(0);
let lightboxVisible = ref(false);

let data = null;
try {
    const route = useRoute();
    const slug = route.params.slugs[0];
    data = await queryContent('/ucinkujici').where({ slug: slug }).findOne();
}
catch (error) {
    console.log(error);
}

function openLightbox(index) {
    lightboxIndex.value = index;
    lightboxVisible.value = true;
}
function closeLightbox() {
    lightboxIndex.value = 0;
    lightboxVisible.value = false;
}
</script>

  