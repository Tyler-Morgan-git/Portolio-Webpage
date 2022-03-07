import getProjectData from "./projectData.js";

function generateSlide(slideNum) {
  const projData = getProjectData();
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
  description.appendChild(document.createTextNode(projData[slideNum].projDescription));
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

export default generateSlide;
