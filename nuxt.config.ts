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
      appTitle: process.env.NUXT_PUBLIC_APP_TITLE || "fallback title",
      appDescription: process.env.NUXT_PUBLIC_APP_DESCRIPTION || "fallback desc",
      appVersion: process.env.NUXT_PUBLIC_APP_VERSION || "0.0.0",
      appAuthor: process.env.NUXT_PUBLIC_APP_AUTHOR || "unknown",
    },
  },

  build: { transpile: ["vuetify"] },
  vite: { define: { "process.env.DEBUG": false } },
});
