/* Calcular el número total de horas que hemos vivido
En este caso vamos a crear un código que nos diga cuantas 
horas en total hemos vivido. Por ejemplo, si alguien tiene 60 años, 
este código debería de mostrar un mensaje con el número "525600". */


/* Vamos a duplicar el ejercicio 5 y a modificarlo, recogiendo la 
edad con la que vamos a operar de una etiqueta que prepararemos en HTML. */

'use strict';

var edad = parseInt(prompt('Ingrese su edad: '));
var horasVividas;

horasVividas = edad * 8760;
console.log('Ud a vivido ' + horasVividas , 'horas');