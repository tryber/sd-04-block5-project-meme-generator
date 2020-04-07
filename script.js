let textInput = document.getElementById('text-input');
let text = document.getElementById('meme-text');

textInput.addEventListener('input', function(){
    text.innerHTML = textInput.value }
)

let imgInput = document.getElementById('meme-insert');
let img = document.getElementById('meme-image');

imgInput.addEventListener('input', function(){
    console.log(imgInput.files[0].name);
    img.src = URL.createObjectURL(event.target.files[0]);
});