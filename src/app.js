/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  // Arrays temáticos
  let who = [
    "Elon Musk",
    "Satoshi Nakamoto",
    "Mi profesor de 4geeks",
    "Un hacker anóninmo",
    "El mercado de criptomonedas",
    "Mi laptop"
  ];

  let action = [
    "minó",
    "hackeó",
    "descompiló",
    "invalidó",
    "copió",
    "miró",
    "quemó"
  ];

  let what = [
    "mi billetera de Bitcoin",
    "mi código en Python",
    "mi contrato inteligente",
    "mi portafolio de inversiones",
    "mi API de Binance",
    "mi clave privada"
  ];

  let when = [
    "mientras dormía",
    "durante un hackathon",
    "cuando el mercado se desplomó",
    "mientras intentaba aprender JavaScript",
    "durante una reunión en Zoom",
    "cuando estaba comprando Ethereum",
    "mientras minaba Dogecoin"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    // Selecciona un elemento aleatorio de cada array
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    // Concatena los elementos para formar la excusa
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  }

  // Asigna la excusa generada al elemento HTML con id "excuse"
  document.getElementById("excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
};
