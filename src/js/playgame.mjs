import { getRandomPokemon } from "./externalSevices.mjs"
import { baseStatTotal } from "./pokemonCards.mjs";



export default async function startNewGame(newStadium=false) {
  // Main function: Start the game, set the variables
  // renders the images and buttons
  let playerScore = 0;
  let playerLives = 6;

  let playerPokemon = {
    name: "",
    image: "",
    stats: 0
  };

  let enemyPokemon = {
      name: "",
      image: "",
      stats: 0
  };

  const stadium = document.querySelector("#stadium");
  displayStadium(stadium, newStadium);

  const gameboard = document.querySelector("#gameboard");
  displayGameboard();

  const buttonSelector = document.querySelector("#action-buttons");
  displayActionButtons(buttonSelector);
  
  document.querySelector("#battle-result").innerHTML = "";

  async function displayGameboard(){
  // Renders Pokemons, Lives and Score
    await getNewPokemon(playerPokemon);
    await getNewPokemon(enemyPokemon);

    const playerDisplayPokemon = document.querySelector("#player-pokemon");
    displayPokemon(playerDisplayPokemon,playerPokemon)

    const oponentDisplayPokemon = document.querySelector("#oponent-pokemon");
    displayPokemon(oponentDisplayPokemon,enemyPokemon,false)

    const lifeSelector = document.querySelector("#player-life");
    displayLife(lifeSelector,playerLives)

    const scoreSelector = document.querySelector("#player-score");
    displayScore(scoreSelector,playerScore)

  }
  
  
  function displayNewGameButton(selector) {
    // Render New Game button (used in Game Over situation)
    selector.innerHTML = "";
    const newGameButton = document.createElement("button");
    newGameButton.textContent = "New Game";
    
    newGameButton.addEventListener("click", function(e){
      e.preventDefault();
      startNewGame(true);
    })
    selector.appendChild(newGameButton);
    }

  

  function displayRestartButton(selector) {
    // Render Restart button (after battle)
    selector.innerHTML = "";
    const restartButton = document.createElement("button");
    restartButton.textContent = "New Battle";
    
    restartButton.addEventListener("click", function(e){
      e.preventDefault();
      displayGameboard();
      selector.innerHTML = "";
      displayActionButtons(selector);
    })
    selector.appendChild(restartButton);
  }

  
  function displayActionButtons(selector){
    // Display player option buttons and
    // their respective event
    selector.innerHTML="";
    const button1 = document.createElement("button");
    button1.textContent = "Bluey Win";
    button1.value = 1;
    button1.addEventListener("click", function(e){
      e.preventDefault();
      let result = battleResult(playerPokemon,enemyPokemon);
      compareResult(result,this.value,selector);
    });


    const button2 = document.createElement("button");
    button2.textContent = "Reedo Win";
    button2.value = 2;
    button2.addEventListener("click", function(e){
      e.preventDefault();
      let result = battleResult(playerPokemon,enemyPokemon);
      compareResult(result,this.value,selector);
    });

    selector.appendChild(button1);
    selector.appendChild(button2);
  }

  function battleResult(playerPokemon, enemyPokemon) {
    // Compares Pokemon stats

    if (playerPokemon.stats === enemyPokemon.stats) {
      // Draw
      return 0;
    } else if (
      playerPokemon.stats > enemyPokemon.stats
    ) {
      // Player Pokemon Wins
      return 1;

    } else {
      // Player Pokemon Loses
      return 2;    
    }
  }

  function compareResult(result,playerOption,buttonDiv) {
    // Trigger action using the battle
    // result
    if (result == playerOption) {
      playerActionResult(1,buttonDiv);
    } else if(
      result != playerOption || result != 0
    ) {
      playerActionResult(2,buttonDiv);
    } else {
      playerActionResult(0,buttonDiv);
    }
  }

  function playerActionResult(choice,buttonDiv) {
    // Execute action for player choice
    const lifeSelector = document.querySelector("#player-life");
    const scoreSelector = document.querySelector("#player-score");
    
      switch (choice) {
          case 0:
              displayBattleResult("Draw!");
              displayRestartButton(buttonDiv);
              return;
          case 1:
              displayBattleResult("You Win!");
              playerScore += calculateScoreDifference( playerPokemon.stats, enemyPokemon.stats );
              displayScore(scoreSelector,playerScore);
              displayRestartButton(buttonDiv);
              return;
          case 2:
              playerLives--;
              playerScore -= calculateScoreDifference( playerPokemon.stats, enemyPokemon.stats );

              if(playerLives <= 0) {
                // Game Over situation
                break;
              }

              displayBattleResult("You Lose!");
              displayScore(scoreSelector,playerScore);
              displayLife(lifeSelector,playerLives);
              displayRestartButton(buttonDiv);
              return;
        };
      
      // Execute Game Over situation
      playerScore -= calculateScoreDifference( playerPokemon.stats, enemyPokemon.stats );
      displayScore(scoreSelector,playerScore);
      displayLife(lifeSelector,playerLives);
      displayGameOver();
    
  }

  function displayGameOver(){
    // Display Game Over and New Game button
    displayBattleResult("GAME OVER");
    const buttonSelector = document.querySelector("#action-buttons");
    displayNewGameButton(buttonSelector);
  }

  function calculateScoreDifference(statsA, statsB) {
    // Calculate difference between
    // two stats
    return Math.abs(statsA - statsB);
  }

  async function getNewPokemon(pokemon) {
    // Get a New Pokemon and save
    // into pokemon object
      let newPokemon = await getRandomPokemon();
      pokemon.name = newPokemon.name;
      pokemon.image = newPokemon.sprites.front_default;
      pokemon.stats = baseStatTotal(newPokemon);
  }

  function displayLife(selector, playerLives) {
    // Render pokeball as life
    selector.innerHTML = "";
    let lifeHTML = "";
    for (let i = 0; i < playerLives; i++) {
        lifeHTML += '<img src="/images/pokeball.png" alt="Life">';
      }
    selector.innerHTML = lifeHTML;      
  }

  function displayScore(selector,playerScore) {
    // Render actual Score
      selector.querySelector("span").innerHTML = playerScore;
  }

  function displayStadium(selector,clean=true) {
    // Render a Stadium
    // True: Remove first element
    // (Use it in New Game)
    if(clean){
      selector.firstElementChild.remove();
    }
      let stadiumNumber = Math.ceil(Math.random() * 4);
      let stadiumBackground = `<img src="/images/stadium-${stadiumNumber}.jpg" alt="Stadium-${stadiumNumber}">`;
      selector.insertAdjacentHTML("afterbegin",stadiumBackground);
  }

  function displayPokemon(selector,pokemon,rotate=true) {
    // Render Pokemon
      selector.innerHTML = "";

      let newPokemonImg = document.createElement("img");

      newPokemonImg.src = pokemon.image;
      newPokemonImg.alt = pokemon.name;
      if(rotate){
          newPokemonImg.classList.add("player-pokemon");
      };
      
      selector.appendChild(newPokemonImg);
      
  }

  function displayBattleResult (result){
    // Render battle result
    // (also can be used for Game Over)
    const selector = document.querySelector("#battle-result");
    selector.innerHTML = `<h3>${result}</h3>`;
  }

}
