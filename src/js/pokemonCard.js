import pokemonDetails from "./pokemonCards.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const pokemonIdsGroup1 = [150, 151, 152, 1]; 
const pokemonIdsGroup2 = [25, 26, 27, 10]; 
const pokemonIdsGroup3 = [100, 30, 2, 40]

const pokemonIdsArray = [pokemonIdsGroup1, pokemonIdsGroup2, pokemonIdsGroup3]; // Array of arrays

for (const pokemonIds of pokemonIdsArray) {
  pokemonDetails(pokemonIds);
}
