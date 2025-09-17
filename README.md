Migration plan (Vue3 → Nuxtv3 SSR “shell”)

**A. Structure**

- Move your app into Nuxt folders:

  - `src` → `app` (Nuxt 4 default uses `app/` for pages/layouts/components)
  - `src/components` → `app/components`
  - `src/views` or router views → `app/pages` (Nuxt makes routes from file names)
  - `src/assets` → `app/assets`
  - `src/plugins` → `app/plugins`
  - `src/composables` → `composables/` (root)
  - `src/store` (Pinia?) → install `@pinia/nuxt` and keep in `/stores` or `/app/stores`

    - `yarn add pinia @pinia/nuxt`
    - `modules: ['@pinia/nuxt', ...]` in `nuxt.config.ts`

**B. Router**

- Remove `vue-router` manual setup. Nuxt auto-generates routes from `app/pages`.
- If you had dynamic pages, recreate e.g. `app/pages/users/[id].vue`.

**C. Global styles**

- Tailwind already added.
- Bring your old CSS to `app/assets/css/*` and import in layout or `app.vue`.

**D. Vuetify**

- Keep the plugin above; move old Vuetify config (themes, aliases) into the plugin.

**E. Aliases**

- Nuxt exposes `~` / `#` / `@`:

  - `@/` → project root
  - `~/` → source root

- Update imports accordingly (or set `alias` in `nuxt.config.ts` if you want to keep old ones).

**F. Env & config**

- Replace any `import.meta.env.*` usage with `useRuntimeConfig()`.
- Public values → `runtimeConfig.public.*`, server-only → `runtimeConfig.*`.

**G. HTTP**

- Replace direct Axios base URLs with `config.public.apiBase`.
- Prefer `useFetch`/`$fetch` (built-in) — SSR-aware and typed.

**H. Middlewares / server**

- If you had Express/Koa middlewares, port them to **Nitro**:

  - `server/middleware/*.ts` for connect-style middleware
  - `server/api/*.ts` for REST endpoints
  - You can still **proxy** to external services or your legacy Node server during the transition.

**I. i18n**

- If you used `vue-i18n`, add `@nuxtjs/i18n` or keep manual setup:

  - `yarn add @nuxtjs/i18n`
  - Add to `modules` and move locale files to `locales/`.

**J. CI/CD**

- Build step becomes `yarn build` → `.output/`
- Start with `node .output/server/index.mjs`
- Inject env at runtime (compose, k8s, etc.)

---

### Local dev test

```bash
# dev (hot reload)
yarn dev

# SSR build + preview
yarn build
yarn preview

# or dockerized
docker compose -f docker-compose.dev.yml up --build
```

Note:

- `/` renders on the server,
- `/api/hello` handled by Nitro,
- Vuetify button renders,
- Tailwind styles apply,
- `runtimeConfig.public.apiBase` shows your `.env.development` value.

---
