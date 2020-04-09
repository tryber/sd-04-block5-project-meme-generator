window.onload = function(){


    if (typeof(Storage)!=="undefined") {
        let textBox = document.getElementById("text-input");
        let arquivo = document.getElementById("meme-insert");
        let imgMeme = document.getElementById("meme-image");
        let intoText = document.getElementById("meme-text");
        let containerImg = document.getElementById("meme-image-container");

        let button1 = document.getElementById("button1");
        let button2 = document.getElementById("button2");
        let button3 = document.getElementById("button3");

        // criando função inserir o texto
        function inserText() {
            intoText.innerText = textBox.value;
        };


        // add o texto dentro da caixa de da img
        textBox.addEventListener("keyup",inserText);
        document.getElementById("meme-image-container").firstChild;
        // document.getElementById("meme-text").style.color="white";
        
        // add a img dentro div #img
        arquivo.addEventListener("input", function () {
            imgMeme.src = URL.createObjectURL(this.files[0]);
        })

        button1.addEventListener("click",function(){
            document.getElementById("meme-image-container").style.border="3px dashed red";
        });
        button2.addEventListener("click",function(){
            document.getElementById("meme-image-container").style.border="5px double blue";
        });
        button3.addEventListener("click",function(){
            document.getElementById("meme-image-container").style.border="6px groove green";
        });
        

    }else{
        alert("Não suporte Storage");
    }
}