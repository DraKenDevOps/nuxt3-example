// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    runtimeConfig: {
        public: {
            BASE_URL: process.env.PUBLIC_BASE_URL
        }
    }
});
