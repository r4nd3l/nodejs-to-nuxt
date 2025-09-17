export default defineEventHandler(() => ({
  NODE_ENV: process.env.NODE_ENV ?? null,
  NUXT_ENV: process.env.NUXT_ENV ?? null,
}));
