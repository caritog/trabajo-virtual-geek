/* ¡Págame, tía!
Nos vamos de cena de Navidad, ¡qué alegría! Somos en total 9 personas y
la cuenta del restaurante japonés es de 128€. Ana tiene que pagar 2€ más
que los demás porque ha pedido un chupito de sake. ¿Cuánto tenemos que
pagar cada una? ¿Y Ana? Hagamos un pequeño programa en JavaScript para
calcularlo. El resultado debe mostrarse en la consola del navegador. */

'use strict';

var totalPersonas = 9;
var cuentaRestaurante = 128;
var totalPago;
var pagoAna;

totalPago = cuentaRestaurante - 2;
totalPago =  totalPago / totalPersonas;
console.log('En total, ocho de las nueve personas deben pagar: ' + totalPago, 'euros');

pagoAna = totalPago + 2; 
console.log('Y Ana debe pagar: ' + pagoAna, 'euros'); 
