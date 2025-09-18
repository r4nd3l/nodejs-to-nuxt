#### create `.env.local`

```bash

# public (client + server)
NUXT_PUBLIC_API_BASE=http://localhost:3001
NUXT_PUBLIC_APP_TITLE="Nuxt 3 SSR"
NUXT_PUBLIC_APP_DESCRIPTION="Nuxt 3 SSR with Vuetify and TailwindCSS"
NUXT_PUBLIC_APP_VERSION=1.0.0
NUXT_PUBLIC_APP_AUTHOR=Local Kolbas

# server-only
API_SECRET=dev-secret-123

```

#### create `.env.development`

```bash

# public (client + server)
NUXT_PUBLIC_API_BASE=http://localhost:3001
NUXT_PUBLIC_APP_TITLE="Nuxt 3 SSR"
NUXT_PUBLIC_APP_DESCRIPTION="Nuxt 3 SSR with Vuetify and TailwindCSS"
NUXT_PUBLIC_APP_VERSION=1.0.0
NUXT_PUBLIC_APP_AUTHOR=development Kolbas

# server-only
API_SECRET=dev-secret-123

```

#### Links to debug

`http://[::]:3000/`

`http://localhost:3000/`

`http://localhost:3000/api/config`

`http://localhost:3000/api/env`

`http://localhost:3000/api/env-mode`

`http://localhost:3000/api/ls`
