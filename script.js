let memeContainer;
let img;
let text;
window.onload = function () {
	memeContainer = document.getElementById("meme-image-container");
	img = document.getElementById("meme-image");
	text = document.getElementById("meme-text");
}
function addImageToContainer(event) {
	img.src = URL.createObjectURL(event.target.files[0]);
	img.onload = function () {
		memeContainer.style.height = img.clientHeight + "px";
	}
}

function addTextToContainer(event, index) {
	text.innerHTML = event.target.value;
}

function changeTextColor(event) {
	text.style.color = event.target.value;
}
