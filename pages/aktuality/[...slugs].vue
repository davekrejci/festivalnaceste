<template>
    <div v-if="post">
        <div class="max-w-3xl mx-auto min-h-screen p-8">
            <div class="mb-2 text-sm">
                <NuxtLink to="/aktuality">Aktuality</NuxtLink><span class="text-neutral-500"> / </span><span
                    class="text-neutral-500"> {{ post.title }}</span>
            </div>
            <h1 class="text-2xl font-semibold mb-2">{{ post.title }}</h1>
            <div class="mb-6 text-sm text-neutral-300">{{ formatDate(post.date) }}</div>
            <ContentDoc>
                <template #not-found>
                    <h1>Článek nenalezen</h1>
                </template>
            </ContentDoc>
        </div>
    </div>
    <div v-else>
        <NotFound></NotFound>
    </div>
</template>

<style>
p {
    margin-bottom: 1rem;
}
</style>
  
<script setup>
let post = null;
try {
    const route = useRoute();
    const slug = route.params.slugs[0];
    post = await queryContent('/aktuality').where({ slug: slug }).only(['title', 'date']).findOne();
}
catch (error) {
    console.log(error);
}
</script>

<script>
export default {
    methods: {
        formatDate(date) {
            const options = { day: 'numeric', month: 'long', year: 'numeric' }
            return new Date(date).toLocaleDateString('cs-CZ', options)
        }
    }
}
</script>
  