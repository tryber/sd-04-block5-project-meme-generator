let userImage = document.getElementById('text-input');
let txt = document.querySelector('div#meme-image-container p');

userImage.addEventListener('change', addImage);

function addImage() {
    const img = document.querySelector('img');
    img.style.display = 'inline';
    txt.style.display = 'block'
    img.src = URL.createObjectURL(event.target.files[0]);
}