import { resolve } from "path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "typescriptNpmPackageTemplate",
      formats: ["es", "umd"],
      fileName: "index",
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
})
