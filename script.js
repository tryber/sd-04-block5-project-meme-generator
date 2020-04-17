let inpFile = document.getElementById('meme-insert');
let previewContainer = document.getElementById('meme-image-container');
let previewImage = previewContainer.querySelector('#meme-image');
let previewDefaultText = document.getElementById('meme-text');
let text = document.getElementById('text-input');
let button = document.getElementById('button');

inpFile.addEventListener('change',function(){
    var fReader = new FileReader();
    fReader.readAsDataURL(inpFile.files[0]);
    fReader.onloadend = function(event){
    previewImage.src = event.target.result;
    }
})
button.addEventListener('click',function(){
    previewDefaultText.innerHTML = String(text.value);
})
