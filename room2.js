function move(e) {
      window.scrollTo(1.5*e.clientX - window.innerWidth / 1.05, 2.5*e.clientY - window.innerHeight / 1.05);
      
}
/*const container = document.getElementById('container');
let delay = 100;
let mouseX = 0;
let mouseY = 0;

function move(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
  setTimeout(updateTransform, delay);
}

function updateTransform() {
  const deltaX = (1.5 * mouseX - window.innerWidth / 1.01);
  const deltaY = (1.7 * mouseY - window.innerHeight / 1.01);
  container.style.transition = 'transform 0.3s ease-out'; // Ajustez la durée et le timing function selon vos besoins
  container.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
}*/


function openZoom(imageSrc, title, description) {
  let zoomImage = document.getElementById("zoomImage");
  let zoomTitle = document.querySelector(".title-zoom");
  let zoomDescrip = document.querySelector(".descrip");
  let zoomContainer = document.getElementById("zoomContainer");
  let blurBackground = document.getElementById("blurBackground");
  let mvBody = document.querySelector('body');
  
  mvBody.style.position ="fixed"

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
    //blurBackground.style.display = "none";
  }, { once: true });
}

function closeZoom() {
  let zoomContainer = document.getElementById("zoomContainer");
  let zoomTitle = document.querySelector(".title");
  let zoomDescrip = document.querySelector(".descrip");
  let mvBody = document.querySelector('body');


  mvBody.style.position ="relative";
  blurBackground.style.display = "none";


   zoomImage.src = "";
   zoomTitle.innerText = "";
   zoomDescrip.innerText = "";
 
   zoomContainer.style.display = "none";
 
   zoomTitle.style.opacity = "0";
   zoomDescrip.style.opacity = "0";
}