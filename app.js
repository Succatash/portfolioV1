let cardss = document.getElementsByClassName("card red");
let cards = document.querySelectorAll(".card");
console.log(cards, cardss);
cards.forEach((el) =>
  el.addEventListener("click", () => console.log("clicked"))
);

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => console.log("clicked"));
// }
