<template>
    <div class="p-8 max-w-5xl flex justify-center mx-auto">
        <div>
            <h1 class="text-2xl font-bold mb-12 leading-7 sm:truncate sm:text-3xl sm:tracking-tight text-center">Aktuality</h1>
            <section>
                <article v-for="post of posts" :key="post.slug" class="card bg-[#341819] rounded shadow-xl mb-4">
                    <div class="md:flex md:h-56">
                        <nuxt-img
                            :src="post.img"
                            format="webp"
                            fit="cover"
                            alt="cover-image"
                            loading="lazy"
                            class="object-cover w-full h-56 rounded-t-md md:rounded-l-md md:rounded-r-none md:w-64 md:min-w-[256px]"
                        />
                        <div class="flex flex-col pt-4 md:mx-6 px-6 pb-6 py-16">
                            <div class="mb-2 text-sm text-neutral-300">{{ formatDate(post.date) }}</div>
                            <div>
                                <h2 class="text-xl mb-4 font-semibold hover:text-primary">
                                    <nuxt-link :to="`/aktuality/${post.slug}`">
                                        {{ post.title }}
                                    </nuxt-link>
                                </h2>
                                <p class="line-clamp-3">
                                    {{ post.description }}
                                </p>
                                <NuxtLink :to="`/aktuality/${post.slug}`">
                                    <div class="btn btn-primary text-black hover:text-white rounded btn-sm shadow-xl">
                                        Přečíst článek
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>



                </article>
            </section>
        </div>
    </div>
</template>
    
<script setup>
const props = defineProps({
    count: {
        type: Number,
    }
})
let numberOfPosts = props.count;
let posts = [];
if (numberOfPosts) {
    posts = await queryContent('/aktuality').only(['slug', 'title', 'description', 'img', 'date']).sort({ date: -1 }).limit(numberOfPosts).find();
} else {
    posts = await queryContent('/aktuality').only(['slug', 'title', 'description', 'img', 'date']).sort({ date: -1 }).find();
}

function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return new Date(date).toLocaleDateString('cs-CZ', options)
}

</script>