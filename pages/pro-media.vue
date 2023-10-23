<template>
  <div class="p-8 md:px-16 lg:w-3/5 xl:max-w-7xl mt-8 mx-auto text-neutral-300 divide-y">
    <section class="py-8 pt-4">
      <h1 class="font-bold text-3xl mb-8">Pro média</h1>
      <h2 class="font-bold text-2xl mb-4">
        Kontakty
      </h2>
      <div class="grid grid-cols-1 gap-8">
        <div class="flex flex-col items-left card bg-[#341819] rounded p-8">
          <span class="font-bold text-lg">Lucie Tománkova</span>
          <span>Vedoucí mediální komunikace a PR</span>
          <span>+420 730 959 633</span>
          <span>festivalnaceste@post.cz</span>
        </div>
      </div>
    </section>
    <section class="py-8">
      <h2 class="font-bold text-2xl mb-4">
        Tiskové zprávy
      </h2>
      <div class="grid grid-cols-1 gap-8">
        <div class="flex card bg-[#341819] shadow-xl rounded p-8">
          <div class="mb-2">
            <span>1.10.2023</span>
            <p class="font-bold">Tisková zpráva č.1</p>
          </div>
          <div class="my-auto">
            <a href="/downloads/tiskova_zprava_1.docx" class="btn btn-primary rounded btn-sm">Stáhnout soubor</a>
          </div>
        </div>
      </div>
    </section>
    <section class="py-8">
      <h2 class="font-bold text-2xl mb-4">
        Materiály pro média
      </h2>

      <div class="grid grid-cols-1 gap-8">
        <div class="card bg-[#341819] rounded p-8 pt-4 min-h-64 shadow-xl flex ">
          <div>
            <nuxt-img width="64" height="64" src="/images/logo.svg" alt="logo" />
            <h3 class="font-bold mb-4">Loga ke stažení</h3>
          </div>
          <span class="text-neutral-300 mb-6">Zazipovaná složka s několika formáty našeho loga</span>
          <div>
            <a href="/downloads/logo_pack.zip" class="btn btn-primary rounded btn-sm">Stáhnout soubor</a>
          </div>
          
        </div>
      </div>
    </section>
  </div>
  </template>
