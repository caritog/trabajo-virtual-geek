'use strict';

var num = 0;

num = parseInt(prompt("Por favor ingrese un número: "));

if (num === 0) {
    console.log('El número es 0')
  } else if (num < 0) {
    console.log('El número es negativo')
  } else if (num >= 12) {  /* cuando se cumple esta condición, no entra a la siguiente */
    console.log('El número más 2 es mayor 13') 
  } else if (num > 20 && num < 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }