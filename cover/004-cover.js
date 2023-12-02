let road = document.getElementById("road");
let moutain = document.getElementById("mountain");
let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let aivolution = document.getElementById("aivolution");

window.addEventListener("scroll", () => {
  let { scrollY } = window;

  (road.style.top = 100), 5 * scrollY + "px";
  moutain.style.top = 150 + 0.05 * scrollY + "px";
  moon.style.left = 1.1 * scrollY + "px";
  sky.style.top = -1.2 * scrollY + "px";
  aivolution.style.top = 300 + -3 * scrollY + "px";
  // aivolution.style.top = 120 + -1.5 * scrollY + "px";
});
