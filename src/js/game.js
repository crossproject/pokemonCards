import { loadHeaderFooter } from "./utils.mjs";

import {getNewPokemon} from "./playgame.mjs";

loadHeaderFooter();


// Definición de variables
let playerName = ""; // Nombre del jugador
let playerScore = 0; // Puntaje del jugador
let playerLives = 6; // Vidas del jugador

// Objeto Pokémon del jugador
let playerPokemon = {
  name: "",
  image: "",
  stats: 0
};

// Objeto Pokémon del enemigo
let enemyPokemon = {
    name: "",
    image: "",
    stats: 0
};


await getNewPokemon(playerPokemon);


//  // El jugador gana
//  let scoreDifference = calculateScoreDifference(playerPokemon.stats, enemyPokemon.stats);
//  playerScore += scoreDifference;
//  console.log("¡Ganaste! Sumaste " + scoreDifference + " puntos.");

// // El enemigo gana
// let scoreDifference = calculateScoreDifference(enemyPokemon.stats, playerPokemon.stats);
// playerScore -= scoreDifference;
// playerLives--;
// console.log("Perdiste. Restaste " + scoreDifference + " puntos y perdiste una vida.");

//  // Mostrar el puntaje y vidas del jugador
//  console.log("Puntaje: " + playerScore);
//  console.log("Vidas restantes: " + playerLives);

//  // Verificar si el juego ha terminado
//  if (playerLives <= 0) {
//    console.log("Fin del juego. ¡Has perdido todas tus vidas!");
//    // Aquí puedes agregar cualquier acción adicional que desees al finalizar el juego


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
