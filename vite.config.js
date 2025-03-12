import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/nvakhovska/",
  define: {
    VITE_BASE_URL: JSON.stringify("/nvakhovska"),
  },
});
