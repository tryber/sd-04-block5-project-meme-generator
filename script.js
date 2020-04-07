window.onload = function(){

    //função de adicionar o texto!-----------------------------------------
    let memeText = document.getElementById('text-input');
    let text = document.getElementById('meme-text');

    function inputText(){
        text.innerHTML = memeText.value
        };

    memeText.addEventListener('input', inputText);
    //função de adicionar o texto!-----------------------------------------
    

    //função de adicionar imagem!------------------------------------------
    let memeInput = document.getElementById('meme-insert');
    let meme = document.getElementById('meme-image');
    
    function memeInput(){
        meme.src = URL.createObjectURL(event.target.files[0]);
        };

    memeInput.addEventListener('input', memeInput);
    //função de adicionar imagem!------------------------------------------

    
    let memeDiv = document.getElementById('meme-image-container');
    //let rect1 = memeDiv.getBoundingClientRect();
   
    

    
    //alert("Are you ready to generate a awsome meme???")

















}