import getProjectData from "./projectData.js";
import globalVar from "./globalVars.js";
import { renderSlidesRight, deleteSlidesLeft, slideShowContainerPosition, slideButtonSelector } from "./utilities.js";

const totalNumberofSlides = getProjectData().length;
function handleAutoScroll() {
  let currentSlide = globalVar.get("currentSlide");
  console.log("Auto Scroll");
  //breaks function if multiple Slides exist ie. A transition is already happening
  if (document.querySelectorAll(".slide").length > 1) {
    return;
  }
  console.log("Auto Scroll");
  //sets desiredSlide to next slide
  let desiredSlide = (currentSlide + 1) % totalNumberofSlides;

  //renders desiredSlide to the right
  const slidesArray = renderSlidesRight([desiredSlide]);

  //do animation and select button
  slideShowContainerPosition(desiredSlide, slidesArray, true, "right");
  slideButtonSelector(desiredSlide);
  currentSlide = desiredSlide;
  deleteSlidesLeft();
  //window animation frame
}

// resets interval timer and progress bar
function createTimer(millisecond) {
  console.log("reset timer");
  let slideTimer;

  return () => {
    let element = document.querySelector(".slideShowProgress");
    element.classList.remove("slideShowProgress");
    void element.offsetWidth;
    element.classList.add("slideShowProgress");

    clearInterval(slideTimer);

    //start timer

    slideTimer = setInterval(handleAutoScroll, millisecond);
  };
}

const resetTimer = createTimer(10000);

export default resetTimer;
