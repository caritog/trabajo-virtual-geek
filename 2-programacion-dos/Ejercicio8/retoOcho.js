/* DATOS
const firstDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://dog.ceo/api/img/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://dog.ceo/api/img/schipperke/n02104365_8156.jpg';
const thirdDogName = 'Lana'; */


'use strict';

const listElement = document.querySelector('.list');
const content = '<li> <labe>Dina</label><a href="#"><img src="https://misanimales.com/wp-content/uploads/2018/09/que-nombre-ponerle-a-tu-perrita.jpg" width="100px"> </a> </li><li> <labe>Luna</label> <a href="#"><img src="https://nombresparaperros.pet/wp-content/uploads/2019/01/nombres-de-perritas-16x9.jpg" width="100px"> </a> </li><li> <labe>Lana</label><a href="#"><img src="https://significadodenombres.net/wp-content/uploads/2016/06/perrita-hembra.jpg" width="100px"> </a> </li>';
listElement.innerHTML = content; 

