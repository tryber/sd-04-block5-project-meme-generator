window.onload = function(){


    if (typeof(Storage)!=="undefined") {
        let textBox = document.getElementById("text-input");
        let arquivo = document.getElementById("meme-insert");
        let containerImg = document.getElementById("meme-image");
        let intoText = document.getElementById("meme-text");
     

        // criando função inserir o texto
        function inserText() {
            intoText.innerText = textBox.value;
        };

        // add o texto dentro da caixa de da img
        textBox.addEventListener("keyup",inserText);

        // add a img dentro div #img
        arquivo.addEventListener("input", function () {
            containerImg.src = URL.createObjectURL(this.files[0]);
            localStorage.setItem("foto",containerImg.value);
        })

    }else{
        alert("Não suporte Storage");
    }
}