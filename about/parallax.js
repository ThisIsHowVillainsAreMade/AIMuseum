// COVER PARALLAX CONTENT.

const robots = document.getElementById("robots");
const moutain = document.getElementById("mountain");
const sky = document.getElementById("sky");
const moon = document.getElementById("moon");
const aivolution = document.getElementById("aivolution");

const modalAbout = document.getElementById("about-page");

// BACKGROUND TITLE PARALLAX CONTENT.

// littleGirlAiPicture
// AiBotPicture
// faceToFaceAiPicture
// tomorrowPicture

// function parallaxPictures() {
//   const modalScroll = -modalAbout.scrollTop;
//   const contentPictures = document.querySelectorAll(".backgroundPictures");
//   ContentPictures.forEach(function (image) {
//     const speed = image.getAttribute("data-speed");
//     const yPos = scrollTop * speed;
//     image.style.transform = "translateY(" + yPos + "px)";
//   });
// }

// MODAL SCROLL

modalAbout.addEventListener("scroll", () => {
  const { scrollTop } = modalAbout;
  robots.style.top = -200 + 0.1 * scrollTop + "px";
  moutain.style.top = 150 + 0.05 * scrollTop + "px";
  moon.style.left = 1.1 * scrollTop + "px";
  sky.style.top = -1.2 * scrollTop + "px";
  aivolution.style.top = 500 + -1 * scrollTop + "px";
  // parallaxPictures();
});
