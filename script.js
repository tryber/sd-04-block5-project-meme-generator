//Texts
let textInput = document.querySelector('#text-input');
let text = document.querySelector('#meme-text');
//Image
let imgInput = document.getElementById('meme-insert');
let memeImg = document.getElementById('meme-image');
let container = document.querySelector('#meme-image-container');

//Text EventListener
textInput.addEventListener('keyup', function(){
    text.innerHTML = textInput.value;
});

//Bloco Imagens
function addImageToContainer(event){
if (!memeImg){
img = document.createElement("img");}
memeImg.src = URL.createObjectURL(event.target.files[0]);
container.appendChild(memeImg);
}
imgInput.addEventListener('input', addImageToContainer);
//Botoes - moldura
let btnMoldura1 = document.querySelector('#button1');
let btnMoldura2 = document.querySelector('#button2');
let btnMoldura3 = document.querySelector('#button3');

btnMoldura1.addEventListener('click', function(){
    container.style.border = "3px dashed red"
});

btnMoldura2.addEventListener('click', function(){
    container.style.border = "5px double blue"
});

btnMoldura3.addEventListener('click', function(){
    container.style.border = "6px groove green"
});
//Botoes - meme
let btnMeme1 = document.querySelector('#meme-1');
let btnMeme2 = document.querySelector('#meme-2');
let btnMeme3 = document.querySelector('#meme-3');
let btnMeme4 = document.querySelector('#meme-4');

btnMeme1.addEventListener('click', function(){
    memeImg.src = '/imgs\/meme1.jpeg';
})

btnMeme2.addEventListener('click', function(){
    memeImg.src = '/imgs\/meme2.jpeg';
})

btnMeme3.addEventListener('click', function(){
    memeImg.src = '/imgs\/meme3.jpeg';
})

btnMeme4.addEventListener('click', function(){
    memeImg.src = '/imgs\/meme4.jpeg';
})
