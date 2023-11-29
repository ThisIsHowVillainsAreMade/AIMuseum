// SETTING THE VOLUME OF THE AUDIO
let audio = document.getElementById("r1_audio");
audio.volume = 0.2;

// SCROLL REVEAL ANIMATION

function scrollReveal() {
  // Declaring a reveal point 100px from bottom
  const revealPoint = 100;
  // Declaring all cards as element to be revealed
  const revealElements = document.querySelectorAll(".card");

  // Loop on all cards, to check if the top of the element is inside the reveal area. If this is the case, the active class will be added to the element.
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    if (revealTop < windowHeight - revealPoint) {
      revealElements[i].classList.add("active");
    } else {
      revealElements[i].classList.remove("active");
    }
  }
}

// Add an event listener to detect scrolling on page, launching the scroll reveal function.
window.addEventListener("scroll", scrollReveal);
