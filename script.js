const userImage = document.getElementById('text-input'); //imagem do input file.
const container = document.getElementById('meme-image-container'); // container da imagem.
const txt = document.querySelector('div#meme-image-container p'); // tag p da imagem.
let img; //

userImage.addEventListener('change', addImage); // evento para o input file.

function addImage(event) {
    if(!img){
        img = document.createElement('img');
    } else {

    }
    img.src = URL.createObjectURL(event.target.files[0]);
    img.alt = 'Imagem do meme escolhido';
    img.id = 'meme-image';
    container.appendChild(img);
}
