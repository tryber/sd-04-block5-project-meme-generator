let memeContainer;
let img;
let text;
window.onload = function () {
	memeContainer = document.getElementById("meme-image-container");
	img = document.getElementById("meme-image");
	text = document.getElementById("meme-text");
	memeContainer.style.height = img.clientHeight + "px";
}
function addImageToContainer(event) {
	loadImage(URL.createObjectURL(event.target.files[0]));
}

function addTextToContainer(event, index) {
	text.innerHTML = event.target.value;
}

function changeTextColor(event) {
	text.style.color = event.target.value;
}

function loadImage(imgPath) {
	img.src = imgPath;
	img.onload = function () {
		memeContainer.style.height = img.clientHeight + "px";
	}
}

function changeBorder(size, style, color) {
	memeContainer.style.border = `${size} ${style} ${color}`;
}
