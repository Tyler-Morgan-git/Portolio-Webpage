import initialRender from "./utils/initialRender.js";
import manualScroll from "./utils/manualScroll.js";
import globalVar from "./utils/globalVars.js";

function initSlideShow(startingSlide) {
  // set currentSlide in global variables
  globalVar.set("currentSlide", startingSlide);

  // adds initial render and Autoscroll timer
  initialRender();

  //adds logic for Manual scrolling
  manualScroll();
}

export default initSlideShow;
