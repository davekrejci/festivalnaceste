
<template>
  <div class="relative h-[calc(100vh-80px)] isolate px-6 pt-14 lg:px-8 overflow-hidden">
    <div
      class="absolute left-0 bottom-0 h-full w-full max-w-none m-0 bg-[url('@/assets/images/background.svg')] bg-cover bg-bottom bg-no-repeat">
    </div>
    <div class="leaves">
      <div class="leaf1"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf2"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf3"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf4"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf6"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf7"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf8"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf9"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf10"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
      <div class="leaf11"><nuxt-img src="/images/leaf.svg" alt="leaf-image" /></div>
    </div>
    <div class="absolute left-0 top-0 w-full h-full max-w-none flex justify-center items-center backdrop-brightness-50">
      <div class="text-center text-amber-100">
        <div class="-mt-20">
          <div
            class="h-64 w-64 lg:h-96 lg:w-96 max-w-none bg-[url('@/assets/images/logo.svg')] bg-cover bg-center bg-no-repeat">
          </div>
          <hr class="mb-4 -mt-10 lg:-mt-16 lg:mb-8 border-2 border-amber-100">
          <h2 class="text-2xl font-bold tracking-tighter">31. 10. – 2. 11. 2023</h2>
          <h2 class="text-2xl font-bold">Opava</h2>
        </div>
      </div>
    </div>
    <div class="jumpingButtonWrapper hidden lg:block">
      <JumpingButton to="aktuality"></JumpingButton>
    </div>
  </div>
  <section id="aktuality" class="pb-24 pt-16 flex flex-col items-center bg-[#190c0a]">
    <Aktuality :count='3'></Aktuality>
    <NuxtLink to="/aktuality">
      <div class="btn btn-primary hover:text-white rounded mt-4">
        Zobrazit všechny aktuality
      </div>
    </NuxtLink>
  </section>
  <section class="bg-[#eab475] p-16 pb-28">
    <Sponzori></Sponzori>
  </section>
</template>

<style scoped>
body {
  overflow: hidden;
}

.jumpingButtonWrapper {
  bottom: 0;
  height: 50px;
  position: absolute;
  width: 100vw;
}

.leaves img {
  width: 70px;
  height: 70px;
}

.container {
  position: relative;
  overflow: hidden;
}

.leaves {
  position: absolute;
}

.leaf1 {
  position: absolute;
  width: 40px;
  top: 80;
  animation: fall 10s linear infinite;
}

.leaf2 {
  position: absolute;
  width: 35px;
  top: 100px;
  left: 50vw;
  animation: fall2 12s linear infinite;
}

.leaf3 {
  position: absolute;
  width: 30px;
  top: 0px;
  left: 20vw;
  animation: fall 8s linear infinite 1s;
}

.leaf4 {
  position: absolute;
  width: 25px;
  top: 0px;
  left: 70vw;
  animation: fall2 8s linear infinite 1.5s;
}

.leaf5 {
  position: absolute;
  width: 30px;
  top: 0px;
  left: 10vw;
  animation: fall3 8s linear infinite 2s;
}

.leaf6 {
  position: absolute;
  width: 40px;
  top: 0px;
  left: 80vw;
  animation: fall3 8s linear infinite 1.5s;
}

.leaf7 {
  position: absolute;
  width: 30px;
  top: 0px;
  left: 30vw;
  animation: fall2 10s linear infinite .5s;
}

.leaf8 {
  position: absolute;
  width: 35px;
  top: 0px;
  left: 90vw;
  animation: fall3 10s linear infinite .5s;
}

.leaf9 {
  position: absolute;
  width: 40px;
  top: 0px;
  left: 30vw;
  animation: fall4 12s linear infinite .3s;
}

.leaf10 {
  position: absolute;
  width: 25px;
  top: 0px;
  left: 70vw;
  animation: fall5 7s linear infinite 1.3s;
}

.leaf11 {
  position: absolute;
  width: 35px;
  top: 0px;
  left: 80vw;
  animation: fall5 8s linear infinite 1.7s;
}

@keyframes fall {
  0% {
    top: 0vh;
    transform: translateX(-100px) rotateX(180deg);
    opacity: 20%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    top: 80vh;
    transform: translateX(250px) rotateX(-180deg);
    opacity: 0%;
  }
}

@keyframes fall2 {
  0% {
    top: 0vh;
    transform: translateX(50px) rotateX(-90deg);
    opacity: 20%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    top: 80vh;
    transform: translateX(-350px) rotateX(180deg);
    opacity: 0%;
  }
}

@keyframes fall3 {
  0% {
    top: 0vh;
    transform: translateX(0px) rotateX(-180deg);
    opacity: 20%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    top: 80vh;
    transform: translateX(-400px) rotateX(180deg);
    opacity: 0%;
  }
}

@keyframes fall4 {
  0% {
    top: 0vh;
    transform: translateX(0px) rotateY(-180deg);
    opacity: 20%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    top: 80vh;
    transform: translateX(-400px) rotateY(180deg);
    opacity: 0%;
  }
}

@keyframes fall5 {
  0% {
    top: 0vh;
    transform: translateX(-100px) rotateY(180deg);
    opacity: 20%;
  }

  50% {
    opacity: 100%;
  }

  100% {
    top: 80vh;
    transform: translateX(250px) rotateY(-180deg);
    opacity: 0%;
  }
}</style>
