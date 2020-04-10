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

const memeImage = document.querySelector("input[type='file']");

memeImage.addEventListener('change', function () {
    readImage(this);
});

const textInput = document.getElementById("text-input");
textInput.addEventListener('keypress', function () {
    readTextImage(this);
});
textInput.addEventListener('change', function() {
    readTextImage(this);
});
