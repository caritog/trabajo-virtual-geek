'use strict';

var nombre1 = 'Carolina';
var nombre2 = 'Diana';
var usuario;

usuario = prompt("Por favor ingrese su nombre: ");

if (usuario === nombre1 || usuario === nombre2) {
    console.log('Bienvenida, ' +  usuario); // Esta línea se ejecuta solo si se cumple la condición
} else {
    console.log('Lo siento, pero el usuario que has introducido no está registrado'); // Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
}