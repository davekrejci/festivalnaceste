
<template>
  <div class="h-[calc(100svh-128px)] w-full max-w-none m-0 bg-[url('@/assets/images/background.svg')] bg-cover bg-center bg-bottom bg-no-repeat container">
    <div class="leaves">
      <div class="leaf1"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf2"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf3"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf4"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf6"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf7"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf8"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf9"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf10"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
      <div class="leaf11"><img src="@/assets/images/leaf.svg" alt="" srcset=""></div>
    </div>
    <div class="w-full h-full max-w-none flex justify-center items-center backdrop-brightness-50">
      <div class="text-center text-amber-100">
        <div class="bg-base-100 bg-opacity-0 backdrop-blur-sm rounded-sm">
          <h1 class="font-bold text-6xl lg:text-6xl w-1/2 text-left">
            Festival<br>
            Na<br>
            Cestě
          </h1>
          <hr class="mt-4 mb-4 lg:mb-8 border-2 border-amber-100">
          <p class="text-3xl font-bold tracking-tighter">31. 10 - 2. 11. 2023</p>
          <p class="text-3xl font-bold">Opava</p>

          <!-- some call to action here? -->
          <!-- <div class="flex justify-center gap-1 my-4">
            <div class="btn bg-orange-600 text-white">Program</div>
            <div class="btn text-white">Info</div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body{
  overflow: hidden;
}
h1{
  font-family: 'Libre Franklin', sans-serif;
}
.leaves img{
  width: 70px;
  height: 70px;
}
.container{
  position: relative;
  overflow: hidden;
}
.leaves{
  position: absolute;
}

.leaf1 {
  position: absolute;
  width: 40px;
  top:80;
  animation: fall 10s linear infinite;
}
.leaf2 {
  position: absolute;
  width: 35px;
  top:100px;
  left: 50vw;
  animation: fall2 12s linear infinite;
}

.leaf3 {
  position: absolute;
  width: 30px;
  top:0px;
  left: 20vw;
  animation: fall 8s linear infinite 1s;
}

.leaf4 {
  position: absolute;
  width: 25px;
  top:0px;
  left: 70vw;
  animation: fall2 8s linear infinite 1.5s;
}

.leaf5 {
  position: absolute;
  width: 30px;
  top:0px;
  left: 10vw;
  animation: fall3 8s linear infinite 2s;
}
.leaf6 {
  position: absolute;
  width: 40px;
  top:0px;
  left: 80vw;
  animation: fall3 8s linear infinite 1.5s;
}

.leaf7 {
  position: absolute;
  width: 30px;
  top:0px;
  left: 30vw;
  animation: fall2 10s linear infinite .5s;
}

.leaf8 {
  position: absolute;
  width: 35px;
  top:0px;
  left: 90vw;
  animation: fall3 10s linear infinite .5s;
}

.leaf9 {
  position: absolute;
  width: 40px;
  top:0px;
  left: 30vw;
  animation: fall4 12s linear infinite .3s;
}

.leaf10 {
  position: absolute;
  width: 25px;
  top:0px;
  left: 70vw;
  animation: fall5 7s linear infinite 1.3s;
}

.leaf11 {
  position: absolute;
  width: 35px;
  top:0px;
  left: 80vw;
  animation: fall5 8s linear infinite 1.7s;
}

@keyframes fall {
  0% {top:0vh; transform: translateX(-100px) rotateX(180deg); opacity: 20%;}
  50% { opacity: 100%;}
  100% {top:80vh; transform: translateX(250px) rotateX(-180deg); opacity: 0%;}
}

@keyframes fall2 {
  0% {top:0vh; transform: translateX(50px) rotateX(-90deg); opacity: 20%;}
  50% { opacity: 100%;}
  100% {top:80vh; transform: translateX(-350px) rotateX(180deg); opacity: 0%;}
}

@keyframes fall3 {
  0% {top:0vh; transform: translateX(0px) rotateX(-180deg); opacity: 20%;}
  50% { opacity: 100%;}
  100% {top:80vh; transform: translateX(-400px) rotateX(180deg); opacity: 0%;}
}

@keyframes fall4 {
  0% {top:0vh; transform: translateX(0px) rotateY(-180deg); opacity: 20%;}
  50% { opacity: 100%;}
  100% {top:80vh; transform: translateX(-400px) rotateY(180deg); opacity: 0%;}
}

@keyframes fall5 {
  0% {top:0vh; transform: translateX(-100px) rotateY(180deg); opacity: 20%;}
  50% { opacity: 100%;}
  100% {top:80vh; transform: translateX(250px) rotateY(-180deg); opacity: 0%;}
}

</style>
