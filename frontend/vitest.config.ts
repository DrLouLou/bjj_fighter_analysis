import * as path from "path"

import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["src/setupTests.ts"],
  },
  resolve: {
    alias: {
      "@/redux": path.resolve(__dirname, "./src/redux/"),
      "@/hooks": path.resolve(__dirname, "./src/hooks/"),
    },
  },
})
