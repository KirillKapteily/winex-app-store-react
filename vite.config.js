import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    legacy({
      targets: ["chrome 49"],
      renderModernChunks: true,
      polyfills: true,
    }),
  ],
  build: {
    target: "es5",
    cssTarget: "chrome49",
  },
  base: "/winex-app-store-react/",
});
