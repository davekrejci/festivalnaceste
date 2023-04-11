<template>
  <div class="p-8 max-w-5xl min-h-screen flex justify-center mx-auto">
    <div>
      <h1 class="text-2xl font-semibold mb-6">Aktuality</h1>
      <section class="space-y-4 divide-y">
        <article v-for="post of posts" :key="post.slug" class="pt-4">
          <div class="lg:flex">
                <img class="object-cover w-full h-56 rounded-lg lg:w-64" :src="'/images/articles/' + post.slug + '.jpg'" alt="">

                <div class="flex flex-col pt-4 lg:mx-6">
                    <div class="mb-2 text-sm text-neutral-400">{{ formatDate(post.date) }}</div>
                    <div>
                      <h2 class="text-xl mb-4 font-semibold hover:text-orange-400">
                        <nuxt-link :to="`/aktuality/${post.slug}`">
                          {{ post.title }}
                        </nuxt-link>
                      </h2>
                      <span>
                        {{ post.description }}
                      </span>
                      <nuxt-link class="text-orange-400" :to="`/aktuality/${post.slug}`">
                          Číst dále...
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
let posts = await queryContent('/').only(['slug', 'title', 'description', 'date']).find();

function customSort(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
}
posts.sort(customSort);

function formatDate(date) {
  const options = { day: 'numeric', month: 'long', year: 'numeric'  }
  return new Date(date).toLocaleDateString('cs-CZ', options)
}
</script>