import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default function (opts) {
  console.log("Executing Vite %s in %s mode...", opts.command, opts.mode);
  const input = {};
  let assetFileNames: string;
  let entryFileNames: string;
  if (opts.mode === "standalone") {
    console.log("Standalone");
    input["index"] = "index.html";
    input["walcron-zelda-nav-svelte"] = "src/walcron-zelda-nav-svelte.ts";
    assetFileNames = "assets/[name][extname]";
    entryFileNames = "[name].js";
  } else {
    console.log("SPA build.");
    input["walcron-zelda-nav-svelte"] = "src/walcron-zelda-nav-svelte.ts";
    assetFileNames = "assets/[name][extname]";
    entryFileNames = "[name].js";
  }
  return defineConfig({
    plugins: [
      svelte({
        emitCss: false,
      }),
    ],
    build: {
      manifest: true,
      rollupOptions: {
        input,
        preserveEntrySignatures: "exports-only",
        output: {
          name: null,
          format: "system",
          entryFileNames,
          assetFileNames,
        },
        external: ["@walcron/zelda-shared-context"],
      },
    },
    base: "/",
  });
}
