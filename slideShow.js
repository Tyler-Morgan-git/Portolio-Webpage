function getProjectData() {
  return (projectData = [
    {
      projImg: `assets/photos/project1.jpg`,
      projTitle: "0. Hack.api",
      projDescription:
        "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien ut mi. Pellentesque congue justo nec ante egestas, vel vulputate ex tempus. Quisque at leo varius, volutpat mi sit amet, laoreet turpis. Proin elementum faucibus purus eget pretium. Aliquam sit amet sem mattis, gravida tellus nec, mollis est. Fusce non velit id justo posuere ultrices. Ut finibus tempus neque, in interdum ligula scelerisque sit amet. Quisque bibendum tincidunt mi, sit amet faucibus urna dapibus non. Fusce eget dictum mauris, sit amet consectetur leo. Nunc enim lectus, iaculis sed justo sit amet, porttitor tempus libero",
      projLink: "project1.html",
    },
    {
      projImg: `assets/photos/project2.jpg`,
      projTitle: "1. Space Image Classification",
      projDescription:
        "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien ut mi. Pellentesque congue justo nec ante egestas, vel vulputate ex tempus. Quisque at leo varius, volutpat mi sit amet, laoreet turpis. Proin elementum faucibus purus eget pretium. Aliquam sit amet sem mattis, gravida tellus nec, mollis est. Fusce non velit id justo posuere ultrices. Ut finibus tempus neque, in interdum ligula scelerisque sit amet. Quisque bibendum tincidunt mi, sit amet faucibus urna dapibus non. Fusce eget dictum mauris, sit amet consectetur leo. Nunc enim lectus, iaculis sed justo sit amet, porttitor tempus libero",
      projLink: "project1.html",
    },
    {
      projImg: `assets/photos/project3.jpg`,
      projTitle: "2. kek Project",
      projDescription:
        "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien ut mi. Pellentesque congue justo nec ante egestas, vel vulputate ex tempus. Quisque at leo varius, volutpat mi sit amet, laoreet turpis. Proin elementum faucibus purus eget pretium. Aliquam sit amet sem mattis, gravida tellus nec, mollis est. Fusce non velit id justo posuere ultrices. Ut finibus tempus neque, in interdum ligula scelerisque sit amet. Quisque bibendum tincidunt mi, sit amet faucibus urna dapibus non. Fusce eget dictum mauris, sit amet consectetur leo. Nunc enim lectus, iaculis sed justo sit amet, porttitor tempus libero",
      projLink: "project1.html",
    },
    {
      projImg: `assets/photos/project1.jpg`,
      projTitle: "3. Big Dingus",
      projDescription:
        "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien ut mi. Pellentesque congue justo nec ante egestas, vel vulputate ex tempus. Quisque at leo varius, volutpat mi sit amet, laoreet turpis. Proin elementum faucibus purus eget pretium. Aliquam sit amet sem mattis, gravida tellus nec, mollis est. Fusce non velit id justo posuere ultrices. Ut finibus tempus neque, in interdum ligula scelerisque sit amet. Quisque bibendum tincidunt mi, sit amet faucibus urna dapibus non. Fusce eget dictum mauris, sit amet consectetur leo. Nunc enim lectus, iaculis sed justo sit amet, porttitor tempus libero",
      projLink: "project1.html",
    },
    {
      projImg: `assets/photos/project2.jpg`,
      projTitle: "4. Increasing program runtimes",
      projDescription:
        "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien ut mi. Pellentesque congue justo nec ante egestas, vel vulputate ex tempus. Quisque at leo varius, volutpat mi sit amet, laoreet turpis. Proin elementum faucibus purus eget pretium. Aliquam sit amet sem mattis, gravida tellus nec, mollis est. Fusce non velit id justo posuere ultrices. Ut finibus tempus neque, in interdum ligula scelerisque sit amet. Quisque bibendum tincidunt mi, sit amet faucibus urna dapibus non. Fusce eget dictum mauris, sit amet consectetur leo. Nunc enim lectus, iaculis sed justo sit amet, porttitor tempus libero",
      projLink: "project1.html",
    },
    {
      projImg: `assets/photos/project3.jpg`,
      projTitle: "5. Reducing program runtimes",
      projDescription:
        "Project Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien utscription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien uscription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien uscription. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales, dui aliquam venenatis finibus, metus velit aliquam augue, at consequat eros sapien u mi. Pellentesque congue justo nec ante egestas, vel vulputate ex tempus. Quisque at leo varius, volutpat mi sit amet, laoreet turpis. Proin elementum faucibus purus eget pretium. Aliquam sit amet sem mattis, gravida tellus nec, mollis est. Fusce non velit id justo posuere ultrices. Ut finibus tempus neque, in interdum ligula scelerisque sit amet. Quisque bibendum tincidunt mi, sit amet faucibus urna dapibus non. Fusce eget dictum mauris, sit amet consectetur leo. Nunc enim lectus, iaculis sed justo sit amet, porttitor tempus libero",
      projLink: "project1.html",
    },
  ]);
}

function initSlideShow() {
  //variables
  let currentSlide;
  let totalNumberofSlides = getProjectData().length;
  const slideShowContainer = document.querySelector(".slideShowContainer");
  const slideButtonContainer = document.querySelector(".slideShowButtons");

  // generate the buttons for the SlideShow
  function buildButtons() {
    for (let i = 0; i < totalNumberofSlides; i++) {
      let button = document.createElement("div");
      button.className = "slideShowButton";
      button.append(document.createTextNode(i));
      slideButtonContainer.appendChild(button);
    }

    let all_btn = document.querySelectorAll(".slideShowButton");
    all_btn.forEach(function (btn) {
      btn.addEventListener("click", handleClickScroll);
    });
  }
  buildButtons();

  //selects the slide show button based off of desired Slide
  function slideButtonSelector(desiredSlide) {
    //turn off button of currentSlide
    if (document.querySelector(".slideShowButtonSelected") != null) {
      document
        .querySelector(".slideShowButtonSelected")
        .classList.toggle("slideShowButtonSelected");
    }
    //turn on button of desired Slide
    document
      .querySelectorAll(".slideShowButton")
      [desiredSlide].classList.toggle("slideShowButtonSelected");
  }

  function generateSlide(slideNum) {
    projData = getProjectData();
    //create new element
    let article = document.createElement("article");
    let img = document.createElement("img");
    let imgWrapper = document.createElement("div");
    let articleTextWrapper = document.createElement("div");
    let header = document.createElement("h3");
    let description = document.createElement("p");
    let link = document.createElement("a");
    let icon = document.createElement("span");

    //set classnames
    article.className = "slide";
    img.className = "articleimg";
    imgWrapper.className = "articleImgWrapper";
    articleTextWrapper.className = "articletext";
    icon.className = "fab fa-github fa-1x";

    //set other attributes
    link.href = projData[slideNum].projLink;
    img.src = projData[slideNum].projImg;

    //add text
    header.appendChild(document.createTextNode(projData[slideNum].projTitle));
    description.appendChild(
      document.createTextNode(projData[slideNum].projDescription)
    );
    link.appendChild(document.createTextNode("Check out this project!"));

    //make data structure
    link.appendChild(icon);
    articleTextWrapper.appendChild(header);
    articleTextWrapper.appendChild(description);
    articleTextWrapper.appendChild(link);
    imgWrapper.appendChild(img);
    article.appendChild(imgWrapper);
    article.appendChild(articleTextWrapper);

    return article;
  }

  // Turns slide transition on
  function slideAnimationOn() {
    console.log("Animation On");
    slideShowContainer.classList.add("slideTransition");
  }
  //Turns slide transition off
  function slideAnimationOff() {
    console.log("Animation Off");
    slideShowContainer.classList.remove("slideTransition");
  }

  // builds an indexing array around the selected Slide
  function buildSlidesArray(buildAroundSlide) {
    const slides = [];
    for (let i = 1; i < totalNumberofSlides * 2; i++) {
      slides.push(Math.abs((i + buildAroundSlide) % totalNumberofSlides));
    }
    return slides;
  }

  //function calculates closest way to desired slide
  function calcClosestPath(desiredPosition) {
    let slidesArray = buildSlidesArray(currentSlide);
    let centerOfSlidesArray = Math.floor(slidesArray.length / 2);

    //left distance from index array
    const leftIndex = slidesArray.indexOf(desiredPosition);
    const leftDist = Math.abs(leftIndex - centerOfSlidesArray);

    //right distance from index array
    const rightIndex = slidesArray.indexOf(
      desiredPosition,
      centerOfSlidesArray
    );
    const rightDist = Math.abs(rightIndex - centerOfSlidesArray);

    if (leftDist < rightDist) {
      renderArray = slidesArray.slice(leftIndex, centerOfSlidesArray + 1);
      renderArray.pop();
      return ["left", renderArray];
    } else {
      let renderArray = slidesArray.slice(centerOfSlidesArray, rightIndex + 1);
      renderArray.shift();
      return ["right", renderArray];
    }
  }

  //sets the width of the slideShowContainer to allow overflow.
  function slideShowContainerSizing(numSlides) {
    slideShowContainer.style.width = numSlides * 100 + "%";
  }

  //sets the position to the desired slide
  function slideShowContainerPosition(
    desiredSlide,
    slidesArray,
    animation,
    direction
  ) {
    if (animation === true) {
      slideAnimationOn();
    } else if (animation === false) {
      slideAnimationOff();
    }
    let desiredPosition = slidesArray.indexOf(desiredSlide);
    let numSlides = slidesArray.length;

    if (direction == "left") {
      //translate logic for left scroll
      slideShowContainer.style.transform = `translateX(${
        ((numSlides - 1) / numSlides) * 100
      }%)`;
    } else {
      //translate logic for right scroll
      slideShowContainer.style.transform = `translateX(-${
        (desiredPosition / slidesArray.length) * 100
      }%)`;
    }
  }

  // this is used to initiate the slide Show
  function renderOneSlide(desiredSlide) {
    console.log("Initial Render");
    currentSlide = desiredSlide;
    slideShowContainerSizing(1);
    slideShowContainer.style.transform = "translateX(0)";
    slideShowContainer.appendChild(generateSlide(desiredSlide));
    slideButtonSelector(desiredSlide);
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
      slideAnimationOff();
      while (slideShowContainer.childNodes.length > 1) {
        console.log("removed left");
        slideShowContainer.removeChild(slideShowContainer.firstChild);
      }
      slideShowContainer.style.transform = `translateX(0%)`;
      slideShowContainerSizing(1);
      document
        .querySelector(".slideShowProgress")
        .classList.remove("slideShowUnprogress");
      resetTimerProgress();
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
      slideAnimationOff();
      while (slideShowContainer.childNodes.length > 1) {
        console.log("removed right");
        slideShowContainer.removeChild(slideShowContainer.lastChild);
      }
      slideShowContainer.style.transform = `translateX(0%)`;
      slideShowContainer.style.right = "0%";
      slideShowContainerSizing(1);
      document
        .querySelector(".slideShowProgress")
        .classList.remove("slideShowUnprogress");
      resetTimerProgress();
    });
  }

  // resets interval timer and progress bar
  function setTimer() {
    let slideTimer;

    return () => {
      let element = document.querySelector(".slideShowProgress");
      element.classList.remove("slideShowProgress");
      void element.offsetWidth;
      element.classList.add("slideShowProgress");

      clearInterval(slideTimer);

      //start timer

      slideTimer = setInterval(handleAutoScroll, 10000);
    };
  }

  const resetTimerProgress = setTimer();
  resetTimerProgress();

  //Initate the first slide
  currentSlide = 5;
  renderOneSlide(currentSlide);

  function handleClickScroll() {
    //breaks function if multiple Slides exist ie. A transition is already happening

    if (document.querySelectorAll(".slide").length > 1) {
      return;
    }
    console.log("Manual Scroll");
    let desiredSlide = parseInt(event.target.textContent);

    let [direction, renderSlides] = calcClosestPath(desiredSlide);

    if (direction == "left") {
      slides = renderSlidesLeft(renderSlides);
      slideShowContainerPosition(desiredSlide, slides, true, direction);
      slideButtonSelector(desiredSlide);
      currentSlide = desiredSlide;
      document
        .querySelector(".slideShowProgress")
        .classList.add("slideShowUnprogress");
      deleteSlidesRight();
    } else if (direction == "right") {
      slides = renderSlidesRight(renderSlides);
      slideShowContainerPosition(desiredSlide, slides, true, direction);
      slideButtonSelector(desiredSlide);
      currentSlide = desiredSlide;
      document
        .querySelector(".slideShowProgress")
        .classList.add("slideShowUnprogress");
      deleteSlidesLeft();
    }
  }

  function handleAutoScroll() {
    //breaks function if multiple Slides exist ie. A transition is already happening
    if (document.querySelectorAll(".slide").length > 1) {
      return;
    }
    console.log("Auto Scroll");
    //sets desiredSlide to next slide
    let desiredSlide = (currentSlide + 1) % totalNumberofSlides;

    //renders desiredSlide to the right
    const slides = renderSlidesRight([desiredSlide]);

    //do animation and select button
    slideShowContainerPosition(desiredSlide, slides, true, "right");
    slideButtonSelector(desiredSlide);
    currentSlide = desiredSlide;
    deleteSlidesLeft();
    //window animation frame
  }

  //document.addEventListener("click", handleAutoScroll);
}
initSlideShow();
