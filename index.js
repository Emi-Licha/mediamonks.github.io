const SECTIONS = 8;
const TRANSLATION_PER_SECTION = 5.95;
const arrowLeft = document.querySelector("#arrowprev");
const arrowRight = document.querySelector("#arrownext")
var position = 1;

arrowLeft.addEventListener("click", function() {
  slideLeft();
});

arrowRight.addEventListener("click", function(){
  showUp();
  slideRight();
});

window.setTimeout(function() {
  let container = document.querySelector(".container");
  let monk = document.querySelector("#monk");
  let patience = document.querySelector("#patience");
  let footer = document.querySelector(".footer");
  let showOne = document.querySelector("#showOne");
  let arrowprev = document.querySelector("#arrowprev");
  let arrownext = document.querySelector("#arrownext");
  arrowprev.style.display = "unset";
  arrownext.style.display = "unset";
  showOne.style.display = "unset";
  footer.style.display = "unset";
  patience.style.display = "none";
  container.style.display = "unset";
  monk.style.display = "none";
}, 5000)


function updateTranslation(translation) {
  let sliderImages = document.querySelector(".slider");
  sliderImages.style.transform = "translate(-"+ translation +"%)";
}

// Show prev
function slideLeft() {
  
  if (position == 0) {
    arrowLeft.style.display = "none";
    return;
  }

  position--;
  updateTranslation(position * TRANSLATION_PER_SECTION);
}

// Show next
function slideRight() {
  const arrowLeft = document.querySelector("#arrowprev");
  const arrowRight = document.querySelector("#arrownext");
  arrowLeft.style.display = "unset";
  if (position == SECTIONS) {
    
    arrowRight.style.display = "none";
    return;
  }

  position++;
  updateTranslation(position * TRANSLATION_PER_SECTION)
}
const showTwo = document.querySelector("#showTwo");
function showUp(){
  if(position == 1){
    const showTwo = document.querySelector("#showTwo");
    showTwo.style.display="unset";

  } else{
    showTwo.style.display="none";
  }
};