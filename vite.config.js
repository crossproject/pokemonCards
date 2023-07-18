import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        pokemonCards: resolve(__dirname, "src/pokemonCards.html"),
        regions: resolve(__dirname, "src/regions/index.html"),
        game: resolve(__dirname,"src/game/index.html")
      },
    },
  },
});
