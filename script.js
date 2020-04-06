let memeContainer;
window.onload = function(){
	memeContainer = document.getElementById("meme-image-container");
}
let img;
function addImageToContainer(event){
	if (!img){
		img = document.createElement("img");
		img.style.width = "100%";	
		memeContainer.appendChild(img);
	}
	img.src = URL.createObjectURL(event.target.files[0]);
	img.onload = function(){
		memeContainer.style.height = img.clientHeight + "px";
	}
}
