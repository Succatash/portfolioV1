let cards = document.querySelectorAll(".card");
console.log(cards);
cards.forEach((el) =>
  el.addEventListener("click", () => console.log("clicked"))
);

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => console.log("clicked"));
// }
