const SECTIONS = 8;
const TRANSLATION_PER_SECTION = 5.95;
const arrowLeft = document.querySelector("#arrowprev");
const arrowRight = document.querySelector("#arrownext");
const sliderImages = document.querySelector(".slider");
const texts = document.getElementById("texts").children;
const indicatorParents = document.querySelector(".footer ul");
let first = false;
var position = 0;

updateTexts();

arrowLeft.addEventListener("click", function() {
  slideLeft();
  updateTexts();
});

arrowRight.addEventListener("click", function(){
  slideRight();
  updateTexts();
});

window.setTimeout(function() {
  let container = document.querySelector(".container");
  let loading = document.querySelector("#loading");
  let footer = document.querySelector(".footer");
  footer.style.display = "unset";
  container.style.display = "unset";
  loading.style.display = "none";
}, 3000)


function updateTranslation(translation) {

  sliderImages.style.transform = "translate("+ (translation) * -5.95 +"%)";
}

//Selector
document.querySelectorAll(".footer ul li").forEach(function(indicator, ind){
  indicator.addEventListener("click", function(){
    position = ind;
    document.querySelector(".footer .selected").classList.remove("selected");
    indicator.classList.add("selected");
    updateTranslation(ind);
    updateTexts(ind);
  })
})

// Show prev
function slideLeft() {
  arrowRight.style.display = "unset";
  if (position == 0) {
    return;
  } else if(position == 7 && first == true){
    
    first = false;
    position++; 
  }
  document.querySelector(".footer .selected").classList.remove("selected");
  position--;
  indicatorParents.children[position].classList.add("selected")

  updateTranslation(position);
  if (position == 0) {
    arrowLeft.style.display = "none";
  }
}

// Show next
function slideRight() {
  arrowLeft.style.display = "unset";
  if (position == SECTIONS) {   
    return;
  } else if(position == 7 && first == false){
    texts[7].style.opacity = "0";
    texts[8].style.opacity = "1";
    first = true;
    position--;
  } else if(position==8){
    texts[8].style.opacity = "0";
  }
  document.querySelector(".footer .selected").classList.remove("selected");
  position++;
  indicatorParents.children[position].classList.add("selected")
  updateTranslation(position)
  if (position == SECTIONS) {   
    arrowRight.style.display = "none";
  }
}


function updateTexts() {
  console.log(position)
  for(let i = 0; i < 9; i++){
    if (position == i) {
      texts[i].style.opacity = "1";
      texts[8].style.opacity = "0";
    } else if(position == 7 && first == true){
      texts[7].style.opacity = "0";
      texts[8].style.opacity = "1";
    } else{
      texts[i].style.opacity = "0";
    }
  }

}