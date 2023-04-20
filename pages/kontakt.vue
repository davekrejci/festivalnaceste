<template>
  <div class="lg:w-3/5 mx-auto">
    <div class="2xl:flex p-8 md:px-16">
      <div class="p-8 w-full flex 2xl:justify-center 2xl:items-center">
        <div>
          <h1 class="mb-4 text-2xl text-neutral-200 font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">Napište
            nám</h1>
          <p class="text-neutral-300">Máte nějakou otázku na kterou jste nenašli odpověď?</p>
          <p class="mb-2 text-neutral-300">Chcete se zapojit do našeho multižánrového festivalu?</p>
          <p class="mb-8 text-neutral-300">Napište nám a rádi vám pomůžeme.</p>
          <div class="flex flex-col gap-4 text-neutral-300">
            <div class="flex gap-4">
              <Icon size="24" name="material-symbols:mail-outline"></Icon>
              <span>festivalnaceste@post.cz</span>
            </div>
            <div class="flex gap-4">
              <Icon size="24" name="ph:buildings"></Icon>
              <div>
                <span>Slezská univerzita v Opavě</span><br>
                <span>Filozoficko-přírodovědecká fakulta v Opavě</span><br>
                <span>Masarykova třída 343/37, 746 01 Opava</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- MAP -->
      <div class="p-4 mx-2 min-h-[400px] w-full max-w-[600px] mx-auto relative">
        <!-- Skeleton loader -->
        <div class="absolute inset-0 bg-[#e8eaed] shimmer rounded-sm"></div>
        <!-- Map iframe -->
        <iframe class="rounded-sm absolute inset-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8160.6244181941765!2d17.897039664431173!3d49.9368380225362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713d815cc57e8df%3A0x8855db84f16d7886!2zRmlsb3pvZmlja28tcMWZw61yb2RvdsSbZGVja8OhIGZha3VsdGEgdiBPcGF2xJsgU2xlenNrw6kgdW5pdmVyeml0eSB2IE9wYXbEmw!5e0!3m2!1scs!2scz!4v1678571162056!5m2!1scs!2scz"
          width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
    <!-- <hr class="mt-16"> -->
    <div class="p-8 md:px-16 my-16 text-neutral-300">
      <h1 class="mb-4 text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">Náš tým</h1>
      <p class="mb-4">
        Jsme skupina vášnivých umělců, organizátorů a studentů. Snažíme se
        propojit umělce a diváky, abychom vytvořili nezapomenutelný zážitek pro každého návštěvníka. Pokud máte
        jakékoliv dotazy ohledně festivalu nebo byste chtěli vědět více o našem
        týmu, neváhejte nás kontaktovat. Jsme tu pro vás.
      </p>
      <section class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-16 text-center mt-16">
        <div v-for="member in teamMembers" :key="member.name" class="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img class="rounded-full" :src="member.img" />
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2 max-w-8">{{ member.name }}</h3>
            <p class="text-neutral-400">{{ member.role }}</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style>
.shimmer {
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-size: 800px 100%;
  animation-duration: 1s;
  animation-fill-mode: forwards; 
  animation-iteration-count: infinite;
  animation-name: shimmer;
  animation-timing-function: linear;
}

@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0; 
  }
}
</style>

<!-- <script setup lang="ts">
useHead({
  link: [{ rel: "stylesheet", href: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.css", integrity: "sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=", crossorigin: "" }],
  script: [{ src: "https://unpkg.com/leaflet@1.9.3/dist/leaflet.js", integrity: "sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=", crossorigin: "" },
  {
    innerHTML: `
    var map = L.map('map', { dragging: !L.Browser.mobile }).setView([49.93673834644767, 17.90433722038161], 15);
    var TileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    var DarkTileLayer = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
    var JawgTileLayer = L.tileLayer('https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=TpmNHvzAGjPS7RHPpMoBhCan8JVaUYN6wciVOHidYJlIslyoGFW6jTwFX3Xm1rfP', {
      minZoom: 3,
      maxZoom: 17,
      attribution: ''
    });
    var JawgDarkTileLayer = L.tileLayer('https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=TpmNHvzAGjPS7RHPpMoBhCan8JVaUYN6wciVOHidYJlIslyoGFW6jTwFX3Xm1rfP', {
      minZoom: 3,
      maxZoom: 17,
      attribution: ''
    });
    var BaseMapTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png', {
      minZoom: 3,
      maxZoom: 17,
      attribution: '&copy; <a href="https://carto.com/">carto.com</a> contributors'
    });
    TileLayer.addTo(map);
    var circle = L.circle([49.93673834644767, 17.90433722038161], {
        color: 'orange',
        fillColor: 'orange',
        fillOpacity: 0.5,
        radius: 20
    }).addTo(map);
    circle.bindPopup("<b>Slezská univerzita v Opavě</b><br>Filozoficko-přírodovědecká fakulta v Opavě<br>Masarykova třída 343/37, 746 01 Opava").openPopup();
` }]
})
</script> -->

<script setup>
const teamMembers = [
  { name: 'Lucie Tománková', role: 'koordinátorka, dramaturg', img: '/images/team/lucka.jpg' },
  { name: 'Jindra Fišer', role: 'produkce, dramaturg', img: '/images/team/jindra.jpg' },
  { name: 'Tereza Winkelhöferová', role: 'copywriting, režie', img: '/images/team/terka.jpg' },
  { name: 'Olga Burešová', role: 'prostorový design, režie', img: '/images/team/olca.jpg' },
  { name: 'Renáta Nedomová', role: 'prostorový design, Produkce', img: '/images/team/renca.jpg' },
  { name: 'Natálie Funková', role: 'finance', img: '/images/team/natka.jpg' },
  { name: 'Barbora Havlenová', role: 'sociální sítě', img: '/images/team/barca.jpg' },
  { name: 'Mgr. Pavla Bergmannová', role: 'pedagogická supervize', img: '/images/team/pavla.png' },
  { name: 'Mgr. Hasan Zahirović Ph.D.', role: 'pedagogická supervize', img: '/images/team/hasan.png' },


]
</script>