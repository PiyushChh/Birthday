const imageArray = [
	"./dog1.jpg",
	"./dog2.webp",
	"./dog3.jpg",
	"./dog4.webp",
	"./dog5.jpg",
	"./dog6.webp",
	"./dog7.jpg",
	"./dog8.jpg",
	"./dog9.jpg",
    "./dog10.jpg",
    "./dog11.jpg",
    "./dog12.jpg",
    "./dog13.jpg",
    "./dog14.webp",
    "./dog15.webp",
    "./dog16.webp"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array){
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}