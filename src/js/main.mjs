import { getPokemonByPokedexNumber, getSpeciesByPokedexNumber } from "./externalSevices.mjs";
import { renderWithTemplate } from "./utils.mjs";


export async function funFacts() {
    let randomPokemon = Math.floor(Math.random() * 1011);
    if (randomPokemon == 0 || randomPokemon == 1011){
         randomPokemon = 1;
    }
    let pokemonSpecies = await getSpeciesByPokedexNumber(randomPokemon);


    let randomPokemon2 = Math.floor(Math.random() * 1011);
    if (randomPokemon2 == 0 || randomPokemon2 == 1011){
         randomPokemon2 = 1;
    }
    let pokemonSpecies2 = await getSpeciesByPokedexNumber(randomPokemon2);
FunFactImage(pokemonSpecies);
FunFactImage2(pokemonSpecies2);

    
    const pokemonFunFact = document.querySelector(".FunFacts");
    
    
    await renderWithTemplate(pokemonFunFactTemplate,pokemonFunFact,pokemonSpecies);

      const pokemonFunFact2 = document.querySelector(".FunFacts2");
      pokemonSpecies = pokemonSpecies2
      
      await renderWithTemplate(pokemonFunFactTemplate,pokemonFunFact2,pokemonSpecies);
      
      
    };


export function pokemonFunFactTemplate(pokemonSpecies){
    let dexEntry = checkForDexEntry(pokemonSpecies);
    return `
    <h2 id="pokemon-legendary-or-mythical">${isLegendaryorMythical(pokemonSpecies)}</h2>
    <h3 id="pokemon-name">Pokemon: ${pokemonSpecies.name.toUpperCase()}</h3>
    <p id="pokemon-number">Dex Number: ${pokemonSpecies.id}</p>
    <p id="pokemon-dex-entry">Dex Entry: ${dexEntry}</p>
    <span id="pokemon-image">
    
            `
  };


  function checkForDexEntry(pokemonSpecies) {
    if(pokemonSpecies.flavor_text_entries == ""){
        return `Unavailable`;
    }
    else {
        return ` ${pokemonSpecies.flavor_text_entries[0].flavor_text}`;

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

 async function FunFactImage(pokemonSpecies){
    const pokemonImage = await getPokemonByPokedexNumber(pokemonSpecies.id);
    const pokemonFunFact = document.querySelector(".FunFacts");
    const pokemonElementImage = document.createElement("img");
    pokemonElementImage.src = `${pokemonImage.sprites.front_default}`;
    pokemonFunFact.appendChild(pokemonElementImage);
  }

  async function FunFactImage2(pokemonSpecies2){
    const pokemonImage = await getPokemonByPokedexNumber(pokemonSpecies2.id);
    const pokemonFunFact = document.querySelector(".FunFacts2");
    const pokemonElementImage = document.createElement("img");
    pokemonElementImage.src = `${pokemonImage.sprites.front_default}`;
    pokemonFunFact.appendChild(pokemonElementImage);
  }
