const inputImage = document.getElementById('meme-insert'); //imagem do input file.
const container = document.getElementById('meme-image-container'); // container da imagem.
const txt = document.querySelector('div#meme-image-container p'); // tag p da imagem.
const img = document.getElementById('meme-image'); //

inputImage.addEventListener('change', addImage); // evento para o input file.


function addImage() {
    img.src = URL.createObjectURL(event.target.files[0]);
    container.appendChild(img);
    img.style.display = 'block';
}

/*function addImage(event) {
    if(!img){
        img = document.createElement('img');
    } else {

    }
    img.src = URL.createObjectURL(event.target.files[0]);
    img.alt = 'Imagem do meme escolhido';
    img.id = 'meme-image';
    container.appendChild(img);
    img.style.display = 'block';
}*/