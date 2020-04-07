window.onload = function(){

    let memeText = document.getElementById('text-input');
    let memeDiv = document.getElementById('meme-image-container');
    function inputText(){
        memeDiv.innerText = memeText.value;
    }
    memeText.addEventListener('keyup', inputText);

    
    //alert("Are you ready to generate a awsome meme???")

















}