import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./assets/**/*.css", // Updated pattern
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: { extend: {} },
  plugins: [],
};
