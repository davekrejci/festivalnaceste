<template>
    <a @click="scrollToSection" class="jumpingButton bg-orange-600 border-orange-400 border-2 rounded-full text-center">
        <Icon name="formkit:caretdown" class="text-neutral-200 font-bold mb-1" size="16"></Icon>
    </a>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
    }
})

function scrollToSection() {
    console.log(props.to);
    const section = document.getElementById(props.to);
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 10000 });
}
    
</script>

<style>
.jumpingButton {
    -webkit-animation: jumpingScroll 1s infinite;
    animation: jumpingScroll 1s infinite;
    cursor: pointer;
    display: block;
    height: 28px;
    margin: 0 auto;
    transform: translateX(-50%);
    position: relative;
    top: 0;
    width: 28px;
}

@-webkit-keyframes jumpingScroll {
    0% {
        margin-top: 3px
    }

    50% {
        margin-top: -10px
    }

    100% {
        margin-top: 3px
    }
}

@keyframes jumpingScroll {
    0% {
        margin-top: 3px;
    }

    50% {
        margin-top: -10px;
    }

    100% {
        margin-top: 3px;
    }
}
</style>