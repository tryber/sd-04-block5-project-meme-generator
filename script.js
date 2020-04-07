window.onload = function(){
    //função de adicionar o texto!
    let memeText = document.getElementById('text-input');
    let text = document.getElementById('meme-text');
    function inputText(){
    text.innerHTML = memeText.value
    };
    memeText.addEventListener('input', inputText);
    //função de adicionar imagem!
    let memeInput = document.getElementById('meme-insert');
    let meme = document.getElementById('meme-image');
    function imgInput(){
    meme.src = URL.createObjectURL(event.target.files[0]);
    };
    memeInput.addEventListener('input', imgInput);
    //função de alterar margens!------------------------------------------
    let b1 = document.getElementById('button1');
    function border1(){
    memeDiv.style.border='3px dashed red';
    }
    b1.addEventListener('click', border1);
    let b2 = document.getElementById('button2');
    function border2(){
    memeDiv.style.border='5px double blue';
    }
    b2.addEventListener('click', border2);
    let b3 = document.getElementById('button3');
    function border3(){
    memeDiv.style.border='6px groove green';
    }
    b3.addEventListener('click', border3);
    let b4 = document.getElementById('meme-1');
    function meme1(){
    meme.src="./imgs/meme1.jpeg"
    }
    b4.addEventListener('click', meme1);
    let b5 = document.getElementById('meme-2');
    function meme2(){
    meme.src="./imgs/meme2.jpeg"
    }
    b5.addEventListener('click', meme2);
    let b6 = document.getElementById('meme-3');
    function meme3(){
    meme.src="./imgs/meme3.jpeg"
    }
    b6.addEventListener('click', meme3);
    let b7 = document.getElementById('meme-4');
    function meme4(){
    meme.src="./imgs/meme4.jpeg"
    }
    b7.addEventListener('click', meme4);
    let memeDiv = document.getElementById('meme-image-container');
}
