const inputImage = document.getElementById('meme-insert'); // Manipula o Input type="file".
const inputText = document.getElementById('text-input'); // Manipula o a caixa para inserir texto.
const container = document.getElementById('meme-image-container'); // container da imagem.
const txt = document.getElementById('meme-text'); // Manipula tag p do texto da imagem.
const img = document.getElementById('meme-image'); // Manipula a imagem.
const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');

inputImage.addEventListener('change', addImage); // evento para o input file.
inputText.addEventListener('keyup', addText);
btn1.addEventListener('click', mudaBorda);
btn2.addEventListener('click', mudaBorda);
btn3.addEventListener('click', mudaBorda);

function addImage() {
    img.src = URL.createObjectURL(event.target.files[0]);
    container.appendChild(img);
    img.style.display = 'block';
}

function addText() {
    let memeTxt = inputText.value;
    txt.innerText = memeTxt;
}

function mudaBorda(event) {
    let tipo = event.target.id;
    if(tipo === 'button1') {
        container.style.border = '3px dashed red';
    } else if(tipo === 'button2') {
        container.style.border = '5px double blue';
    } else {
        container.style.border = '6px groove green';
    }
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