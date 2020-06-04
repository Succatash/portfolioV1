const cards = document.querySelectorAll(".card");
const image_x = document.querySelectorAll("img.image");
const randomColor = getRandomColor();

// image_x.forEach((el) =>
// 	el.addEventListener("mouseout", () => {
// 		image_x.style.display = "none";
// 	})
// );

// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("click", () => console.log("clicked"));
// }
cards.forEach((el) => el.addEventListener("mouseover", convertCards));

function convertCards() {
	this.style.backgroundColor = getRandomColor();
	console.log("clikc");
}

// TODO:add the random color generator

function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	const o = Math.random() * 2;
	return "rgb(" + r + ", " + g + ", " + b + ")";
	// return `rgba(${r}, ${g}, ${b})`;
}
