<template>
    <div class="p-8 max-w-5xl flex justify-center mx-auto">
        <div>
            <h1 class="text-2xl font-semibold mb-6">Aktuality</h1>
            <section>
                <article v-for="post of posts" :key="post.slug" class="border-2 border-neutral-500 rounded-md mb-4">
                    <div class="md:flex md:h-56">
                        <img class="object-cover w-full h-56 rounded-t-md md:rounded-l-md md:rounded-r-none md:w-64" :src="post.img" alt="">
                        <div class="flex flex-col pt-4 md:mx-6 px-6 pb-6 py-16">
                            <div class="mb-2 text-sm text-neutral-400">{{ formatDate(post.date) }}</div>
                            <div>
                                <h2 class="text-xl mb-4 font-semibold hover:text-orange-400">
                                    <nuxt-link :to="`/aktuality/${post.slug}`">
                                        {{ post.title }}
                                    </nuxt-link>
                                </h2>
                                <p class="line-clamp-3">
                                    {{ post.description }}
                                </p>
                                <nuxt-link class="text-orange-400" :to="`/aktuality/${post.slug}`">
                                    <div
                                        class="btn btn-outline rounded-md btn-sm text-white hover:bg-transparent hover:text-orange-500">
                                        Přečíst článek</div>
                                </nuxt-link>
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
    posts = await queryContent('/').only(['slug', 'title', 'description', 'img', 'date']).limit(numberOfPosts).find();
} else {
    posts = await queryContent('/').only(['slug', 'title', 'description', 'img', 'date']).find();
}

function customSort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
posts.sort(customSort);


function formatDate(date) {
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    return new Date(date).toLocaleDateString('cs-CZ', options)
}

</script>