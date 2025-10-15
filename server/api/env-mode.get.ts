import type { EnvModeResponse } from "~/types/api";

/**
 * Returns environment mode information
 */
export default defineEventHandler((): EnvModeResponse => ({
  NODE_ENV: process.env.NODE_ENV ?? null,
  NUXT_ENV: process.env.NUXT_ENV ?? null,
}));
