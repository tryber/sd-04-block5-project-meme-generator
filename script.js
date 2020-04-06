let loadMeme = function(event) {
    let image = document.getElementById('meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);
};

let memeContainer = document.querySelector('#meme-image-container');
let memeText = document.querySelector('#text-input');

function putText () {
memeContainer.innerText = memeText.value;}

memeText.addEventListener('keyup', putText);




