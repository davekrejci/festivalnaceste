<template>
    <section class="p-8 2xl:w-3/4 max-w-7xl mx-auto">
        <h1 class="text-2xl font-bold mb-12 leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-center">Účinkující</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
            <NuxtLink to="/ucinkujici/barmanky" class="tile relative h-60 lg:col-span-2 lg:row-span-2 bg-red-200 border-2 border-black bg-red-400 overflow-hidden">
                <nuxt-img src="/images/artists/barmanky.jpg" format="webp" fit="cover" class="tile-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy" style="object-position: center 40%;" />
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Inscenace</p>
                    <h2 class="text-white font-bold text-2xl">Barmanky</h2>
                    <p class="text-neutral-300 pt-2">Komedie z barového prostředí, která rozesměje i zanechá brouka v hlavě</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/teller" class="tile overflow-hidden relative h-60 lg:col-start-3 lg:col-span-1 lg:row-span-2 border-2 border-black bg-indigo-400">
                <nuxt-img src="/images/artists/teller.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Stand up</p>
                    <h2 class="text-white font-bold text-2xl">Filip Teller</h2>
                    <p class="text-white">Seriózně komediální herec v roli stand up komika.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/fredy-krasty" class=" overflow-hidden relative h-60 lg:col-start-4 lg:col-span-1 lg:row-span-2 border-2 border-black bg-teal-400">
                <div class="absolute z-10 inset-0 pointer-events-none bg-gradient-to-tr from-neutral-900"></div>
                
                <nuxt-img src="/images/artists/fredy-krasty.jpeg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Fredy & Krasty</h2>
                    <p class="text-white">Porce funku velikosti dospělého opičího samce, plná nadsázky a humoru.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/chops" class="tile overflow-hidden relative h-60 lg:col-start-5 lg:col-span-1 lg:row-span-2 border-2 border-black bg-green-400">
                <nuxt-img src="/images/artists/chops.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Chops</h2>
                    <p class="text-white">Osobitý ostravký jazz.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/vpasti" class="tile overflow-hidden relative h-60 lg:col-start-4 lg:col-span-2 lg:row-start-3 lg:row-span-2 border-2 border-black bg-purple-400">
                <nuxt-img src="/images/artists/vpasti.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Inscenace</p>
                    <h2 class="text-white font-bold text-2xl">V pasti</h2>
                    <p class="text-white">Dva generačně vzdálené partnerské páry v prostoru, odkud není úniku. Tato párová idylka se změní z obyčejné cesty na svatbu v noční můru.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/anezka-hruskova-band" class="tile overflow-hidden relative h-60 lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-2 border-2 border-black bg-yellow-400">
                <nuxt-img src="/images/artists/anezka-hruskova-band.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Aneska & Band</h2>
                    <p class="text-white">Česká zpěvačka, písničkářka, skladatelka která se svými silnými texty dotýká i těch největších cyniků.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/rave-in-a-grave" class="tile overflow-hidden relative h-60 lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-2 border-2 border-black bg-rose-400">
                <nuxt-img src="/images/artists/raveinagrave.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Rave in a grave</h2>
                    <p class="text-white">Olomoucká kapela pohybující se někde mezi folkem, punkem a popem.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/3testry" class="tile overflow-hidden relative h-60 lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-2 border-2 border-black bg-slate-400">
                <nuxt-img src="/images/artists/3testry.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Inscenace</p>
                    <h2 class="text-white font-bold text-2xl">3testry</h2>
                    <p class="text-white">Interaktivní monodrama o životě, vůních, lásce, santalovém dřevě a kávě</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/neminem" class="tile overflow-hidden relative h-60 lg:col-start-1 lg:col-span-1 lg:row-start-5 lg:row-span-2 border-2 border-black bg-pink-400">
                <nuxt-img src="/images/artists/neminem.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Neminem</h2>
                    <p class="text-white">Poetické texty a funkové kytarové doprovody obohaceny o melodické tóny trubky.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/orlova" class="tile overflow-hidden relative h-60 lg:col-start-2 lg:col-span-1 lg:row-start-5 lg:row-span-2 border-2 border-black bg-emerald-400">
                <nuxt-img src="/images/artists/orlova.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Performance</p>
                    <h2 class="text-white font-bold text-2xl">Jana Orlová</h2>
                    <p class="text-white">Performance jako „živá poezie“. Tělo pojímá jako pole události, jako prostředek nevědomí.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/teller-workshop" class="tile overflow-hidden relative h-60 lg:col-start-3 lg:col-span-1 lg:row-start-5 lg:row-span-2 border-2 border-black bg-indigo-400">
                <nuxt-img src="/images/artists/teller2.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Workshop</p>
                    <h2 class="text-white font-bold text-2xl">Filip Teller</h2>
                    <p class="text-white">Kurz zaměřený na mezilidskou nonverbální komunikaci.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/pavel-nowak" class="tile overflow-hidden relative h-60 lg:col-start-4 lg:col-span-1 lg:row-start-5 lg:row-span-2 border-2 border-black bg-cyan-400">
                <nuxt-img src="/images/artists/pavel-nowak2.jpeg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Workshop</p>
                    <h2 class="text-white font-bold text-2xl">Pavel Nowak</h2>
                    <p class="text-white">Cesta Rytmu - Hudební prožitkový workshop plný bubnování, zpěvu a rytmických pohybů.</p>
                </div>
            </NuxtLink>
            <NuxtLink to="/ucinkujici/nihillism" class="tile overflow-hidden relative h-60 lg:col-start-5 lg:col-span-1 lg:row-start-5 lg:row-span-2 border-2 border-black bg-amber-400">
                <nuxt-img src="/images/artists/nihillism.jpg" format="webp" fit="cover" class="tile overflow-hidden-bg-image absolute left-0 top-0 w-full cursor-pointer h-full object-cover transition duration-500 transform hover:scale-110 hover:brightness-50"
                    loading="lazy"/>
                <div class="absolute left-0 bottom-0 p-4 z-10 pointer-events-none">
                    <p class="text-white text-xs font-semibold uppercase mb-1">Koncert</p>
                    <h2 class="text-white font-bold text-2xl">Nihillism</h2>
                    <p class="text-white">Techno hudba, ovlivněna prvky funky, old school, hip-hopu, breakbeatu až po Y2Kcore</p>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<style scoped>
.tile:before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url(/images/tile-overlay-large2.png) left bottom no-repeat;
    z-index: 1;
    pointer-events: none;
}
</style>>
