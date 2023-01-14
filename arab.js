const imageArray = [
	"./rabbit1.jfif",
	"./rabbit2.jpg",
	"./rab3.webp",
	"./rabbit4.jpg",
	"./rabbit5.jpg",
	"./rabbit6.jpg",
	"./rabbit7.jpg",
	"./rabbit8.jpg",
	"./rabbit9.jpg",
    "./rabbit10.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}