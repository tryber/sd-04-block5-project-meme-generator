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

        let picture1 = document.getElementById("meme-1")
        let picture2 = document.getElementById("meme-2")
        let picture3 = document.getElementById("meme-3")

        // função muda meme famosos
        function mudaFoto1() {
            imgMeme.src = "meme1.jpeg";
        }
        picture1.addEventListener("click",mudaFoto1);

        function mudaFoto2() {
            imgMeme.src = "meme2.jpeg";
        }
        picture2.addEventListener("click",mudaFoto2);

        function mudaFoto3() {
            imgMeme.src = "meme3.jpeg";
        }
        picture3.addEventListener("click",mudaFoto3);

        // criando função inserir o texto
        function inserText() {
            intoText.innerText = textBox.value;
        };

        // add o texto dentro da caixa de da img
        textBox.addEventListener("keyup",inserText);
        
        // add a img dentro div #img
        arquivo.addEventListener("input", function () {
            imgMeme.src = URL.createObjectURL(this.files[0]);
        })

        // botoes de bordas
        button1.addEventListener("click",function(){
            containerImg.style.border="3px dashed red";
        });
        button2.addEventListener("click",function(){
            containerImg.style.border="5px double blue";
        });
        button3.addEventListener("click",function(){
           containerImg.style.border="6px groove green";
        });

        // picture1.addEventListener("click",function(){
        //    picture1.src = "meme1.jpg";
        //     imgMeme = picture1.value;
        // });
        

    }else{
        alert("Não suporte Storage");
    }
}