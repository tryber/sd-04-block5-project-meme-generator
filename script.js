window.onload = function(){


    if (typeof(Storage)!=="undefined") {
        let textBox = document.getElementById("text-input");
        let arquivo = document.getElementById("meme-insert");
        let containerImg = document.getElementById("img");
        let intoText = document.getElementById("text-phrase");
     

        // criando função inserir o texto
        function inserText() {
            intoText.innerHTML = textBox.value;
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