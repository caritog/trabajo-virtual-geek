'use strict';
/*
Obtenemos el elemento con el que queremos trabajar usando
document.querySelector()
*/
var paragraphElement = document.querySelector('.paragraph');
// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
paragraphElement.innerHTML = paragraphElement.innerHTML + ' Mundo';