const image = document.querySelectorAll(".hero-image-container");
const description = document.querySelectorAll(".hero-description-container");
const buttonLeft = document.querySelectorAll(".arrow--left-container")
var buttonRight = document.querySelectorAll(".arrow--right-container");

buttonLeft.forEach(function(button) {
  button.addEventListener("click", prevSlide); 
});
buttonRight.forEach(function(button) {
  button.addEventListener("click", nextSlide); 
});

 
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



  

