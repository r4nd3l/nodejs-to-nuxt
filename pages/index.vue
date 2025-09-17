<script setup lang="ts">
const config = useRuntimeConfig();
const { data } = await useFetch("/api/hello", { server: true });
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-semibold text-blue-500">Nuxt 3 SSR — Hello 👋</h1>
    <p>
      Server says: <strong>{{ data }}</strong>
    </p>
    <v-btn color="primary" variant="flat" class="mt-2">Vuetify is alive</v-btn>

    <h2>Testing area</h2>
    <pre class="broder p-4 bg-white rounded shadow">
      {{ config.public.apiBase }}
    </pre>
  </div>
</template>
