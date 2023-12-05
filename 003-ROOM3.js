let images = [...document.querySelectorAll(".imagescards")];
let container = document.querySelector(".bigcontainer");
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
}

function animate() {
  current = parseFloat(lerp(current, target, ease)).toFixed(2);
  target = window.scrollY;
  setTransform(container, `translateX(-${current}px)`);
  animateImages();
  requestAnimationFrame(animate);
}

function animateImages() {
  let ratio = current / imagesWidth;
  let intersectionRatioValue;

  images.forEach((images, idx) => {
    intersectionRatioValue = ratio - (idx - 0.4);
    setTransform(images, `translateX(${intersectionRatioValue * 35}px)`);
  });
}

init();
animate();

document.querySelectorAll(".imagescards").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = "block";
    document.querySelector(".popup-image img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-image button").onclick = () => {
  document.querySelector(".popup-image").style.display = "none";
};
