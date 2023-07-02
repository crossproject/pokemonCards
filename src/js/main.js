import { funFacts } from "./main.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";
import { login } from "./auth.mjs";

loadHeaderFooter();

//let randomPokemon = Math.floor(Math.random() * 1011);
funFacts();

const redirect = getParam("redirect");

document.getElementById("login-button").addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  login({ email, password }, redirect);
});
