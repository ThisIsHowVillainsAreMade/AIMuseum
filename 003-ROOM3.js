const scrollContainer = document.querySelector("section");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

const newContainer = document.querySelector(".container");
const newGallery = document.querySelector(".gallery");

const cloned = newGallery.cloneNode(true);
newContainer.appendChild(cloned);
cloned.style.right = newGallery.offsetWidth + "px";

newContainer.style.display = "flex";

const threshold = 120;

window.addEventListener("scroll", () => {
  const halfWidth = newGallery.clientWidth;

  if (window.scrollX > halfWidth) {
    window.scrollTo(0, window.scrollX - halfWidth);
  } else if (window.scrollX < threshold) {
    window.scrollTo(0, halfWidth + window.scrollX);
  }
});
