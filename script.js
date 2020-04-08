let inpFile = document.getElementById('inpFile');
let previewContainer = document.getElementById('meme-image-container');
let previewImage = previewContainer.querySelector('.image-preview__image');
let previewDefaultText = document.getElementById('image-preview__defaut-text');
let text = document.getElementById('text-input');
let button = document.getElementById('button');
button.addEventListener('click',function(){
    var fReader = new FileReader();
    fReader.readAsDataURL(inpFile.files[0]);
    fReader.onloadend = function(event){
    previewImage.src = event.target.result;
    previewDefaultText.innerHTML = String(text.value);
    }
})
