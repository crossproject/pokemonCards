import { funFacts } from "./main.mjs";
import { loadHeaderFooter, getParam, getLocalStorage } from "./utils.mjs";
import { login, isTokenValid } from "./auth.mjs";
import { showSlides } from "./carousel.js";

const token = getLocalStorage("so_token")

loadHeaderFooter();

//let randomPokemon = Math.floor(Math.random() * 1011);
funFacts();
showSlides();
const redirect = getParam("redirect");

document.getElementById("login-button").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  login({ email, password }, redirect);
});

if(isTokenValid(token)){
  document.querySelector("#login-div").style.display = "none";
}