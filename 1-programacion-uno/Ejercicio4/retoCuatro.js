'use strict';
/*
Obtenemos el elemento con el que queremos trabajar usando
document.querySelector()
*/

/* var listElement = document.querySelector('.tittle');
// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
listElement.innerHTML = listElement.innerHTML + li; */



document.getElementById('geek1').addEventListener('mouseover',girl1);
document.getElementById('geek2').addEventListener('mouseover',girl2);

function girl1(e){    
    document.querySelector('h1').innerHTML='<h1>La Geek Girl seleccionada es: Carolina García </h1>';
    e.preventDefaul();
}

function girl2(e){       
    document.querySelector('h1').innerHTML='<h1>La Geek Girl seleccionada es: Diana Marcela Paniagua </h1>';
    e.preventDefaul();
}