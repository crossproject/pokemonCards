import { getPokemonByPokedexNumber } from "./externalSevices.mjs";

export default async function pokemonDetails(pokemonIds) {
  try {
    const container = document.querySelector(".pokemon-cards");

    for (const pokemonId of pokemonIds) {
      const pokemon = await getPokemonByPokedexNumber(pokemonId);
      if (pokemon === undefined) {
        console.error(`Pokemon with ID ${pokemonId} not found.`);
        continue;
      }
      const template = generatePokemonDetailsTemplate(pokemon);
      renderPokemonDetails(template, container);
    }

    const regionMons =  getParam("pokemon");
    if (regionMons != null) {
      document.getElementById("chooseRegion").value = regionMons;
    }
    console.log(document.getElementById("chooseRegion").selectedIndex)
    document.getElementById("chooseRegion").addEventListener("change", selectRegion);

  } catch (error) {
    console.error(error);
  }
}


export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const pokemon = urlParams.get(param);
  return pokemon;
}

export function generatePokemonDetailsTemplate(pokemon) {
  return `
    <div class="pokemon-card">
      <h1 id="pokemonName"> ${pokemon.name}</h1>
      <img id="pokemonImage" src="${pokemon.sprites.front_default}">
      <hr class="card-line">
      <p id="pokemonNumber">Dex number: ${pokemon.id}</p>
      <p id="regionOfOrigin">Region: ${getRegion(pokemon)}</p>
      <p id="pokemonHeight">Height: ${pokemon.height / 10} m</p>
      <p id="pokemonWeight">Weight: ${pokemon.weight / 10} kg</p>
      <p id="pokemonType1">Type: ${pokemon.types[0].type.name} ${type2(pokemon)}</p>
      <p id="pokemonAbility">Ability: ${pokemon.abilities[0].ability.name}</p>
      <p id="statTotal">Base Stat total: ${baseStatTotal(pokemon)}</p>
    </div>
  `;
}

export function renderPokemonDetails(template, container) {
  const card = document.createElement("div");
  card.innerHTML = template;
  container.appendChild(card);
}

export function selectRegion() {
  let startId = 0;
  let endId = 0;

  // Clear the existing pokemon cards
  document.querySelector(".pokemon-cards").innerHTML = "";

  if (this.value == "All") {
    startId = 1;
    endId = 1010;
  } else if (this.value == "Kanto") {
    startId = 1;
    endId = 151;
  } else if (this.value == "Johto") {
    startId = 152;
    endId = 251;
  } else if (this.value == "Hoenn") {
    startId = 252;
    endId = 386;
  } else if (this.value == "Sinnoh") {
    startId = 387;
    endId = 493;
  } else if (this.value == "Unova") {
    startId = 494;
    endId = 649;
  } else if (this.value == "Kalos") {
    startId = 650;
    endId = 721;
  } else if (this.value == "Alola") {
    startId = 722;
    endId = 809;
  } else if (this.value == "Galar") {
    startId = 810;
    endId = 898;
  } else if (this.value == "Hisui") {
    startId = 899;
    endId = 1010;
  }

  const pokemonIds = Array.from(
    { length: endId - startId + 1 },
    (_, index) => startId + index
  );
  pokemonDetails(pokemonIds);
}

function type2(pokemon) {
  if (pokemon.types[1] !== undefined) {
    return `${pokemon.types[1].type.name}`;
  } else {
    return "";
  }
}

function baseStatTotal(pokemon) {
  let total = 0;
  for (let i = 0; i < pokemon.stats.length; i++) {
    total += pokemon.stats[i].base_stat;
  }
  return total;
}



function getRegion(pokemon) {
  if (pokemon.id < 152) {
    return "Kanto";
  } else if (pokemon.id > 151 && pokemon.id < 252) {
    return "Johto";
  } else if (pokemon.id > 251 && pokemon.id < 387) {
    return "Hoenn";
  } else if (pokemon.id > 386 && pokemon.id < 494) {
    return "Sinnoh";
  } else if (pokemon.id > 493 && pokemon.id < 650) {
    return "Unova";
  } else if (pokemon.id > 649 && pokemon.id < 722) {
      return "Kalos";
    }
    else if (pokemon.id > 721 && pokemon.id < 810) {
      return "Alola";
    }
    else if (pokemon.id > 809 && pokemon.id < 906) {
      return "Galar/Hisui";
    }
    else if (pokemon.id > 905 && pokemon.id < 1010) {
      return "Paldea";
    }
  }