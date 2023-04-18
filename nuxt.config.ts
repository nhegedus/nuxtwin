// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        baseURL: '/nuxtwin/'
    },
    css: ["@/assets/styles/styles.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    components: true,
})
