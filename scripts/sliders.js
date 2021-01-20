//-----MENU SLIDER-----

const prev = document.querySelector(".menuWrapperArrow_prev");
const next = document.querySelector(".menuWrapperArrow_next");

const track = document.querySelector(".track");

let carouselWidth =
  document.querySelector(".carousel-container").offsetWidth - 24;

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector(".carousel-container").offsetWidth;
});
let index = 0;
console.log(track.offsetWidth, carouselWidth, index);

index == 0 && prev.classList.add("hide");
if (track.offsetWidth - index * 186 <= carouselWidth) {
  next.classList.add("hide");
}
console.log(track.offsetWidth, carouselWidth, index);
next.addEventListener("click", () => {
  index++;

  if (index > 0) {
    prev.classList.remove("hide");
  }

  if (track.offsetWidth - index * 186 <= carouselWidth) {
    next.classList.add("hide");
  }
  track.style.transform = `translateX(-${index * 186}px)`;
});

prev.addEventListener("click", () => {
  index--;

  if (index == 0) {
    prev.classList.add("hide");
  }

  if (track.offsetWidth - index * 186 > carouselWidth) {
    next.classList.remove("hide");
  }

  track.style.transform = `translateX(-${index * 186}px)`;
});
