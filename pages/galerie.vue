<template>
  <div className="" class="flex justify-center w-100">
  <!-- <div class="font-bold inline-block p-2 text-slate-200 hover:border-b-2 hover:text-white hover:border-white cursor-pointer">2023</div>  -->
  <div class="font-bold inline-block p-2 border-b-2 text-orange-400 border-orange-400 cursor-pointer">2022</div>
</div>
  <section class="xl:pt-4">
    <div class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
      <div v-for="(image, index) in images" :key="index" class="relative overflow-hidden aspect-square" @click.prevent="openLightbox(index)">
        <nuxt-img
          :src="image"
          format="webp"
          fit="cover"
          height="300"
          width="300"
          class="w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110"
          loading="lazy"
        />
      </div>
    </div>
  </section>
  
  <lightbox
    :images="images"
    :visible="lightboxVisible"
    :index="lightboxIndex"
    @closeLightbox="closeLightbox"
    @indexIncrement="lightboxIndex++"
    @indexDecrement="lightboxIndex--"
    >
  </lightbox>
</template>

<script>
import lightbox from '~~/components/lightbox.vue';
export default {
  components: { lightbox },
  data() {
    return {
      images: [],
      lightboxIndex: 0,
      lightboxVisible: false,
    }
  },
  mounted() {
    this.images = this.loadImagePaths();
  },
  methods: {
    loadImagePaths() {
      const images = import.meta.glob('/public/images/gallery/*/*.{jpg,jpeg,png,gif}')
      const imageFilenames = Object.keys(images).map(filename => {
        return filename.replace(/^\/public\//, '/');
      })
      return imageFilenames;
    },
    openLightbox(index){
      this.lightboxIndex = index;
      this.lightboxVisible = true;
    },
    closeLightbox(){
      this.lightboxIndex = 0;
      this.lightboxVisible = false;
    },
  }
}
</script>



