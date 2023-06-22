import { getPokemonByPokedexNumber} from "./externalSevices.mjs";
import { renderWithTemplate } from "./utils.mjs";

// Main function
export default async function pokemonDetails(pokemonId) {
    const pokemon =   await getPokemonByPokedexNumber(pokemonId);
      if (pokemon === undefined) {
        throw Error();        
      }
      const pokemonDetails = document.querySelector(".pokemon-card");
      await renderWithTemplate(pokemonDetailsTemplate,pokemonDetails,pokemon);

    };


export function pokemonDetailsTemplate(pokemon){
    return `
            <h1 id="pokemonName"> ${pokemon.name}</h1>
            <p id="pokemonNumber">${pokemon.number}</p>
            `
  };