import {
  solvePath,
  slideButtonSelector,
  slideShowContainerPosition,
  renderSlidesRight,
  renderSlidesLeft,
  deleteSlidesLeft,
  deleteSlidesRight,
} from "./utilities.js";
import globalVar from "./globalVars.js";

// add event listeners to all buttons
function handleManualScroll() {
  let slideButtons = document.querySelectorAll(".slideShowButton");
  slideButtons.forEach(function (btn) {
    btn.addEventListener("click", () => {
      //breaks function if multiple Slides exist ie. A transition is already happening
      if (document.querySelectorAll(".slide").length > 1) {
        return;
      }
      let currentSlide = globalVar.get("currentSlide");
      console.log("Manual Scroll");
      let desiredSlide = parseInt(event.target.textContent);

      let [direction, renderSlides] = solvePath(currentSlide, desiredSlide);

      if (direction == "left") {
        let slides = renderSlidesLeft(renderSlides);
        slideShowContainerPosition(desiredSlide, slides, true, direction);
        deleteSlidesRight();
      } else if (direction == "right") {
        let slides = renderSlidesRight(renderSlides);
        slideShowContainerPosition(desiredSlide, slides, true, direction);
        deleteSlidesLeft();
      }
      slideButtonSelector(desiredSlide);
      globalVar.set("currentSlide", desiredSlide);
      document.querySelector(".slideShowProgress").classList.add("fadeSlideShowBar");
    });
  });
}

export default handleManualScroll;
