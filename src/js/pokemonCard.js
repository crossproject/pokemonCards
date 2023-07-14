import { getParam, selectRegion } from "./pokemonCards.mjs";
import pokemonDetails from "./pokemonCards.mjs";
import { loadHeaderFooter } from "./utils.mjs";


const region = getParam("pokemon");

if (region != null) {
    selectRegion();
}

else {
    const startId = 1; 
const endId = 201; 

const pokemonIds = Array.from({ length: endId - startId + 1 }, (_, index) => startId + index);
pokemonDetails(pokemonIds);
}

loadHeaderFooter();








