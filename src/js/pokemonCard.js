import pokemonDetails from "./pokemonCards.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const pokemonIdsGroup1 = [150, 151, 152]; // First group of Pokemon IDs
const pokemonIdsGroup2 = [25, 26, 27]; // Second group of Pokemon IDs

const pokemonIdsArray = [pokemonIdsGroup1, pokemonIdsGroup2]; // Array of arrays

for (const pokemonIds of pokemonIdsArray) {
  pokemonDetails(pokemonIds);
}
