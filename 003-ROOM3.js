let images = [...document.querySelectorAll(".img")];
let container = document.querySelector(".container");
let containerWidth;
let imagesWidth;
let current = 0;
let target = 0;
let ease = 0.03;

function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

function setTransform(el, transform) {
  el.style.transform = transform;
}

function init() {
  containerWidth = container.getBoundingClientRect().width;
  imagesWidth = containerWidth / images.length;
  document.body.style.height = "4100px";
}

function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(4);
  target = window.scrollY;
  setTransform(container, `translateX(-${current}px)`);
  requestAnimationFrame(animate);
}

init();
animate();
