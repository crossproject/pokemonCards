const baseURL = "https://pokeapi.co/api/v2/";

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
  console.log(pokemon);
   return pokemon;
}