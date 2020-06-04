const cards = document.querySelectorAll(".card");
const image_x = document.getElementById("image");
const tester = document.getElementById;
const randomColor = getRandomColor();

cards.forEach((el) => el.addEventListener("mouseover", convertCards));

cards.forEach((el) =>
	el.addEventListener("mouseout", () => (image_x.style.display = "initial"))
);

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => console.log("clicked"));
// }

function convertCards() {
	image_x.style.display = "none";
	this.style.backgroundColor = randomColor;
	console.log("clikc");
}

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
