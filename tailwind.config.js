// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "tailwindcss",
      // Specify the path to your Tailwind CSS configuration file
      apply: require("path").resolve(__dirname, "postcss.config.js"),
    },
  ],
});
