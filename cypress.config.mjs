import { defineConfig } from "cypress";
import react from "@vitejs/plugin-react";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: {
        plugins: [react()],
        server: {
          port: 5173, // Ensures a consistent port
        },
      },
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
