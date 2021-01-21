const SECTIONS = 7;
const TRANSLATION_PER_SECTION = 5;
var position = 0;

function onLoad() {
  var arrowLeft = document.querySelector("#arrowprev");
  let arrowRight = document.querySelector("#arrownext");
  // Left arrow click
  arrowLeft.addEventListener("click", function() {
    slideLeft();
  });

  // Right arrow click
  arrowRight.addEventListener("click", function() {
    slideRight();
  });

}

window.onload = onLoad;


function updateTranslation(translation) {
  let sliderImages = document.querySelector(".slider");
  sliderImages.style.transform = "translate(-"+ translation +"%)";
}

// Show prev
function slideLeft() {
  if (position == 0) {
    return;
  }

  position--;
  updateTranslation(position * TRANSLATION_PER_SECTION);
}

// Show next
function slideRight() {
  if (position == SECTIONS) {
    return;
  }

  position++;
  updateTranslation(position * TRANSLATION_PER_SECTION)
}
