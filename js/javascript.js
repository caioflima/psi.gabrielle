let telaLoading = document.querySelector('.tela-loading');
window.addEventListener('load', function(){
	telaLoading.parentElement.removeChild(telaLoading);
});

let magicform = document.querySelector('#magicform');
console.log(magicform)
let buttonanimation = document.querySelector('#button-form');
console.log(buttonanimation)
buttonanimation.addEventListener('click', function(){
	magicform.classList.toggle('animeformularios');

})

var i = 0;
var txt = 'GabrielleNavarro'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("nome-banner").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

