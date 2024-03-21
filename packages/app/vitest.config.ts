import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "node",
    setupFiles: ["./test-setup.ts"],
    pool: "forks",
    poolOptions: {
      forks: {
        execArgv: ["--loader=./preload.js"],
      },
    },
  },
});
