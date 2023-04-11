<template>
    <div class="h-60 bg-[url('/images/gallery_bg.jpg')] grayscale bg-cover bg-center bg-bottom bg-no-repeat flex justify-center items-center max-w-screen-xl mx-auto mx-2">
        <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
            <h1 class="font-bold text-white text-4xl w-1/2 text-center">Galerie</h1>
        </div>
    </div>
    <div className="" class="flex justify-center w-100 mx-2 max-w-screen-xl mx-auto">
        <div class="my-4">
            <ul class="flex flex-wrap justify-center gap-4 -mb-px ">
                <li v-for="year in years" 
                    :key="year"
                    >
                <NuxtLink 
                    :to="'/galerie/' + year"
                    class=""
                >
                <div class="mr-2 border-2 border-neutral p-2 px-4 font-semibold text-slate-200 hover:text-orange-400 cursor-pointer">
                    {{ year }}
                </div>
                </NuxtLink>
            </li>
            </ul>
            
        </div>
    </div>
    <section class="xl:pt-4">
        <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
            <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden aspect-square"
                @click.prevent="openLightbox(index)">
                <nuxt-img :src="image" format="webp" fit="cover" height="300" width="300"
                    class="w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110"
                    loading="lazy" />
            </div>
        </div>
    </section>

    <lightbox :images="images" :visible="lightboxVisible" :index="lightboxIndex" @closeLightbox="closeLightbox"
        @indexIncrement="lightboxIndex++" @indexDecrement="lightboxIndex--">
    </lightbox>
</template>

<style>
.router-link-active div {
  color: #fb923c;
}
</style>
  
<script>
import lightbox from '~~/components/lightbox.vue';
export default {
    components: { lightbox },
    props: {
        year: {
            type: String,
            default: '2022',
        }
    },
    data() {
        return {
            images: [],
            lightboxIndex: 0,
            lightboxVisible: false,
            years: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2021 Léto', '2021 Podzim', '2022']

        }
    },
    mounted() {
        this.images = this.loadImagePaths();
    },

    methods: {
        loadImagePaths() {
            let images;
            // since vite glob import does not support variables/template literals in the path, we need to do a switch for every case :(
            switch (this.year) {
                case "2007": images = import.meta.glob("/public/images/gallery/2007/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2008": images = import.meta.glob("/public/images/gallery/2008/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2009": images = import.meta.glob("/public/images/gallery/2009/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2010": images = import.meta.glob("/public/images/gallery/2010/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2011": images = import.meta.glob("/public/images/gallery/2011/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2012": images = import.meta.glob("/public/images/gallery/2012/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2013": images = import.meta.glob("/public/images/gallery/2013/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2014": images = import.meta.glob("/public/images/gallery/2014/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2015": images = import.meta.glob("/public/images/gallery/2015/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2016": images = import.meta.glob("/public/images/gallery/2016/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2017": images = import.meta.glob("/public/images/gallery/2017/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2018": images = import.meta.glob("/public/images/gallery/2018/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2019": images = import.meta.glob("/public/images/gallery/2019/*.{jpg,JPG,jpeg,png,gif}"); break;
                case "2021 Léto": images = import.meta.glob("/public/images/gallery/2021 léto/*.{jpg,jpeg,png,gif}"); break;
                case "2021 Podzim": images = import.meta.glob("/public/images/gallery/2021 podzim/*.{jpg,jpeg,png,gif}"); break;
                case "2022": images = import.meta.glob("/public/images/gallery/2022/*.{jpg,jpeg,png,gif}"); break;
            }
            const imageFilenames = Object.keys(images).map(filename => {
                return filename.replace(/^\/public\//, '/');
            })
            return imageFilenames;
        },
        openLightbox(index) {
            this.lightboxIndex = index;
            this.lightboxVisible = true;
        },
        closeLightbox() {
            this.lightboxIndex = 0;
            this.lightboxVisible = false;
        },
    }
}
</script>
  
  
  
  