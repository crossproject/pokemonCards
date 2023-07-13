import pokemonDetails from "./pokemonCards.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const startId = 1; 
const endId = 201; 

const pokemonIds = Array.from({ length: endId - startId + 1 }, (_, index) => startId + index);

pokemonDetails(pokemonIds);

