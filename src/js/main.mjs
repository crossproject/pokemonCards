import { getPokemonByPokedexNumber, getSpeciesByPokedexNumber } from "./externalSevices.mjs";
import { renderWithTemplate } from "./utils.mjs";


export async function funFacts() {
    let randomPokemon = Math.floor(Math.random() * 1011);
    if (randomPokemon == 0 || randomPokemon == 1011){
         randomPokemon = 1;
    }
    let pokemonSpecies = await getSpeciesByPokedexNumber(randomPokemon);
    let pokemon = await getPokemonByPokedexNumber(randomPokemon);

  //  console.log(pokemonSpecies.flavor_text_entries[6].language.name);
    console.log(pokemonSpecies.name);
    console.log(pokemonSpecies);

      const pokemonFunFact = document.querySelector(".FunFacts");
      await renderWithTemplate(pokemonFunFactTemplate,pokemonFunFact,pokemonSpecies);
    //  await renderWithTemplate(pokemonFunFactTemplate,pokemonFunFact,pokemon);

    };


export function pokemonFunFactTemplate(pokemonSpecies){
    return `
    <h2 id="pokemon-legendary-or-mythical">${isLegendaryorMythical(pokemonSpecies)}</h2>
    <h3 id="pokemon-name">Pokemon: ${pokemonSpecies.name.toUpperCase()}</h3>
    <p id="pokemon-number">Dex Number: ${pokemonSpecies.id}</p>
    <p id="pokemon-dex-entry">Dex Entry: ${checkForDexEntry(pokemonSpecies)}</p>
            `
  };


  function checkForDexEntry(pokemonSpecies) {
    if(pokemonSpecies.flavor_text_entries == ""){
        return `Unavailable`;
    }
    else {


        return ` ${pokemonSpecies.flavor_text_entries[6].flavor_text}`;
    }
  }

  function isLegendaryorMythical(pokemonSpecies) {
    if (pokemonSpecies.is_legendary === true){
        return `Legendary Pokemon!`;
    }
    else if (pokemonSpecies.is_mythical === true) {
        return `Mythical Pokemon!`;
    }
    else {
        return ``;
    }
  }

