/* Imagina que vamos a la frutería y compramos lo siguiente:
2 kilos de kiwis a 5€/kg
3 kilos de peras conferencia (no una cualquiera) a 2€/kg
medio kilo de uvas a 4€/kg
Con lo que hemos visto durante los ejemplos y textos anteriores y 
usando JavaScript, vamos a calcular el precio total como si lo hiciésemos 
en una hoja de toda la vida pero de manera mucho más guay. El resultado debe 
mostrarse en la consola del navegador. */

'use strict';

var kiwis = 2;
var precioKiwis = 5;
var peras = 3;
var precioPeras = 2;
var uvas = 1/2;
var precioUvas = 4;
var operacion;

operacion = ((2 * 5) + (3 * 2) + (1/2 * 4));

console.log('En total las frutas costaron: ' + operacion ,'euros');
