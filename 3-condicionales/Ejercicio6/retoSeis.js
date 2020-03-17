/* Reescribe el código del ejemplo anterior utilizando un ternario en lugar de un if...else. */

/* let avocados;
const avocadoPrice = 1.5;
const money = 33;

if (money >= avocadoPrice) {
    avocados = money / avocadoPrice;
} else {
    avocados = 0;
}  */

// EL EJEMPLO CON TERNARIO QUEDARÍA ASÍ
'use strict';

let avocados;
const avocadoPrice = 1.5;
const money = 33;

(money >= avocadoPrice) ? avocados = money / avocadoPrice : avocados = 0;