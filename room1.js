// SCROLL REVEAL ANIMATION
function scrollReveal() {
  // Declaring a reveal point 100px from top & bottom of the window
  const revealPoint = 100;
  // Declaring all pictures as element to be revealed
  const revealElements = document.querySelectorAll(".background");

  // Loop on all cards, to check if the top or the bottom of the element is inside the reveal area. If this is the case, the active class will be added to the element.
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    const revealBottom = revealElements[i].getBoundingClientRect().bottom;
    if (revealTop < windowHeight - revealPoint && revealBottom > revealPoint) {
      revealElements[i].classList.add("active");
    } else {
      revealElements[i].classList.remove("active");
    }
  }
}

// Add an event listener to detect scrolling on page, launching the scroll reveal function.
window.addEventListener("scroll", scrollReveal);
