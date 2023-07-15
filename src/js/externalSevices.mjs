const baseURL = "https://pokeapi.co/api/v2/";
const authURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Response");
      //throw { name: 'servicesError', message: jsonResponse };
      
    }
  }

export async function getPokemonByPokedexNumber(id) {
  const response = await fetch(baseURL + `pokemon/${id}`);
  const pokemon = await convertToJson(response);
   return pokemon;
}

export async function getSpeciesByPokedexNumber(id) {
  const response = await fetch(baseURL + `pokemon-species/${id}`);
  const pokemon = await convertToJson(response);
   return pokemon;
}

export async function getRegionData(id) {
  const response = await fetch(baseURL +`region/${id}`);
  const region = await convertToJson(response);
  return region;
}

export async function loginRequest(creds){
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  };
  const response = await fetch(authURL + "login", options).then(convertToJson);
  return response.accessToken;
}

export async function getRandomPokemon(){
  let randomPokemon = Math.floor(Math.random() * 1011);
  if (randomPokemon == 0 || randomPokemon == 1011){
       randomPokemon = 1;
  }
  
  let pokemon = await getPokemonByPokedexNumber(randomPokemon);
  return pokemon;
};