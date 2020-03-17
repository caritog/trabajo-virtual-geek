/* Usando JavaScript, haremos que:
Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'
Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos' */

'use strict';

const arcoirisSection=document.querySelector('div');

if (arcoirisSection.classList.contains('warning')) {
    arcoirisSection.innerHTML='<h1>AVISO</h1><p>Tenga cuidado</p>';
}
else if (arcoirisSection.classList.contains('error')) { 
    arcoirisSection.innerHTML='<h1>ERROR</h1><p>Ha surgido un error</p>';
}
else if (arcoirisSection.classList.contains('success')) { 
    arcoirisSection.innerHTML='<h1>CORRECTO</h1><p>Los datos son correctos</p>';
}