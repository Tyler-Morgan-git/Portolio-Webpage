import getProjectData from "./projectData.js";
import generateSlide from "./generateSlide.js";
import globalVar from "./globalVars.js";
import resetTimer from "./autoScroll.js";

export { slideShowContainerSizing, slideButtonSelector, solvePath, renderSlidesLeft, renderSlidesRight, deleteSlidesLeft, deleteSlidesRight };

const slideShowContainer = document.querySelector(".slideShowContainer");
const slideButtonContainer = document.querySelector(".slideShowButtons");
const totalNumberofSlides = getProjectData().length;
const currentSlide = globalVar.get("currentSlide");

//selects the slide show button based off of desired Slide
function slideButtonSelector(desiredSlide) {
  //turn off button of currentSlide
  if (document.querySelector(".slideShowButtonSelected") != null) {
    document.querySelector(".slideShowButtonSelected").classList.toggle("slideShowButtonSelected");
  }
  //turn on button of desired Slide
  document.querySelectorAll(".slideShowButton")[desiredSlide].classList.toggle("slideShowButtonSelected");
}

// toggles
function slideAnimationToggle(state) {
  if (state == true) {
    console.log("Animation On");
    slideShowContainer.classList.add("slideTransition");
  } else {
    console.log("Animation Off");
    slideShowContainer.classList.remove("slideTransition");
  }
}

//sets the width of the slideShowContainer to allow overflow.
function slideShowContainerSizing(numSlides) {
  slideShowContainer.style.width = numSlides * 100 + "%";
}

//sets the position to the desired slide
export function slideShowContainerPosition(desiredSlide, slidesArray, animation, direction) {
  slideAnimationToggle(animation);

  let desiredPosition = slidesArray.indexOf(desiredSlide);
  let numSlides = slidesArray.length;

  //translation values
  if (direction == "left") {
    //translate logic for left scroll
    slideShowContainer.style.transform = `translateX(${((numSlides - 1) / numSlides) * 100}%)`;
  } else {
    //translate logic for right scroll
    slideShowContainer.style.transform = `translateX(-${(desiredPosition / slidesArray.length) * 100}%)`;
  }
}

function renderSlidesRight(slidesToRender) {
  slideShowContainerSizing(slidesToRender.length + 1);
  for (let i = 0; i < slidesToRender.length; i++) {
    slideShowContainer.appendChild(generateSlide(slidesToRender[i]));
    console.log("render right");
  }
  slidesToRender.unshift(currentSlide);
  return slidesToRender;
}

// deletes all children except last
function deleteSlidesLeft() {
  return (document.querySelector(".slideTransition").ontransitionend = () => {
    slideAnimationToggle(false);
    while (slideShowContainer.childNodes.length > 1) {
      console.log("removed left");
      slideShowContainer.removeChild(slideShowContainer.firstChild);
    }
    slideShowContainer.style.transform = `translateX(0%)`;
    slideShowContainerSizing(1);
    document.querySelector(".slideShowProgress").classList.remove("fadeSlideShowBar");
    resetTimer();
  });
}

function renderSlidesLeft(slidesToRender) {
  slideShowContainerSizing(slidesToRender.length + 1);
  slidesToRender.reverse();
  for (let i = 0; i < slidesToRender.length; i++) {
    let firstChild = slideShowContainer.firstChild;
    let newElement = generateSlide(slidesToRender[i]);
    slideShowContainer.insertBefore(newElement, firstChild);
    console.log("render left");
  }
  slidesToRender.reverse();
  slidesToRender.push(currentSlide);
  slideShowContainer.style.right = `${(slidesToRender.length - 1) * 100}%`;
  return slidesToRender;
}

//deletes all children except first
function deleteSlidesRight() {
  return (document.querySelector(".slideTransition").ontransitionend = () => {
    slideAnimationToggle(false);
    while (slideShowContainer.childNodes.length > 1) {
      console.log("removed right");
      slideShowContainer.removeChild(slideShowContainer.lastChild);
    }
    slideShowContainer.style.transform = `translateX(0%)`;
    slideShowContainer.style.right = "0%";
    slideShowContainerSizing(1);
    document.querySelector(".slideShowProgress").classList.remove("fadeSlideShowBar");
    resetTimer();
  });
}

// builds an array indexing all slides
function buildSlidesArray() {
  const slides = [];
  for (let i = 0; i < totalNumberofSlides; i++) {
    slides.push(i);
  }
  return slides;
}

//function returns slides to render for manual click
function solvePath(currentSlide, desiredSlide) {
  let direction;
  let slidesArray = buildSlidesArray();

  if (desiredSlide > currentSlide) {
    direction = "right";
    var renderArray = slidesArray.slice(currentSlide + 1, desiredSlide + 1);
  } else {
    direction = "left";
    var renderArray = slidesArray.slice(desiredSlide, currentSlide);
  }

  return [direction, renderArray];
}
