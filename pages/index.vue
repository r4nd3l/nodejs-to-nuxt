<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-semibold">Nuxt 3 SSR — Compose demo</h1>

    <h2 class="text-xl font-semibold">runtimeConfig.public</h2>
    <pre class="bg-gray-100 p-3 rounded">{{ JSON.stringify(cfg.public, null, 2) }}</pre>

    <h2 class="text-xl font-semibold">/api/config (SSR)</h2>
    <pre class="bg-gray-100 p-3 rounded">{{ JSON.stringify(conf, null, 2) }}</pre>

    <h2 class="text-xl font-semibold">/api/hello</h2>
    <pre class="bg-gray-100 p-3 rounded">
      <ClientOnly>
        <Fetch :url="'/api/hello'" />
      </ClientOnly>
    </pre>

    <div v-if="usesLegacy">
      <h2 class="text-xl font-semibold">Legacy API via proxy</h2>
      <ClientOnly>
        <Fetch :url="'/api/legacy/users'" />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";

const cfg = useRuntimeConfig();
const { data: conf } = await useFetch("/api/config", { server: true });

// logs
if (process.server) {
  console.log("[server] apiSecret:", cfg.apiSecret); // server-only
}
console.log("[universal] apiBase:", cfg.public.apiBase); // client + server

// tiny fetch component for demo calls
const Fetch = defineComponent({
  name: "Fetch",
  props: { url: { type: String, required: true } },
  setup(props) {
    const data = ref<unknown>(null);
    const error = ref<string | null>(null);
    onMounted(async () => {
      try {
        data.value = await $fetch(props.url);
      } catch (e: any) {
        error.value = e?.message || String(e);
      }
    });
    return { data, error };
  },
  template: `<pre>{{ error || data }}</pre>`,
});

const usesLegacy = computed(() => cfg.public.apiBase.includes("api:8080"));
</script>
