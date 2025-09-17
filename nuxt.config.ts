export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2025-09-17",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/tailwind.css"],

  runtimeConfig: {
    apiSecret: process.env.API_SECRET || "dev-secret",
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "http://localhost:3000",
    },
  },
  build: { transpile: ["vuetify"] },
  vite: { define: { "process.env.DEBUG": false } },
});
