let textInput = document.getElementById("text-input");
let memeImage = document.getElementById("meme-insert");

function readImage(input) {
    document.getElementById('meme-image').src = URL.createObjectURL(input.files[0]);
}

function readTextImage(input) {
    document.getElementById('meme-text').innerText = input.value
}

memeImage.addEventListener('change', function () {
    readImage(this);
});

textInput.addEventListener("input", function () {
    readTextImage(this);
});
