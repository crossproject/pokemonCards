import { getRandomPokemon } from "./externalSevices.mjs"
import { baseStatTotal } from "./pokemonCards.mjs";


// Función para comparar los stats y determinar el resultado de la batalla
function battleResult(playerPokemon, enemyPokemon) {

  // Comparar las elecciones y determinar el resultado
  if (playerPokemon.stats === enemyPokemon.stats) {
    // Draw
    return 0;
  } else if (
    playerPokemon.stats > enemyPokemon.stats
  ) {
    // Player Win
    return 1;

  } else {
    // Player Lose
    return 2;    
  }
}

function playerActionResult(choice) {
    switch (choice) {
        case 0:
            // Empate
            break;
        case 1:
            // Player Win
        break;
        case 2:
            // Player Lose
            break;
    }
}

export async function getNewPokemon(pokemon) {
    let newPokemon = await getRandomPokemon();
    pokemon.name = newPokemon.name;
    pokemon.image = newPokemon.sprites.front_default;
    pokemon.stats = baseStatTotal(newPokemon);
}

// let playerName = "";
// let playerScore = 0;
// let playerLives = 6;


// export default function startNewGame(){

//     // crear un nuevo jugador
//     // crear score
//     // generar lifepoints
//     // obtener un pokemon
//     // generar pokemon oponente


//     const player = {
//         name: "Player",
//         score: 0,
//         life: 6,
//         init: async function (name) {
//             this.name = prompt("Ingresa tu Nombre");
//         }}

//     player.init();
    

        
// };

// // Definición de variables

// // Objeto Pokémon del jugador
// var playerPokemon = {
//   name: "Pikachu",
//   image: "pikachu.png",
//   stats: {
//     attack: 50,
//     defense: 40,
//     speed: 60
//   }
// };

// // Objeto Pokémon del enemigo
// var enemyPokemon = {
//   name: "Charizard",
//   image: "charizard.png",
//   stats: {
//     attack: 70,
//     defense: 60,
//     speed: 80
//   }
// };

// // Función para comparar los stats y determinar el resultado de la batalla
// function battleResult(playerChoice) {
//   // Generar un número aleatorio entre 1 y 3 para simular la elección del enemigo
//   var enemyChoice = Math.floor(Math.random() * 3) + 1;

//   // Comparar las elecciones y determinar el resultado
//   if (playerChoice === enemyChoice) {
//     // Empate
//     console.log("Empate. ¡Juega otra ronda!");
//   } else if (
//     (playerChoice === 1 && enemyChoice === 3) ||
//     (playerChoice === 2 && enemyChoice === 1) ||
//     (playerChoice === 3 && enemyChoice === 2)
//   ) {
//     // El jugador gana
//     var scoreDifference = calculateScoreDifference(playerPokemon.stats, enemyPokemon.stats);
//     playerScore += scoreDifference;
//     console.log("¡Ganaste! Sumaste " + scoreDifference + " puntos.");
//   } else {
//     // El enemigo gana
//     var scoreDifference = calculateScoreDifference(enemyPokemon.stats, playerPokemon.stats);
//     playerScore -= scoreDifference;
//     playerLives--;
//     console.log("Perdiste. Restaste " + scoreDifference + " puntos y perdiste una vida.");
//   }

//   // Mostrar el puntaje y vidas del jugador
//   console.log("Puntaje: " + playerScore);
//   console.log("Vidas restantes: " + playerLives);

//   // Verificar si el juego ha terminado
//   if (playerLives <= 0) {
//     console.log("Fin del juego. ¡Has perdido todas tus vidas!");
//     // Aquí puedes agregar cualquier acción adicional que desees al finalizar el juego
//   }
// }

// // Función para calcular la diferencia de stats entre dos Pokémon
// function calculateScoreDifference(statsA, statsB) {
//   var difference = 0;
//   for (var stat in statsA) {
//     difference += Math.abs(statsA[stat] - statsB[stat]);
//   }
//   return difference;
// }

// // Ejemplo de uso:
// playerName = prompt("Ingresa tu nombre:");
// console.log("Bienvenido(a), " + playerName + "!");

// // Mostrar información del Pokémon del jugador
// console.log("Tu Pokémon:");
// console.log("Nombre: " + playerPokemon.name);
// console.log("Imagen: " + playerPokemon.image);
// console.log("Stats: ", playerPokemon.stats);

// // Mostrar información del Pokémon del enemigo
// console.log("Pokémon del enemigo:");
// console.log("Nombre: " + enemyPokemon.name);
// console.log("Imagen: " + enemyPokemon.image);
// console.log("Stats: ", enemyPokemon.stats);

// // Simular la elección del jugador (puedes cambiar el número para probar diferentes resultados)
// var playerChoice = parseInt(prompt("Elige: 1) Ataque, 2) Defensa, 3) Velocidad"));
// battleResult(playerChoice);
