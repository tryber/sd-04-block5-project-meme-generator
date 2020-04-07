let inpFile = document.getElementById('inpFile');
let previewContainer = document.getElementById('imagePreview');
let previewImage = previewContainer.querySelector('.image-preview__image');
let previewDefaultText = previewContainer.querySelector('image-preview__default-text');

inpFile.addEventListener('change',function(){
    var fReader = new FileReader();
    fReader.readAsDataURL(inpFile.files[0]);
    fReader.onloadend = function(event){
    
    previewImage.src = event.target.result;
    console.log(event.target.result);
    }
})