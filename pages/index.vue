<script setup lang="ts">
const config = useRuntimeConfig();
const { data } = await useFetch("/api/config", { server: true });
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-semibold text-gray-500">Nuxt 3 SSR — Hola</h1>
    <h2 class="text-2xl font-semibold text-gray-400">Second line of it</h2>
    <p>
      Server says: <strong>{{ data }}</strong>
    </p>
    <v-btn color="primary" variant="flat" class="mt-2">Vuetify is alive</v-btn>

    <h2>Testing area</h2>
    <pre>
    {{ config.public.apiBase }}
    {{ config.public.appTitle }}
    {{ config.public.appDescription }}
    {{ config.public.appVersion }}
    {{ config.public.appAuthor }}
    </pre>
  </div>
</template>
