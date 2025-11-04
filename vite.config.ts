import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "fe_lib_dev_anil",
      fileName: (format) => `fe-lib-dev-anil.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "antd"],
    },
  },
});
