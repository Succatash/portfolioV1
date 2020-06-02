let cards = document.querySelectorAll(".card");
let textOverCard = document.querySelectorAll(".textOverCard");

console.log(cards);
cards.forEach((el) => el.addEventListener("mouseover", convertCards));

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => console.log("clicked"));
// }

function convertCards() {
	this.style.backgroundColor = getRandomColor();
	textOverCard.style.color = "purple";
	this.innerHTML = "Hello Test Test Test";
	console.log("mousedOver");
}

// TODO:add the random color generator
function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const o = Math.random() * 2;
	// return `rgba(${r}, ${g}, ${b}, ${o})`;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
