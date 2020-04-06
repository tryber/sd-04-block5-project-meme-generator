window.onload = function(){
    if (typeof(Storage)!=="undefined") {
        //criando variavel da caixa de texto
        let textBox = document.getElementById("text-input");

        // criando variavel da caixa de img
        let imgBox = document.querySelector("#meme-image-container");

        // criando função inserir o texto
        function inserText() {
            imgBox.innerHTML = textBox.value;
          
        };
        //add o texto dentro da caixa de da img
        textBox.addEventListener("keyup",inserText);

    }else{
        alert("Não suporte Storage");
    }
}