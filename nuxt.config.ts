// nuxt.config.ts
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { config as dotenv } from "dotenv";

// Resolve project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname; //  at project root level

const mode = process.env.NODE_ENV || "development";

// Load in this precedence
const envFiles = [".env", `.env.${mode}`, ".env.local", `.env.${mode}.local`];

for (const name of envFiles) {
  const path = resolve(root, name);
  if (existsSync(path)) {
    dotenv({ path });
  }
}

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
