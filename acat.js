const imageArray = [
	"./Cat1.jfif",
	"./cat2.jfif",
	"./cat3.jfif",
	"./cat4.jpg",
	"./cat5.jfif",
	"./cat6.jfif",
	"./cat7.jpg",
	"./cat8.jfif",
	"./cat9.jpg",
    "./cat10.jpg",
    "./cat11.jpg",
    "./cat12.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}