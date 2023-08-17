// vite.config.ts
import { defineConfig } from "file:///Users/han/Work/codes/nextjs/zelda-microfrontend/zelda-nav-svelte/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///Users/han/Work/codes/nextjs/zelda-microfrontend/zelda-nav-svelte/node_modules/@sveltejs/vite-plugin-svelte/src/index.js";
function vite_config_default(opts) {
  console.log("Executing Vite %s in %s mode...", opts.command, opts.mode);
  const input = {};
  let assetFileNames;
  let entryFileNames;
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
        emitCss: false
      })
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
          assetFileNames
        }
      }
    },
    base: "/"
  });
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvaGFuL1dvcmsvY29kZXMvbmV4dGpzL3plbGRhLW1pY3JvZnJvbnRlbmQvemVsZGEtbmF2LXN2ZWx0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2hhbi9Xb3JrL2NvZGVzL25leHRqcy96ZWxkYS1taWNyb2Zyb250ZW5kL3plbGRhLW5hdi1zdmVsdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2hhbi9Xb3JrL2NvZGVzL25leHRqcy96ZWxkYS1taWNyb2Zyb250ZW5kL3plbGRhLW5hdi1zdmVsdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgc3ZlbHRlIH0gZnJvbSBcIkBzdmVsdGVqcy92aXRlLXBsdWdpbi1zdmVsdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKG9wdHMpIHtcbiAgY29uc29sZS5sb2coXCJFeGVjdXRpbmcgVml0ZSAlcyBpbiAlcyBtb2RlLi4uXCIsIG9wdHMuY29tbWFuZCwgb3B0cy5tb2RlKTtcbiAgY29uc3QgaW5wdXQgPSB7fTtcbiAgbGV0IGFzc2V0RmlsZU5hbWVzOiBzdHJpbmc7XG4gIGxldCBlbnRyeUZpbGVOYW1lczogc3RyaW5nO1xuICBpZiAob3B0cy5tb2RlID09PSBcInN0YW5kYWxvbmVcIikge1xuICAgIGNvbnNvbGUubG9nKFwiU3RhbmRhbG9uZVwiKTtcbiAgICBpbnB1dFtcImluZGV4XCJdID0gXCJpbmRleC5odG1sXCI7XG4gICAgaW5wdXRbXCJ3YWxjcm9uLXplbGRhLW5hdi1zdmVsdGVcIl0gPSBcInNyYy93YWxjcm9uLXplbGRhLW5hdi1zdmVsdGUudHNcIjtcbiAgICBhc3NldEZpbGVOYW1lcyA9IFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiO1xuICAgIGVudHJ5RmlsZU5hbWVzID0gXCJbbmFtZV0uanNcIjtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIlNQQSBidWlsZC5cIik7XG4gICAgaW5wdXRbXCJ3YWxjcm9uLXplbGRhLW5hdi1zdmVsdGVcIl0gPSBcInNyYy93YWxjcm9uLXplbGRhLW5hdi1zdmVsdGUudHNcIjtcbiAgICBhc3NldEZpbGVOYW1lcyA9IFwiYXNzZXRzL1tuYW1lXVtleHRuYW1lXVwiO1xuICAgIGVudHJ5RmlsZU5hbWVzID0gXCJbbmFtZV0uanNcIjtcbiAgfVxuICByZXR1cm4gZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICBzdmVsdGUoe1xuICAgICAgICBlbWl0Q3NzOiBmYWxzZSxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG1hbmlmZXN0OiB0cnVlLFxuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBpbnB1dCxcbiAgICAgICAgcHJlc2VydmVFbnRyeVNpZ25hdHVyZXM6IFwiZXhwb3J0cy1vbmx5XCIsXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgICAgZm9ybWF0OiBcInN5c3RlbVwiLFxuICAgICAgICAgIGVudHJ5RmlsZU5hbWVzLFxuICAgICAgICAgIGFzc2V0RmlsZU5hbWVzLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJhc2U6IFwiL1wiLFxuICB9KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVgsU0FBUyxvQkFBb0I7QUFDbFosU0FBUyxjQUFjO0FBRVIsU0FBUixvQkFBa0IsTUFBTTtBQUM3QixVQUFRLElBQUksbUNBQW1DLEtBQUssU0FBUyxLQUFLLElBQUk7QUFDdEUsUUFBTSxRQUFRLENBQUM7QUFDZixNQUFJO0FBQ0osTUFBSTtBQUNKLE1BQUksS0FBSyxTQUFTLGNBQWM7QUFDOUIsWUFBUSxJQUFJLFlBQVk7QUFDeEIsVUFBTSxPQUFPLElBQUk7QUFDakIsVUFBTSwwQkFBMEIsSUFBSTtBQUNwQyxxQkFBaUI7QUFDakIscUJBQWlCO0FBQUEsRUFDbkIsT0FBTztBQUNMLFlBQVEsSUFBSSxZQUFZO0FBQ3hCLFVBQU0sMEJBQTBCLElBQUk7QUFDcEMscUJBQWlCO0FBQ2pCLHFCQUFpQjtBQUFBLEVBQ25CO0FBQ0EsU0FBTyxhQUFhO0FBQUEsSUFDbEIsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFVBQVU7QUFBQSxNQUNWLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQSx5QkFBeUI7QUFBQSxRQUN6QixRQUFRO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDSDsiLAogICJuYW1lcyI6IFtdCn0K
