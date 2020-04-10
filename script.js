let textInput = document.getElementById("text-input");
let memeImage = document.querySelector("input[type='file']");

function readImage(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('meme-image')
                .src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function readTextImage(input) {
    document.getElementById('meme-text').innerText = input.value
}

memeImage.addEventListener('change', function () {
    readImage(this);
});

textInput.addEventListener('keypress', function () {
    readTextImage(this);
});
textInput.addEventListener('change', function() {
    readTextImage(this);
});
