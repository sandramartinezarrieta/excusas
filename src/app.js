/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// funcion carga de window
window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let nombre = who[Math.floor(Math.random() * who.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let donde = when[Math.floor(Math.random() * when.length)];
  let randomphrase = nombre + " " + que + " " + donde;

  console.log(randomphrase);
};
//evento del boton
document.getElementById("mybuton").addEventListener("click", function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let nombre = who[Math.floor(Math.random() * who.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let donde = when[Math.floor(Math.random() * when.length)];
  let randomphrase = nombre + " " + que + " " + donde;

  document.getElementById("excuse").innerHTML = randomphrase;
});
