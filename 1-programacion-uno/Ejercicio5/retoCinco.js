'use strict';

// Un HTML dentro de otro
const passElement = document.querySelector('.password');
const content = '<p> <p class="password">**</p></p>';
passElement.innerHTML = content;

//document.querySelector('p').innerHTML = '**';