import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

import { dependencies } from "./package.json";

function renderChunks(deps: Record<string, string>) {
  const chunks: {
    [key: string]: string[];
  } = {};
  Object.keys(deps).forEach((key) => {
    if (["react", "react-router-dom", "react-dom"].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [
    react({
      include: ["**/*.tsx", "**/*.ts"],
    }),
    // TODO: need in
    eslint({
      failOnWarning: false,
      failOnError: true,
    }),
  ],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@/redux": path.resolve(__dirname, "./src/redux"),
    },
  },
});
