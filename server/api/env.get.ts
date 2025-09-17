export default defineEventHandler(() => ({
  // what the OS env gives Nuxt (before runtimeConfig mapping)
  NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE ?? null,
  NUXT_PUBLIC_APP_TITLE: process.env.NUXT_PUBLIC_APP_TITLE ?? null,
  NUXT_PUBLIC_APP_DESCRIPTION: process.env.NUXT_PUBLIC_APP_DESCRIPTION ?? null,
  NUXT_PUBLIC_APP_VERSION: process.env.NUXT_PUBLIC_APP_VERSION ?? null,
  NUXT_PUBLIC_APP_AUTHOR: process.env.NUXT_PUBLIC_APP_AUTHOR ?? null,
  API_SECRET: process.env.API_SECRET ?? null,
}));
