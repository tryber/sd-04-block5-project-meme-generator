let memeContainer;
let img;
let text;
window.onload = function () {
	memeContainer = document.getElementById("meme-image-container");
}
function addImageToContainer(event) {
	if (!img) {
		img = document.createElement("img");
		img.style.width = "100%";
		img.className ="meme-image"
		memeContainer.prepend(img);
	}
	img.src = URL.createObjectURL(event.target.files[0]);
	img.onload = function () {
		memeContainer.style.height = img.clientHeight + "px";
	}
}

function addTextToContainer(event, index) {
	if (!text) {
		text = document.createElement("p");
		memeContainer.appendChild(text);
	}
	text.innerHTML = event.target.value;
}

function changeTextColor(event) {
	for (let i in txts) {
		txts[i].style.color = event.target.value;
	}
}
