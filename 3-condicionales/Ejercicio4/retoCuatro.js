/* El primer año de un perro equivale a 15 años de humano
El segundo año de un perro equivale a nueve años de humano
A partir del tercero, cada año de perro equivale a 5 años de humano. */

'use strict';

var num = 0;

num = parseInt(prompt("Por favor ingrese los años de vida que tiene su perro: "));

if (num === 1) {
    console.log('La edad de su perro equivale a 15 años de humano')
  } else if (num === 2) {
    console.log('La edad de su perro equivale a 24 años de humano')
  } else if (num >= 3) {  
    console.log('La edad de su perro equivale a: ' + (((num-2) * 5) + 24) + 'años de humano') // Menos 2 porque es a patir del tercer año que se hace ésta operación
  } else if (num <= 0) {
    console.log('Por favor ingrese la edad de su perro correctamente, recuerde que debe digitar un número entero mayor a cero')
  } else {
    console.log('Dato erróneo')
  }