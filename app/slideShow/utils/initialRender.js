import { slideButtonSelector, slideShowContainerSizing } from "./utilities.js";
import getProjectData from "./projectData.js";
import generateSlide from "./generateSlide.js";
import resetTimer from "./autoScroll.js";
import globalVar from "./globalVars.js";

function initialRender() {
  let desiredSlide = globalVar.get("currentSlide");
  const totalNumberofSlides = getProjectData().length;
  const slideShowContainer = document.querySelector(".slideShowContainer");
  const slideButtonContainer = document.querySelector(".slideShowButtons");

  function buildButtons() {
    for (let i = 0; i < totalNumberofSlides; i++) {  // for number of images
      let button = document.createElement("div"); //creates a <div> </div>
      button.className = "slideShowButton";       // makes <div class="slideShowButton"> 
      button.append(document.createTextNode(i));
      slideButtonContainer.appendChild(button);   // appends <div> to specified parent container
    }
  }

  // this is used to initiate the slide Show
  function renderOneSlide(desiredSlide) {
    console.log("Initial Render");
    slideShowContainerSizing(1);
    slideShowContainer.style.transform = "translateX(0)";
    slideShowContainer.appendChild(generateSlide(desiredSlide));
    slideButtonSelector(desiredSlide);
  }

  buildButtons();
  renderOneSlide(desiredSlide);
  resetTimer();
}

export default initialRender;
