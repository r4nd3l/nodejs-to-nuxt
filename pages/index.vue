<script setup lang="ts">
const cfg = useRuntimeConfig();
const { data: conf } = await useFetch("/api/config", { server: true });
</script>

<template>
  <div class="p-8 space-y-4">
    <h1 class="text-3xl font-semibold">Nuxt 3 SSR — Compose demo</h1>

    <h2 class="text-xl font-semibold">runtimeConfig.public</h2>
    <pre class="bg-gray-100 p-3 rounded"
      >{{ cfg.public }}
    </pre>

    <h2 class="text-xl font-semibold">/api/config (SSR)</h2>
    <pre class="bg-gray-100 p-3 rounded"
      >{{ conf }}
    </pre>

    <h2 class="text-xl font-semibold">/api/hello</h2>
    <pre class="bg-gray-100 p-3 rounded">
      <ClientOnly>
        <Fetch :url="'/api/hello'"/>
      </ClientOnly>
    </pre>

    <!-- Optional: legacy API proxy test -->
    <div v-if="cfg.public.apiBase.includes('api:8080')">
      <h2 class="text-xl font-semibold">Legacy API via proxy</h2>
      <ClientOnly>
        <Fetch :url="'/api/legacy/users'" />
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  name: "IndexPage",
  components: {
    Fetch: {
      props: { url: { type: String, required: true } },
      setup(props) {
        const data = ref<any>(null);
        const error = ref<any>(null);
        onMounted(async () => {
          try {
            data.value = await $fetch(props.url);
          } catch (e) {
            error.value = String(e);
          }
        });
        return { data, error };
      },
      template: `<pre>{{ error || data }}</pre>`,
    },
  },
});
</script>
