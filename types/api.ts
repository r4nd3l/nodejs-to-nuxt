/**
 * API response type definitions
 * These types ensure type safety across the application
 */

/**
 * Runtime configuration public settings
 */
export interface RuntimeConfigPublic {
  apiBase: string;
  appTitle: string;
  appDescription: string;
  appVersion: string;
  appAuthor: string;
}

/**
 * Response from /api/config endpoint
 */
export interface ConfigResponse {
  public: RuntimeConfigPublic;
  hasPrivate: boolean;
}

/**
 * Response from /api/env endpoint
 * Note: This endpoint should be disabled in production for security
 */
export interface EnvResponse {
  NUXT_PUBLIC_API_BASE: string | null;
  NUXT_PUBLIC_APP_TITLE: string | null;
  NUXT_PUBLIC_APP_DESCRIPTION: string | null;
  NUXT_PUBLIC_APP_VERSION: string | null;
  NUXT_PUBLIC_APP_AUTHOR: string | null;
  API_SECRET: string | null;
}

/**
 * Response from /api/env-mode endpoint
 */
export interface EnvModeResponse {
  NODE_ENV: string | null;
  NUXT_ENV: string | null;
}

/**
 * Response from /api/ls endpoint
 */
export interface LsResponse {
  cwd: string;
  rootFiles: string[];
}
