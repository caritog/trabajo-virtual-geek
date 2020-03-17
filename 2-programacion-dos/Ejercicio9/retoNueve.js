/* Toda cadena en JavaScript tiene una longitud, esta se puede consultar mediante la propiedad length. 
const browserName = 'Mozilla';
console.log('Mozilla is ' + browserName.length + ' code units long');  */

'use strict';

const name = 'DianaMarcelaPaniagua';
console.log('El nombre de mi compañera es: ' + name, ' y está compuesto por ' + name.length, 'caracteres.' );
document.querySelector('body').innerHTML =`<h3>El nombre de mi compañera es Diana Marcela Paniagua, y está compuesto por ${name.length} caracteres.</h3>`;

// document.write(`El nombre de mi compañera es: ${name}, y está compuesto por 20 caracteres.`); 
// document.write("El nombre de mi compañera es: " + name, ", y está compuesto por 20 caracteres."); 