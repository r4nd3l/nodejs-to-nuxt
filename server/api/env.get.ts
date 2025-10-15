import type { EnvResponse } from "~/types/api";

/**
 * Debug endpoint to view environment variables
 * WARNING: This endpoint is disabled in production for security reasons
 */
export default defineEventHandler((): EnvResponse => {
  // Only allow in development mode to prevent security leaks
  if (process.env.NODE_ENV === "production") {
    throw createError({
      statusCode: 404,
      statusMessage: "Not Found",
    });
  }

  return {
    // what the OS env gives Nuxt (before runtimeConfig mapping)
    NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE ?? null,
    NUXT_PUBLIC_APP_TITLE: process.env.NUXT_PUBLIC_APP_TITLE ?? null,
    NUXT_PUBLIC_APP_DESCRIPTION: process.env.NUXT_PUBLIC_APP_DESCRIPTION ?? null,
    NUXT_PUBLIC_APP_VERSION: process.env.NUXT_PUBLIC_APP_VERSION ?? null,
    NUXT_PUBLIC_APP_AUTHOR: process.env.NUXT_PUBLIC_APP_AUTHOR ?? null,
    API_SECRET: process.env.API_SECRET ?? null,
  };
});
