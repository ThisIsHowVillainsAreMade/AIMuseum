let robots = document.getElementById("robots");
let moutain = document.getElementById("mountain");
let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let aivolution = document.getElementById("aivolution");

window.addEventListener("scroll", () => {
  let { scrollY } = window;

  (robots.style.top = 100), 5 * scrollY + "px";
  moutain.style.top = 150 + 0.05 * scrollY + "px";
  moon.style.left = 1.1 * scrollY + "px";
  sky.style.top = -1.2 * scrollY + "px";
  aivolution.style.top = 300 + -3 * scrollY + "px";
});
