//Get the root element
const r = document.querySelector(':root');
let darkModeState = new Boolean(false);

function darkToLight() {
  r.style.setProperty('--backGroundColor', 'var(--lightModeBG)');
  r.style.setProperty('--backGroundHoverColor', 'var(--lightModeHoverBG)');
  r.style.setProperty('--textColor', 'var(--lightModeText)');
  r.style.setProperty('--accentColor','var(--lightModeAccent)');
}

function lightToDark() {
    r.style.setProperty('--backGroundColor', 'var(--darkModeBG)');
    r.style.setProperty('--backGroundHoverColor', 'var(--darkModeHoverBG)');
    r.style.setProperty('--textColor', 'var(--darkModeText)');
    r.style.setProperty('--accentColor', 'var(--darkModeAccent)');
  }



  document.querySelector("#darkModeButton").addEventListener('click', function() {
  if(darkModeState == false) {
    lightToDark()
    darkModeState = true;
    document.querySelector("#darkModeButton .navtext" ).innerHTML = "Light Mode"
  } else {
    darkToLight()
    darkModeState = false;
    document.querySelector("#darkModeButton .navtext" ).innerHTML = "Dark Mode"
  }
})
  
