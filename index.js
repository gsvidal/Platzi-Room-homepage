const image = document.querySelectorAll(".hero-image-container");
const description = document.querySelectorAll(".hero-description-container");
const buttonLeft = document.querySelectorAll(".arrow--left-container")
const buttonRight = document.querySelectorAll(".arrow--right-container");
const buttonHamburger = document.getElementById("hamburger-menu");
const headerMenu = document.querySelector(".menu-nav");
const header = document.getElementById("header");
const logoImg = document.querySelector(".logo-img");
const darkFilter = document.querySelector(".dark-filter");
const tablet = window.matchMedia('screen and (min-width: 800px)');
var cont = 0; //si es par es menu es off

validation(tablet);
tablet.addEventListener("change", validation);
function validation(event) {
  if (event.matches) {
buttonHamburger.removeEventListener('click',burgerMenu);
    
  }
  else {
buttonHamburger.addEventListener('click',burgerMenu)
  }
  if(cont % 2 !== 0) {burgerMenu();} 

}

buttonLeft.forEach(function(button) {
  button.addEventListener("click", prevSlide); 
});
buttonRight.forEach(function(button) {
  button.addEventListener("click", nextSlide); 
});
document.addEventListener("keyup", keyPressed);

function burgerMenu() {
  cont ++;
  buttonHamburger.classList.toggle("iconX-menu");
  headerMenu.classList.toggle("none");
  header.classList.toggle("headerS");
  logoImg.classList.toggle("none");
  darkFilter.classList.toggle("none");
} 

function nextSlide() {
  var i;
  for(let j = 0; j<image.length; j++) {
    if(!image[j].classList.contains("none")){
      i = j;
    }
  }
    
  image[i].classList.toggle("none");
  description[i].classList.toggle("none");
    
  if ( i+1 !== image.length) {
    image[i+1].classList.toggle("none");
    description[i+1].classList.toggle("none");
  } else {
      image[i - (image.length - 1)].classList.toggle("none");
      description[i - (description.length - 1)].classList.toggle("none");
    }
}    

function prevSlide() {
  var i;
  for(let j = 0; j<image.length; j++) {
    if(!image[j].classList.contains("none")){
      i = j;
    }
  }
    image[i].classList.toggle("none");
    description[i].classList.toggle("none");
    if( i === 0) {
    image[image.length - 1].classList.toggle("none");
    description[description.length - 1].classList.toggle("none");
    }
    else {
      image[i-1].classList.toggle("none");
      description[i-1].classList.toggle("none");
    } 
}    

function keyPressed(event) {
  if(event.keyCode === 39) {
    nextSlide();
  }
  if(event.keyCode === 37) {
    prevSlide();
  }
}

  

