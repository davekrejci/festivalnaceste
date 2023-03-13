// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: true,
    target: 'static',
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image-edge',
        '@nuxt/content'
    ],
    app: {
        head: {
            title: 'Festival Na Cestě',
            meta: [
                { name: 'description', content: 'Oficiální web multižánrového festivalu Na Cestě.' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googelapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@700&display=swap' }
            ]
        }
    }
})
