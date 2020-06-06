let cards = document.querySelectorAll(".card");
const randomColor = getRandomColor();
const image_x = document.querySelectorAll(".image");

cards.forEach((el, index) =>
  el.addEventListener("mouseover", function convertCards() {
    el.style.backgroundColor = getRandomColor();
    console.log("click");
    image_x[index].style.display = "none";
    console.log("works");
  })
);

cards.forEach((el, index) =>
  el.addEventListener(
    "mouseout",
    () => (image_x[index].style.display = "initial")
  )
);

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => console.log("clicked"));
// }

// TODO:add the random color generator

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const o = Math.random() * 2;
  return `rgba(${r}, ${g}, ${b})`;
  // return "rgb(" + r + ", " + g + ", " + b + ")";
}

function removeImg() {}
