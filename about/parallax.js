let robots = document.getElementById("robots");
let moutain = document.getElementById("mountain");
let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let aivolution = document.getElementById("aivolution");

let modalAbout = document.getElementById("about-page");

modalAbout.addEventListener("scroll", () => {
  let { scrollTop } = modalAbout;

  robots.style.top = -200 + 0.1 * scrollTop + "px";
  moutain.style.top = 150 + 0.05 * scrollTop + "px";
  moon.style.left = 1.1 * scrollTop + "px";
  sky.style.top = -1.2 * scrollTop + "px";
  aivolution.style.top = 500 + -5 * scrollTop + "px";
});
