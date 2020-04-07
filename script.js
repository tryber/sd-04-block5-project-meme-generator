//Texts
let textInput = document.querySelector('#text-input');
let text = document.querySelector('#meme-text');
//Image
let imgInput = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');
let memeContainer = document.querySelector('#meme-image-container');

//Text EventListener
textInput.addEventListener('keyup', function(){
    text.innerHTML = textInput.value }
)

//Bloco Imagens
function addImageToContainer(event){
if (!img){
img = document.createElement("img");
}
console.log(event.target.files[0])
img.src = URL.createObjectURL(event.target.files[0]);
memeContainer.appendChild(img);
}

imgInput.addEventListener('input', addImageToContainer);

//Botoes - moldura
let btnMoldura1 = document.querySelector('#button1');
let btnMoldura2 = document.querySelector('#button2');
let btnMoldura3 = document.querySelector('#button3');

btnMoldura1.addEventListener('click', function(){
    memeContainer.style.border = "3px dashed red"
});

btnMoldura2.addEventListener('click', function(){
    memeContainer.style.border = "5px double blue"
});

btnMoldura3.addEventListener('click', function(){
    memeContainer.style.border = "6px groove green"
});

//Botoes - meme
let btnMeme1 = document.querySelector('#meme-1');
let btnMeme2 = document.querySelector('#meme-2');
let btnMeme3 = document.querySelector('#meme-3');

btnMeme1.addEventListener('click', function(){
    img.src = '/imgs\/meme1.jpg';
})

btnMeme2.addEventListener('click', function(){
    img.src = '/imgs\/meme2.jpg';
})

btnMeme3.addEventListener('click', function(){
    img.src = '/imgs\/meme3.jpg';
})

