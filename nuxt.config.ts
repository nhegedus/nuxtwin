// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/nuxtwin/'
    },
    css: ["@/assets/styles/styles.css", "@/assets/styles/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    generate: {
        dir: '.output/public',
    },
    components: true,
})
