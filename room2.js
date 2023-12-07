
let moveinable = false;

function openZoom(imageSrc, title, description) {
  let zoomImage = document.getElementById("zoomImage");
  let zoomTitle = document.querySelector(".title-zoom");
  let zoomDescrip = document.querySelector(".descrip");
  let zoomContainer = document.getElementById("zoomContainer");
  let blurBackground = document.getElementById("RblurBackground");

  moveinable=true
  

  zoomContainer.style.backgroundColor = '--clr-black';

  
  zoomImage.classList.add("flip-animation");

  
  blurBackground.style.display = "block";

  zoomImage.src = imageSrc;
  zoomTitle.innerText = title;
  zoomDescrip.innerText = description;

  
  zoomTitle.style.opacity = "1";
  zoomDescrip.style.opacity = "1";

  zoomContainer.style.display = "flex";
  zoomContainer.style.flexDirection = "inline-block";

  setTimeout(() => {
    zoomImage.classList.add("flip");
  }, 50);

  
  zoomImage.addEventListener("transitionend", () => {
    zoomImage.classList.remove("flip-animation", "flip");
  }, { once: true });
}

function closeZoom() {
  let zoomContainer = document.getElementById("zoomContainer");
  let zoomTitle = document.querySelector(".title");
  let zoomDescrip = document.querySelector(".descrip");
  let mvBody = document.querySelector('main');
  let blurBackground = document.getElementById("RblurBackground");

  moveinable = false

  mvBody.style.position ="relative";
  blurBackground.style.display = "none";


  zoomImage.src = "";
  zoomTitle.innerText = "";
  zoomDescrip.innerText = "";
  zoomContainer.style.display = "none";
 
  zoomTitle.style.opacity = "0";
  zoomDescrip.style.opacity = "0";
}

function move(e) {
  if(moveinable == false){
  window.scrollTo(2*e.clientX - window.innerWidth /2, 3*e.clientY - window.innerHeight /2);
  }
  else{
    return
  }
  
}