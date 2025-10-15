import type { ConfigResponse } from "~/types/api";

/**
 * Returns the current runtime configuration including public settings
 * and a flag indicating if private configuration exists.
 */
export default defineEventHandler((): ConfigResponse => {
  const cfg = useRuntimeConfig();
  return {
    public: cfg.public,
    hasPrivate: Boolean(cfg.apiSecret),
  };
});
